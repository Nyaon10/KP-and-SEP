import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    const history = await prisma.procurements.findMany({
      orderBy: { created_at: 'desc' }
    });
    return NextResponse.json(history || []);
  } catch (error) {
    console.error("GET Procurement Error:", error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("📥 Received Procurement Data:", body); 

    // Ensure cost is a valid number, default to 0 if NaN
    const parsedCost = parseInt(body.total_cost);
    const safeCost = isNaN(parsedCost) ? 0 : parsedCost;

    // Use a transaction to ensure both tables update
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create the Procurement log
      const procurement = await tx.procurements.create({
        data: {
          supplier: body.supplier || 'Unknown Supplier',
          items_description: body.items_description || 'No description provided',
          total_cost: safeCost,
          logistics: body.logistics || 'SELF_PICKUP',
          courier_service: body.courier_service || null,
          status: 'ORDERED', 
          // Safely parse the date, or fallback to now
          ordered_date: body.ordered_date ? new Date(body.ordered_date) : new Date(), 
        }
      });

      console.log("✅ Procurement Created:", procurement.id);

      // 2. Record Expense in the REAL Finance table
      // THE FIX: Changed from 'finance_transactions' to 'transactions'
      await tx.transactions.create({
        data: {
          id: `TRX-${Date.now()}`, // Creates an ID like your screenshot
          type: 'DEBIT', // Changed to DEBIT to match your format
          category: 'PROCUREMENT',
          amount: safeCost,
          description: `Purchase PO-${procurement.id.substring(0,8)} (${body.supplier})`,
          reference_id: procurement.id,
          transaction_date: new Date() // Using your exact column name
        }
      });

      console.log("✅ Finance Record Created in 'transactions' table");

      return procurement;
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("❌ Prisma Transaction Failed:", error.message || error);
    return NextResponse.json(
      { error: "Database error. Check terminal for details.", details: error.message }, 
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status, date } = await request.json();
    
    const updateData: any = { status };
    if (status === 'SENT') updateData.sent_date = new Date(date);
    if (status === 'RECEIVED') updateData.arrival_date = new Date(date);

    const updated = await prisma.procurements.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("PATCH Error:", error.message);
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
}