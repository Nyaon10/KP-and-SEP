import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma'; // Should be 6 dots up depending on where your lib folder is!

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // In Next.js 15, params is a Promise
) {
  try {
    const { id } = await params;

    const product = await prisma.products.findUnique({
      where: { id: id }
    });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return NextResponse.json({ error: 'System error' }, { status: 500 });
  }
}