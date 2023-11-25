import Navigation from "@/app/components/shared/navigation";

import Product from "./components/product";
import Filter from "./components/filter";
import useSWR from "swr";
import { GetProducts } from "./services/product";

export default function ProductList() {
  const { data, error } = useSWR({ url: "/products/search" }, GetProducts);
  console.log(data);
  return (
    <>
      <Navigation leftSide={false} />
      <div className="px-5">
        <div className="flex items-center my-3 lg:mb-5">
          <div className="flex flex-col">
            <h1>مردانه</h1>
          </div>
        </div>
        <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
          <section className="w-full relative">
            <Filter />
            <div className="grid mb-14 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 ">
              <Product index={1} />
              <Product index={2} />
              <Product index={3} />
              <Product index={4} />
              <Product index={5} />
              <Product index={6} />
              <Product index={7} />
              <Product index={8} />
              <Product index={9} />
              <Product index={10} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
