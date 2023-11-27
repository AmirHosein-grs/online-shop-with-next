"use client";

import Image from "next/image";
import MobileCart from "./components/mobileCart";
import Product from "./components/product";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import EmptyList from "./components/emptyList";
import { clearCart } from "../store/features/cartSlice";
import { CartType } from "../models/product";
import { cartProducts } from "../helpers/cart";

export default function Cart() {
  const cart: any = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const test = cartProducts(cart.cart);
  console.log(test);
  return (
    <div>
      <MobileCart />
      <>
        <div className="hidden lg:flex flex-col justify-center items-center ">
          <div className="p-5 relative max-w-[1280px] w-full">
            <ul className="flex relative border-gray-300 border-b-[1px] ">
              <li className="relative px-4 py-2 flex flex-row items-center grow justify-center lg:grow-0 text-gray-500 cursor-pointer">
                <div className="flex">
                  <span className="font-bold text-red-600">سبد خرید</span>
                  <span className="rounded-md text-white text-center mr-1 flex items-center justify-center text-body2-strong bg-red-600 w-5 h-5">
                    <span className="mt-1">1</span>
                  </span>
                </div>
                <div className=" absolute bottom-0 bg-red-600 h-1 w-11/12 rounded-t-lg"></div>
              </li>

              <li className="relative px-4 py-2 flex flex-row items-center grow justify-center lg:grow-0 text-gray-500 cursor-pointer">
                <div className="flex">
                  <span className="font-bold">خرید بعدی</span>
                  {/* <span className="rounded-md text-white text-center mr-1 flex items-center justify-center text-body2-strong bg-red-600 w-5 h-5">
                  <span className="mt-1">1</span>
                </span> */}
                </div>
                {/* <div className=" absolute bottom-0 bg-red-600 h-1 w-11/12 rounded-t-lg"></div> */}
              </li>
            </ul>
            {cart.cart.length === 0 ? (
              <div className="hidden lg:block">
                <EmptyList />
              </div>
            ) : (
              <ul>
                <li>
                  <div className="flex">
                    <div className="w-9/12">
                      <div className="mt-4 ml-3  border rounded-lg">
                        <div className="p-5">
                          <div className="flex justify-between ">
                            <span className="text-md">سبد خرید شما</span>
                            <div>
                              <EllipsisVerticalIcon
                                onClick={() => {
                                  dispatch(clearCart());
                                }}
                                className="w-8 h-8"
                              />
                            </div>
                          </div>
                          <div className="text-sm opacity-50 p-1">۱ کالا</div>
                        </div>
                        <div className="lg:flex ld:flex-col">
                          <section className="w-full">
                            {cart.cart.map((product: CartType) => (
                              <Product key={product.id} product={product} />
                            ))}
                          </section>
                        </div>
                      </div>
                    </div>
                    <aside className="w-3/12">
                      <div className="mt-4 mx-0 p-5 border rounded-lg">
                        <div>
                          <div className="flex items-center justify-between pt-3 relative">
                            <div className="flex items-center">
                              <div className="mr-1 -strong flex items-center text-neutral-600 text-sm">
                                <span>قیمت کالاها (۱)</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="flex p-1">
                                <span className="text-sm font-bold">
                                  535,000
                                </span>
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
                              <div className="mr-1 -strong flex items-center text-neutral-600 text-sm">
                                <span>جمع سبد خرید</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="flex p-1">
                                <span className="text-sm font-bold">
                                  535,000
                                </span>
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
                        <div className="w-full bg-red-500 rounded-lg mt-5 ">
                          <Link href={"/"}>
                            <div className=" text-white text-center p-3 text-sm">
                              ثبت سفارش
                            </div>
                          </Link>
                        </div>
                      </div>
                    </aside>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </>
    </div>
  );
}
