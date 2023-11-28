import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const req = await request.json();
  const res = await fetch("https://imis.silverage.co/api/shop/cart/details", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  const results = await res.json();

  return NextResponse.json(results, {
    status: 200,
  });
}
