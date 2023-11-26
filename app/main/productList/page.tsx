import Navigation from "@/app/components/shared/navigation";
import Product from "./components/product";
import Filter from "./components/filter";
import { postData } from "@/app/services/products";
import product from "@/app/models/product";

export default async function ProductList() {
  const products = await postData();
  return (
    <>
      <Navigation leftSide={false} />
      <div className="px-5">
        <div className="flex items-center my-3 lg:mb-5">
          <div className="flex flex-col">
            <h1>لیست محصولات</h1>
          </div>
        </div>
        <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
          <section className="w-full relative">
            <Filter />
            <div className="grid mb-14 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 ">
              {products.map((product: product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
