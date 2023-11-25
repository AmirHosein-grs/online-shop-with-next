import callApi from "../helpers/callApi";

export async function GetProducts() {
  let res = await callApi().post(`/products/search`);
  console.log(res);
  return { products: res?.data?.data, total_page: res?.data?.total_page };
}
