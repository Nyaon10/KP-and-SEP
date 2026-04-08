import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

// GET: Fetch ALL reviews across the entire store for the Admin Panel
export async function GET() {
  try {
    const reviews = await prisma.product_reviews.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        products: { 
          // We include the related product so the admin knows what the comment is talking about!
          select: { name: true, category_slug: true }
        }
      }
    });
    
    return NextResponse.json(reviews);
  } catch (error: any) {
    console.error("Admin Fetch Reviews Error:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}