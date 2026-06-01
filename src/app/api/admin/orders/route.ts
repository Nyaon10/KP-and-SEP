import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';
const secret = new TextEncoder().encode(JWT_SECRET);

// Helper function to check if the user is allowed in
async function verifyAdmin(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;
  if (!token) return false;
  
  try {
    await jwtVerify(token, secret);
    return true; 
  } catch (error) {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const isAuthorized = await verifyAdmin(request);
  if (!isAuthorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const rawOrders = await prisma.orders.findMany({
      orderBy: { created_at: 'desc' },
      include: { order_items: true }
    });

    const mappedOrders = rawOrders.map((order: any) => ({
      id: order.id,
      date: order.created_at.toISOString().split('T')[0],
      customer: {
        name: order.customer_name,
        phone: order.customer_phone,
        email: order.customer_email,
        address: order.shipping_address,
      },
      items: order.order_items.map((item: any) => ({
        name: item.product_name,    
        qty: item.quantity,         
        price: item.price_at_time   
      })),
      shippingFee: order.shipping_fee || 0,
      total: order.total_amount || 0,
      status: order.status,
      courier: order.courier || '-',
      trackingNumber: order.tracking_number || '',
      cancelReason: order.cancel_reason || ''
    }));

    return NextResponse.json(mappedOrders);
  } catch (error: any) {
    console.error("Orders GET Error:", error.message);
    return NextResponse.json([], { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const isAuthorized = await verifyAdmin(request);
  if (!isAuthorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status, trackingNumber, cancelReason } = body;

    let updateData: any = { status };

    if (status === 'SHIPPED') {
      const order = await prisma.orders.findUnique({
        where: { id },
        include: { order_items: true }
      });

      if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

      const courierCompany = order.courier ? order.courier.split(' - ')[0].toLowerCase() : 'jne';

      // 1. Extract dynamic postal code and clean the address string
      const dynamicPostalCode = order.shipping_address.slice(-5);
      const cleanAddress = order.shipping_address.slice(0, -7);

      // 2. Calculate Pickup Date (Today) and Time (2 Hours from now, in WIB timezone)
      const deliveryDate = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Jakarta' }); // YYYY-MM-DD
      const deliveryTime = new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleTimeString('en-GB', { 
        timeZone: 'Asia/Jakarta', 
        hour: '2-digit', 
        minute: '2-digit' 
      }); // HH:MM

      // 3. Construct the official Biteship "Create Order" payload
      const biteshipPayload = {
        origin_contact_name: "Wanst Coffee & Roastery",
        origin_contact_phone: "081234567890",
        origin_address: "Wanst Roastery HQ, Sidoarjo", 
        origin_postal_code: "61256", 
        destination_contact_name: order.customer_name,
        destination_contact_phone: order.customer_phone || "0000000000",
        destination_address: cleanAddress,
        destination_postal_code: dynamicPostalCode, 
        courier_company: courierCompany,
        courier_type: "reg", 
        delivery_type: "later", 
        delivery_date: deliveryDate, // 👇 Added to fix the 40002035 error
        delivery_time: deliveryTime, // 👇 Added to fix the 40002035 error
        items: order.order_items.map((item: any) => ({
          name: item.product_name,
          value: item.price_at_time,
          quantity: item.quantity,
          weight: 250 
        }))
      };

      try {
        const biteshipRes = await fetch('https://api.biteship.com/v1/orders', {
          method: 'POST',
          headers: {
            'Authorization': process.env.BITESHIP_API_KEY!,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(biteshipPayload)
        });

        const biteshipData = await biteshipRes.json();

        if (biteshipRes.ok) {
          updateData.tracking_number = biteshipData.courier.waybill_id || biteshipData.id;
        } else {
          console.error("Biteship API Error:", biteshipData);
          updateData.tracking_number = trackingNumber || "API-ERROR-FALLBACK"; 
        }
      } catch (biteshipError) {
        console.error("Biteship unreachable:", biteshipError);
        updateData.tracking_number = trackingNumber || "NETWORK-ERROR"; 
      }
    } else if (status === 'CANCELLED') {
      updateData.cancel_reason = cancelReason;
    }

    const result = await prisma.$transaction(async (tx: any) => {
      const updatedOrder = await tx.orders.update({
        where: { id },
        data: updateData
      });

      if (status === 'SHIPPED') {
        const existingTx = await tx.transactions.findFirst({
          where: { reference_id: id }
        });

        if (!existingTx) {
          await tx.transactions.create({
            data: {
              id: `TRX-${Date.now()}`,
              type: 'CREDIT',
              category: 'SALES',
              amount: updatedOrder.total_amount, 
              description: `Order ${id} Payment (${updatedOrder.customer_name})`,
              reference_id: id,
              transaction_date: new Date()
            }
          });
        }
      }
      return updatedOrder;
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Orders PATCH Error:", error.message);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}