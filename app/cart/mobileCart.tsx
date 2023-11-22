import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Product from "./product";
import Link from "next/link";
export default function MobileCart() {
  return (
    <>
      <div className="flex lg:hidden w-full justify-between items-center  border-b-2 shadow-md text-sm">
        <div className="w-1/2 relative cursor-pointer">
          <div className="flex items-center justify-center">
            <span className="my-3 text-red-600">سبد خرید</span>
            <div className=" absolute bottom-0 bg-red-600 h-1 w-11/12 rounded-t-lg"></div>
          </div>
        </div>
        <div className="w-1/2 relative cursor-pointer">
          <div className="flex items-center justify-center">
            <span className="my-3">خرید بعدی</span>
            {/* <div className=" absolute bottom-0 bg-red-600 h-1 w-11/12 rounded-t-lg"></div> */}
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div>
          <div className="pt-8 px-6">
            <div className="flex justify-between ">
              <span className="text-sm">سبد خرید شما</span>
              <div>
                <EllipsisVerticalIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="text-xs opacity-50 p-1">۱ کالا</div>
          </div>
          <div className="lg:flex ld:flex-col">
            <section>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </section>
            <aside className="relative pb-40">
              <div className="sticky top-44">
                <div className="px-5">
                  <div className="flex items-center justify-between pt-3 relative">
                    <div className="flex items-center">
                      <div className="mr-1 -strong flex items-center text-neutral-600 text-xs">
                        <span>قیمت کالاها (۱)</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex p-1">
                        <span className="text-xs font-bold">535,000</span>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex mr-1">
                              <Image
                                src="/Toman/Toman.svg"
                                alt="Shop Logo"
                                width={17}
                                height={17}
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 relative">
                    <div className="flex items-center">
                      <div className="mr-1 -strong flex items-center text-neutral-600 text-xs">
                        <span>جمع سبد خرید</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex p-1">
                        <span className="text-xs font-bold">535,000</span>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex mr-1">
                              <Image
                                src="/Toman/Toman.svg"
                                alt="Shop Logo"
                                width={17}
                                height={17}
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="fixed bottom-[61px] w-full bg-white ">
          <hr className="my-2 border-gray-300" />
          <div className="px-4 py-3 bg-neutral-000 w-full">
            <div className="flex flex-row justify-between items-start">
              <div className="w-full">
                <div className="flex flex-row justify-between items-center">
                  <div className="w-6/12 bg-red-500 rounded-lg ">
                    <Link href={"/"}>
                      <div className=" text-white text-center p-3 text-sm">
                        ثبت سفارش
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between items-end mr-4 ">
                    <p className="text-[8px] opacity-60">جمع سبد خرید</p>
                    <div className="flex justify-start items-center">
                      <div className="ml-1 text-xs font-bold">535,000</div>
                      <div>
                        <Image
                          src="/Toman/Toman.svg"
                          alt="Shop Logo"
                          width={12}
                          height={12}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
