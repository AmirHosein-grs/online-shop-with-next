import { product } from "@/app/models/product";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: product;
}

export default function Product({ product }: ProductProps) {
  return (
    <>
      <div className="border-b-[1px] sm:border hover:shadow-xl ">
        <Link
          href={`/product/${product.id}`}
          className="py-2 bg-white overflow-hidden justify-start items-stretch cursor-pointer relative"
        >
          <div>
            <article className="flex flex-col overflow-hidden justify-start items-stretch">
              <div className="flex grow relative flex-row sm:flex-col my-4">
                <div className="flex items-stretch flex-col relative ml-3">
                  <div className="flex items-start mx-auto">
                    <div>
                      <div className=" w-32 h-32 flex items-center relative justify-center sm:w-60 sm:h-60 ">
                        <picture>
                          <Image
                            src={product?.cover}
                            alt="Shop Logo"
                            fill={true}
                            priority
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow flex flex-col items-stretch justify-start text-[9px] sm:p-3 sm:text-[12px] ">
                  <div className="flex items-center justify-start gap-1 flex-wrap mb-1">
                    <div className="flex items-center px-2 bg-orange-200 text-orange-600 rounded-2xl">
                      <span>غیراصل</span>
                    </div>
                  </div>
                  <div className="py-2">
                    <h3 className="text-neutral-700 font-bold ">
                      {product?.name}
                    </h3>
                  </div>
                  {product.existing_number === 1 && (
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center">
                        <p className=" text-red-500">
                          تنها ۱ عدد در انبار باقی مانده
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="pt-1 flex flex-col justify-between">
                    {product?.full_price?.box_price === 0 ? (
                      ""
                    ) : (
                      <div className="   text-white flex items-center justify-start ">
                        <span className="bg-rose-700 px-1 rounded-3xl font-semibold ">
                          ۳۰%
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-end gap-1 text-neutral-700 grow">
                        {product?.full_price?.sale_price === 0 ? (
                          ""
                        ) : (
                          <span className="text-sm font-bold">
                            {product?.full_price?.sale_price.toLocaleString()}
                          </span>
                        )}
                        <div className="flex ">
                          <Image
                            src="/Toman/Toman.svg"
                            alt="Shop Logo"
                            width={14}
                            height={14}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pl-5">
                      {product?.full_price?.box_price === 0 ? (
                        ""
                      ) : (
                        <div className="text-neutral-300 line-through self-end mr-auto text-[10px]">
                          {product?.full_price?.box_price.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Link>
      </div>
    </>
  );
}
