import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
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

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, trackingNumber, cancelReason } = body;

    let updateData: any = { status };

    if (status === 'SHIPPED') {
      updateData.tracking_number = trackingNumber;
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