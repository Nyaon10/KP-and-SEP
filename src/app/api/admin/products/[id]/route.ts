import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma'; 

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // 1. Await the params (Required in Next.js 15+)
    const { id } = await params;
    
    // 2. Parse the body
    const body = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Product ID is missing" }, { status: 400 });
    }

    // 3. Update the Product (Main table)
    const updatedProduct = await prisma.products.update({
      where: { id: id },
      data: {
        name: body.name,
        category_slug: body.categorySlug,
        origin: body.origin,
        roast_profile: body.roast,
        acidity_level: body.acidityLevel,
        roast_level: body.roastLevel,
        stock: body.stock,
        description: body.description,
        tasting_notes: body.tastingNotes,
        roast_log: body.roastLog,
        main_image: body.image, // Saves the new main image path
        updated_at: new Date(),
      }
    });

    // 4. Handle Gallery Images (Relational table)
    // First, wipe old gallery entries for this specific product
    await prisma.product_images.deleteMany({
      where: { product_id: id }
    });

    // Then, insert the new ones from the array
    if (body.gallery && body.gallery.length > 0) {
      await prisma.product_images.createMany({
        data: body.gallery.map((url: string) => ({
          product_id: id,
          image_url: url
        }))
      });
    }

    return NextResponse.json(updatedProduct);
    
  } catch (error: any) {
    console.error("Update Error:", error);
    return NextResponse.json(
      { error: "Failed to update product", details: error.message }, 
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    // This will delete the product. 
    // NOTE: If you set up "onDelete: Cascade" in Prisma, 
    // it will automatically delete the gallery images too!
    await prisma.products.delete({
      where: { id: id }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Delete Error:", error);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}