import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'; // Ensure this matches your batch route!

// TOGGLE A FAVOURITE (Add or Remove)
export async function POST(request: Request) {
  try {
    const { customer_id, product_id } = await request.json();

    if (!customer_id || !product_id) {
      console.error("❌ Favourites API: Missing customer_id or product_id");
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    console.log(`⏳ Attempting to save Favourite -> User: ${customer_id} | Product: ${product_id}`);

    // Check if it is already favorited
    const existingFav = await prisma.customer_favourites.findUnique({
      where: {
        customer_id_product_id: {
          customer_id,
          product_id
        }
      }
    });

    if (existingFav) {
      await prisma.customer_favourites.delete({
        where: { id: existingFav.id }
      });
      console.log("✅ Successfully removed favourite!");
      return NextResponse.json({ status: "removed" });
    } else {
      await prisma.customer_favourites.create({
        data: { customer_id, product_id }
      });
      console.log("✅ Successfully added favourite!");
      return NextResponse.json({ status: "added" });
    }
  } catch (error: any) {
    // THIS WILL TELL US EXACTLY WHY IT'S FAILING
    console.error("🚨 FAVOURITES API CRASHED:", error.message || error);
    return NextResponse.json({ error: "System error" }, { status: 500 });
  }
}

// GET ALL FAVOURITES FOR A USER
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const customer_id = searchParams.get('customer_id');

    if (!customer_id) return NextResponse.json([]);

    const favs = await prisma.customer_favourites.findMany({
      where: { customer_id },
      select: { product_id: true }
    });

    return NextResponse.json(favs.map(f => f.product_id));
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}