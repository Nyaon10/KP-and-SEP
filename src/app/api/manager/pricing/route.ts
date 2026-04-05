import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function PATCH(request: Request) {
  try {
    const { updates } = await request.json(); // Expecting array of {id, base_price, cogs}

    const transaction = updates.map((u: any) => 
      prisma.products.update({
        where: { id: u.id },
        data: { 
          base_price: parseInt(u.base_price),
          cogs: parseInt(u.cogs) 
        }
      })
    );

    await prisma.$transaction(transaction);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update pricing" }, { status: 500 });
  }
}