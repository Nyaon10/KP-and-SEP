import { NextResponse } from 'next/server';
import prisma from '../../../../../../lib/prisma'; // Adjust dots if necessary based on your structure

// GET: Fetch all reviews for a specific product
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const reviews = await prisma.product_reviews.findMany({
      where: { product_id: id },
      orderBy: { created_at: 'desc' } // Newest reviews first
    });
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Fetch Reviews Error:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

// POST: Create a new review for a specific product
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const newReview = await prisma.product_reviews.create({
      data: {
        product_id: id,
        user_name: body.user,
        rating: body.rating,
        comment: body.comment,
      }
    });
    
    return NextResponse.json(newReview);
  } catch (error) {
    console.error("Post Review Error:", error);
    return NextResponse.json({ error: "Failed to post review" }, { status: 500 });
  }
}