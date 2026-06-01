import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma'; // Adjust dots if needed

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Midtrans sends us the order ID and the new status
    const { order_id, transaction_status } = body;

    if (!order_id || !transaction_status) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // 👇 THE ULTIMATE OVERRIDE: Cast as 'any' to bypass the local cache glitch
    let newStatus: any = 'PENDING_PROCESSING';

    // Translate Midtrans jargon into our database statuses
    if (transaction_status === 'settlement' || transaction_status === 'capture') {
      newStatus = 'PAID';
    } else if (transaction_status === 'cancel' || transaction_status === 'deny' || transaction_status === 'expire') {
      newStatus = 'CANCELLED';
    } else if (transaction_status === 'pending') {
      newStatus = 'PENDING_PROCESSING';
    }

    // Update the order in Prisma
    await prisma.orders.update({
      where: { id: order_id },
      data: { status: newStatus } 
    });

    // We must return a 200 OK so Midtrans knows we received the message!
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Midtrans Webhook Error:", error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}