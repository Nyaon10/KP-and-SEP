import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma'; 

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Product ID is missing" }, { status: 400 });
    }

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
        main_image: body.image, 
        gallery: body.gallery || [], // Updates JSON array directly
        updated_at: new Date(),
      }
    });

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

    await prisma.products.delete({
      where: { id: id }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Delete Error:", error);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}