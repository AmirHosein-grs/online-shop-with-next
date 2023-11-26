export const postData = async () => {
  try {
    const apiUrl = "https://imis.silverage.co/api/shop/products/search";

    const requestBody = {
      search_key: "",
      group_depth: 2,
      load_products: 2,
      load_group: 2,
      per_page: 50,
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      return data.results.products;
    } else {
      console.error("Error", response.statusText);
    }
  } catch (error) {
    console.error("Unexpected error", error);
  }
};
export const singleProduct = async (productId: number) => {
  try {
    const apiUrl = "https://imis.silverage.co/api/shop/products/details";

    const requestBody = {
      id: productId,
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      return data.results.product;
    } else {
      console.error("Error", response.statusText);
    }
  } catch (error) {
    console.error("Unexpected error", error);
  }
};
