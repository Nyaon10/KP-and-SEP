import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

// 1. GET: Fetch all products (for the Inventory Table)
export async function GET() {
  try {
    const products = await prisma.products.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        categories: true,
        // No more product_images here!
      }
    });

    const categories = await prisma.categories.findMany();
    
    return NextResponse.json({ products, categories });
  } catch (error: any) {
    console.error("Database GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch inventory" }, { status: 500 });
  }
}

// 2. POST: Create a new product (for the Add Product Form)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Generate a unique ID
    const productId = `BEAN-${Date.now().toString().slice(-6)}`;

    // Beautifully simple direct creation
    const newProduct = await prisma.products.create({
      data: {
        id: productId,
        name: body.name,
        category_slug: body.categorySlug,
        origin: body.origin,
        description: body.description,
        tasting_notes: body.tastingNotes,
        roast_profile: body.roast,
        acidity_level: parseInt(body.acidityLevel),
        roast_level: parseInt(body.roastLevel),
        base_price: parseInt(body.price),
        stock: parseInt(body.stock) || 0,
        roast_log: body.roastLog,
        main_image: body.image, 
        gallery: body.gallery || [], // Saves JSON array directly
      },
    });

    return NextResponse.json(newProduct);
  } catch (error: any) {
    console.error("Database POST Error:", error);
    return NextResponse.json({ error: "Failed to create product", details: error.message }, { status: 500 });
  }
}