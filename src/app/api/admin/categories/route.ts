import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

// CREATE a new category
export async function POST(request: Request) {
  try {
    const { name, slug } = await request.json();

    const newCategory = await prisma.categories.create({
      data: { name, slug }
    });

    return NextResponse.json(newCategory);
  } catch (error: any) {
    console.error("Create Category Error:", error);
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}

// DELETE a category
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) return NextResponse.json({ error: "Slug is required" }, { status: 400 });

    // Check if products are still using this category
    const productCount = await prisma.products.count({
      where: { category_slug: slug }
    });

    if (productCount > 0) {
      return NextResponse.json(
        { error: `Cannot delete. ${productCount} products are still using this category.` }, 
        { status: 400 }
      );
    }

    await prisma.categories.delete({
      where: { slug: slug }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Delete Category Error:", error);
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}