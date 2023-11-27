export async function POST(request: Request) {
  const data = await request.json();
  const res = await fetch("https://imis.silverage.co/api/shop/cart/details", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products: data,
    }),
  });

  return Response.json(res);
}
