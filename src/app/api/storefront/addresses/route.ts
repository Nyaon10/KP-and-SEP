import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'; // Adjust dots if needed

// GET: Fetch all addresses for a user
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const customer_id = searchParams.get('customer_id');

  if (!customer_id) return NextResponse.json({ error: "Missing customer ID" }, { status: 400 });

  try {
    const addresses = await prisma.customer_addresses.findMany({
      where: { customer_id },
      orderBy: { is_default: 'desc' } // Default address shows up first!
    });
    return NextResponse.json(addresses);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch addresses" }, { status: 500 });
  }
}

// POST: Create a new address
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // If this is the first address, force it to be default. Otherwise, check if user requested it.
    if (data.is_default) {
      // Remove default status from all other addresses for this user
      await prisma.customer_addresses.updateMany({
        where: { customer_id: data.customer_id },
        data: { is_default: false }
      });
    }

    const newAddress = await prisma.customer_addresses.create({
      data: {
        customer_id: data.customer_id,
        label: data.label,
        full_name: data.fullName,
        phone: data.phone,
        street: data.street,
        city: data.city,
        postal_code: data.postalCode,
        is_default: data.is_default
      }
    });

    return NextResponse.json(newAddress);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create address" }, { status: 500 });
  }
}

// PUT: Update an existing address or set as default
export async function PUT(request: Request) {
  try {
    const data = await request.json();

    if (data.is_default) {
      await prisma.customer_addresses.updateMany({
        where: { customer_id: data.customer_id },
        data: { is_default: false }
      });
    }

    const updatedAddress = await prisma.customer_addresses.update({
      where: { id: data.id },
      data: {
        label: data.label,
        full_name: data.fullName,
        phone: data.phone,
        street: data.street,
        city: data.city,
        postal_code: data.postalCode,
        is_default: data.is_default
      }
    });

    return NextResponse.json(updatedAddress);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update address" }, { status: 500 });
  }
}

// DELETE: Remove an address
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) return NextResponse.json({ error: "Missing address ID" }, { status: 400 });

  try {
    await prisma.customer_addresses.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete address" }, { status: 500 });
  }
}