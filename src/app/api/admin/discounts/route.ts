import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { productId, discountPrice, discountStart, discountEnd, isOnSale } = body;

    const updatedProduct = await prisma.products.update({
      where: { id: productId },
      data: {
        discount_price: parseInt(discountPrice) || 0,
        // Now Prisma recognizes these fields!
        discount_start: discountStart || null, 
        discount_end: discountEnd || null,     
        is_on_sale: isOnSale
      }
    });

    return NextResponse.json(updatedProduct);
  } catch (error: any) {
    console.error("Discount Update Error:", error);
    return NextResponse.json({ error: "Failed to update discount" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const today = new Date().toISOString().split('T')[0];

    // AUTO-CLEANUP: Update any product where the discount has passed its end date
    await prisma.products.updateMany({
      where: {
        is_on_sale: true,
        discount_end: {
          lt: today // "lt" means "less than" (the date has passed)
        }
      },
      data: {
        is_on_sale: false,
        discount_price: 0,
        discount_start: null,
        discount_end: null
      }
    });

    // Now fetch the clean data
    const products = await prisma.products.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        categories: true,
        product_images: true 
      }
    });

    const categories = await prisma.categories.findMany();
    
    return NextResponse.json({ products, categories });
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to fetch inventory" }, { status: 500 });
  }
}