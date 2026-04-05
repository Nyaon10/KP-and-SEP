import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

// 1. GET: Fetch all products (for the Inventory Table)
export async function GET() {
  try {
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

    // Use a transaction so we don't get "half-saved" data if one part fails
    const newProduct = await prisma.$transaction(async (tx) => {
      // Create the main product
      const product = await tx.products.create({
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
        },
      });

      // Create gallery images if they exist
      if (body.gallery && body.gallery.length > 0) {
        await tx.product_images.createMany({
          data: body.gallery.map((url: string) => ({
            product_id: productId,
            image_url: url,
          })),
        });
      }

      return product;
    });

    return NextResponse.json(newProduct);
  } catch (error: any) {
    console.error("Database POST Error:", error);
    return NextResponse.json({ error: "Failed to create product", details: error.message }, { status: 500 });
  }
}