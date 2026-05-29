import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import midtransClient from 'midtrans-client';
import { prisma } from '../../../lib/prisma'; 
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';
const secret = new TextEncoder().encode(JWT_SECRET);

// Initialize Midtrans Snap Client
const snap = new midtransClient.Snap({
  isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
  serverKey: process.env.MIDTRANS_SERVER_KEY || '',
  clientKey: process.env.MIDTRANS_CLIENT_KEY || '',
});

export async function POST(req: NextRequest) {
  // 1. Authenticate the CUSTOMER using the token cookie
  const tokenCookie = req.cookies.get('authToken');
  const token = tokenCookie?.value;

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized. Please log in.' }, { status: 401 });
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    const customerId = payload.userId as string;

    // 👇 Catch the shippingFee from the frontend body
    const body = await req.json();
    const { items, totalAmount, shippingAddress, shippingFee } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ message: 'Cart is empty' }, { status: 400 });
    }

    const customer = await prisma.customers.findUnique({
      where: { id: customerId }
    });

    if (!customer) {
      return NextResponse.json({ message: 'Customer not found' }, { status: 404 });
    }

    const orderId = `WANST-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Save to database
    await prisma.$transaction(async (tx: any) => {
      await tx.orders.create({
        data: {
          id: orderId,
          customer_id: customer.id,
          customer_name: customer.name,
          customer_email: customer.email,
          customer_phone: customer.phone || 'N/A',
          shipping_address: shippingAddress || 'Pending Address', 
          total_amount: totalAmount, // This is now Subtotal + Shipping
          status: 'PENDING_PROCESSING',
        }
      });

      const orderItemsData = items.map((item: any) => ({
        order_id: orderId,
        product_id: item.id,
        product_name: item.name,
        quantity: item.quantity,
        price_at_time: item.price,
      }));

      await tx.order_items.createMany({
        data: orderItemsData,
      });
    });

    // 🚨 MIDTRANS MATH FIX 🚨
    // 1. Map the coffee items
    const midtransItemDetails = items.map((item: any) => ({
      id: item.id,
      price: item.price,
      quantity: item.quantity,
      name: item.name.substring(0, 50),
    }));

    // 2. Push the shipping fee as an official item on the receipt
    if (shippingFee && shippingFee > 0) {
      midtransItemDetails.push({
        id: 'SHIPPING',
        price: shippingFee,
        quantity: 1,
        name: 'Shipping Fee',
      });
    }

    // Configure Midtrans
    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: totalAmount,
      },
      customer_details: {
        first_name: customer.name,
        email: customer.email,
        phone: customer.phone || '',
      },
      // Give Midtrans the fully combined list!
      item_details: midtransItemDetails, 
    };

    // Get Payment Token from Midtrans
    const transaction = await snap.createTransaction(parameter);

    return NextResponse.json({
      message: 'Checkout initialized successfully',
      orderId,
      paymentUrl: transaction.redirect_url,
      token: transaction.token,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Checkout API Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message }, 
      { status: 500 }
    );
  }
}