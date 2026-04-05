import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { orders_status } from '@prisma/client';

export async function GET() {
  try {
    // 1. Count Total Products
    const totalProducts = await prisma.products.count();

    // 2. Count Pending Orders
    const pendingOrders = await prisma.orders.count({
      where: { status: orders_status.PENDING_PROCESSING } 
    });

    // 3. Count Active Discounts (THE FIX)
    // Get today's date in 'YYYY-MM-DD' format to match your database
    const today = new Date().toISOString().split('T')[0];

    const activeDiscounts = await prisma.products.count({
      where: { 
        is_on_sale: true,
        discount_start: { lte: today }, // Start date is less than or equal to today
        discount_end: { gte: today }    // End date is greater than or equal to today
      }
    });

    return NextResponse.json({
      products: totalProducts,
      discounts: activeDiscounts,
      orders: pendingOrders
    });

  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    return NextResponse.json(
      { products: 0, discounts: 0, orders: 0 }, 
      { status: 500 }
    );
  }
}