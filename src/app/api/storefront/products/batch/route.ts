import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma'; // 5 sets of dots!

export async function POST(request: Request) {
  try {
    // 1. Let's see EXACTLY what the frontend is sending
    const body = await request.json();
    console.log("📦 Batch API received:", body); 

    const { ids } = body;

    // 2. Safely handle empty arrays
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      console.log("⚠️ Batch API: No IDs provided, returning empty array.");
      return NextResponse.json([]);
    }

    // 3. Fetch the products
    const products = await prisma.products.findMany({
      where: {
        id: {
          in: ids
        }
      }
    });

    console.log(`✅ Batch API found ${products.length} products!`);
    return NextResponse.json(products);
    
  } catch (error: any) {
    console.error("🚨 Batch API Error:", error.message || error);
    return NextResponse.json({ error: 'System error' }, { status: 500 });
  }
}