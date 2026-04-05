import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'; // 5 dots up!

export async function GET() {
  try {
    // 1. Fetch all unique category slugs from your products table
    const products = await prisma.products.findMany({
      select: { category_slug: true },
      distinct: ['category_slug'],
    });

    // 2. Format the slugs into readable names 
    // (e.g., "exotic-arabica-blends" -> "Exotic Arabica Blends")
    const categories = products
      .filter(p => p.category_slug) // Ignore any null categories
      .map((p) => {
        const slug = p.category_slug;
        const name = slug
          .split('-')
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
          
        return { slug, name };
      });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return NextResponse.json([], { status: 500 });
  }
}