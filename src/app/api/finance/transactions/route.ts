import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    // THE FIX: Fetch from 'transactions' 
    const history = await prisma.transactions.findMany({
      orderBy: { transaction_date: 'desc' } 
    });
    return NextResponse.json(history);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // THE FIX: Save manual entries to 'transactions'
    const newTx = await prisma.transactions.create({
      data: {
        id: `TRX-${Date.now()}`,
        type: body.type,
        category: body.category,
        amount: parseInt(body.amount),
        description: body.description,
        transaction_date: body.date ? new Date(body.date) : new Date(),
      }
    });
    return NextResponse.json(newTx);
  } catch (error) {
    return NextResponse.json({ error: "Failed to add" }, { status: 500 });
  }
}