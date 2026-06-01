import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { jwtVerify } from 'jose';

// ==================================================================
// 1. GET ROUTE: This serves the orders to the customer's frontend
// ==================================================================
export async function GET(req: NextRequest) { // 👈 Changed to NextRequest
  try {
    // Safely grab the cookie using Next.js built-in tools. 
    // We check both 'authToken' and 'token' just in case!
    let token = req.cookies.get('authToken')?.value;
    if (!token) {
      token = req.cookies.get('token')?.value; 
    }

    if (!token) {
      console.warn("Auth check failed: No token found in cookies.");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'yoursecretkey');
    const { payload } = await jwtVerify(token, secret);
    
    // 👇 ADD THIS LINE TO DEBUG: Let's see what is actually inside your token!
    console.log("Decoded Token Payload:", payload);
    
    // 👇 Added a few more common property names your login route might have used
    const userId = payload.sub as string || payload.id as string || payload.userId as string;

    if (!userId) {
      console.warn("Auth check failed: No user ID in token payload.");
      return NextResponse.json({ error: "Invalid token payload" }, { status: 401 });
    }

    const userOrders = await prisma.orders.findMany({
      where: { 
        customer_id: userId 
      },
      orderBy: { created_at: 'desc' },
      include: { order_items: true }
    });

    return NextResponse.json(userOrders);

  } catch (error: any) {
    console.error("Orders GET Error:", error.message);
    
    // If the token is expired or tampered with, it throws an error.
    // We should send a 401 so the frontend kicks them to the login page to get a fresh token.
    if (error.code === 'ERR_JWT_EXPIRED' || error.message.includes('signature')) {
      return NextResponse.json({ error: "Session expired" }, { status: 401 });
    }

    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

// ==================================================================
// 2. PATCH ROUTE: This handles the Admin updates & Biteship Sync
// ==================================================================
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status, trackingNumber, cancelReason } = body;

    if (!id || !status) {
      return NextResponse.json({ message: 'Missing order ID or status' }, { status: 400 });
    }

    const updateData: any = { status };

    if (status === 'SHIPPED' && trackingNumber) {
      updateData.tracking_number = trackingNumber;

      try {
        const biteshipRes = await fetch('https://api.biteship.com/v1/trackings/import', {
          method: 'POST',
          headers: {
            'Authorization': process.env.BITESHIP_API_KEY!,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            courier_code: "jne", 
            tracking_number: trackingNumber
          })
        });

        if (!biteshipRes.ok) {
          console.warn("Biteship Sync Warning: Could not import tracking, but DB was updated.");
        }
      } catch (biteshipError) {
        console.error("Biteship unreachable:", biteshipError);
      }
    }

    if (status === 'CANCELLED') {
      updateData.cancel_reason = cancelReason;
    }

    const updatedOrder = await prisma.orders.update({
      where: { id: id },
      data: updateData,
    });

    return NextResponse.json(updatedOrder, { status: 200 });
  } catch (error) {
    console.error("Order Update Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}