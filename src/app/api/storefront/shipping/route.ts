import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { destinationPostalCode, totalWeightInGrams } = body;

    if (!destinationPostalCode) {
      return NextResponse.json({ error: 'Missing destination postal code' }, { status: 400 });
    }

    console.log("🕵️ CHECKING KEY STRING:", `'${process.env.BITESHIP_API_KEY}'`);
    
    // Biteship Rates API Endpoint
    const BITESHIP_URL = 'https://api.biteship.com/v1/rates/couriers';

    const payload = {
      origin_postal_code: "61253", // Sidoarjo
      destination_postal_code: destinationPostalCode,
      couriers: "jne,sicepat,jnt", 
      items: [
        {
          name: "Wanst Coffee Beans",
          description: "Freshly roasted coffee",
          value: 100000,
          quantity: 1,
          weight: totalWeightInGrams || 1000, 
          // 👇 NEW: Added standard box dimensions! Biteship gets mad if these are missing.
          length: 20, 
          width: 15,
          height: 10 
        }
      ]
    };

    const response = await fetch(BITESHIP_URL, {
      method: 'POST',
      headers: {
        // 1. Hardcode the exact string. No "Bearer ", just the prefixed key.
        'Authorization': 'biteship_test.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV2Fuc3QgQ29mZmVlIiwidXNlcklkIjoiNmExY2NkMDM1Y2E4YTZiM2MyZmQzMGQzIiwiaWF0IjoxNzgwMjc2OTgwfQ.KPFJ7ZVX7lNJQ5wbsmUK6SawmG1XC7pZKgAlLUpXOew', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      // Print the exact reason to your VS Code terminal
      console.error("🚨 Biteship API Error:", JSON.stringify(data, null, 2));
      
      // Send the real error back to the frontend
      return NextResponse.json({ 
        error: data.error || data.message || 'Failed to fetch rates from Biteship' 
      }, { status: response.status });
    }

    return NextResponse.json(data.pricing);

  } catch (error: any) {
    console.error("Shipping Calculator Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}