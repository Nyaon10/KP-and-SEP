import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { updates } = body; // Expecting an array of { id, cogs, price }

    if (!updates || !Array.isArray(updates)) {
      return NextResponse.json({ error: "Invalid updates format" }, { status: 400 });
    }

    // Use a transaction to ensure all updates succeed or all fail together
    const updatePromises = updates.map((item: any) =>
      prisma.products.update({
        where: { id: item.id },
        data: {
          cogs: parseInt(item.cogs),
          base_price: parseInt(item.price), // Mapping frontend 'price' to DB 'base_price'
        },
      })
    );

    await prisma.$transaction(updatePromises);

    return NextResponse.json({ success: true, message: "Pricing updated successfully" });
  } catch (error: any) {
    console.error("Pricing Update Error:", error);
    return NextResponse.json({ error: "Failed to update pricing policies" }, { status: 500 });
  }
}