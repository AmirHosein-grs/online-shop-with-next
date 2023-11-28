"use client";

import Image from "next/image";
import MobileCart from "./components/mobileCart";
import Product from "./components/product";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import EmptyList from "./components/emptyList";
import { clearCart, setCount } from "../store/features/cartSlice";
import { cartProducts } from "../helpers/cart";
import { useEffect, useState } from "react";

interface CostState {
  total_count: number;
  payable: number;
  total_tax: number;
  total_price: number;
}

export default function Cart() {
  const [productList, setproductList] = useState([]);
  const [cost, setCost] = useState<CostState>();
  const cart: any = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    cartProducts(cart?.cart)
      .then((results) => {
        setproductList(results?.results?.cart?.items);
        setCost(results?.results?.cart);
        dispatch(setCount(results?.results?.cart.total_count));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cart?.cart, dispatch]);
  const count: any = useSelector((state: RootState) => state.cart.count);

  return (
    <div>
      <MobileCart productList={productList} />
      <>
        <div className="hidden lg:flex flex-col justify-center items-center ">
          <div className="p-5 relative max-w-[1280px] w-full">
            <ul className="flex relative border-gray-300 border-b-[1px] ">
              <li className="relative px-4 py-2 flex flex-row items-center grow justify-center lg:grow-0 text-gray-500 cursor-pointer">
                <div className="flex">
                  <span className="font-bold text-red-600">سبد خرید</span>
                  {cart.cart.length === 0 ? (
                    ""
                  ) : (
                    <span className="rounded-md text-white text-center mr-1 flex items-center justify-center text-body2-strong bg-red-600 w-5 h-5">
                      <span className="mt-1">{count}</span>
                    </span>
                  )}
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
            {cart?.cart?.length === 0 ? (
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
                          {count && (
                            <div className="text-sm opacity-50 p-1">
                              {count}
                              <span className="mr-1">کالا</span>
                            </div>
                          )}
                        </div>
                        <div className="lg:flex ld:flex-col select-none">
                          <section className="w-full">
                            {productList?.map((product: any, index: any) => (
                              <Product
                                key={`key${index + 1}`}
                                product={product}
                                cart={cart}
                              />
                            ))}
                          </section>
                        </div>
                      </div>
                    </div>
                    <aside className="w-3/12 select-none">
                      <div className="mt-4 mx-0 p-5 border rounded-lg">
                        <div>
                          <div className="flex items-center justify-between pt-3 relative">
                            <div className="flex items-center">
                              <div className="mr-1 -strong flex items-center text-neutral-600 text-sm">
                                <span>قیمت کالاها ({count})</span>
                              </div>
                            </div>
                            <div className="flex items-center select-none">
                              <div className="flex p-1 select-none">
                                {cost?.payable && (
                                  <>
                                    <span className="text-sm font-bold select-none">
                                      {cost?.payable.toLocaleString()}
                                    </span>

                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                        <div className="flex mr-1">
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
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-3 relative text-rose-500">
                            <div className="flex items-center">
                              <div className="mr-1 -strong flex items-center text-neutral-600 text-sm">
                                <span className="text-rose-500">مالیات</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {cost?.payable && (
                                <div className="flex p-1">
                                  <span className="text-sm font-bold">
                                    {cost?.total_tax.toLocaleString()}
                                  </span>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="flex mr-1">
                                        <Image
                                          src="/Toman/Toman.png"
                                          alt="Shop Logo"
                                          width={14}
                                          height={14}
                                          priority
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-3 relative">
                            <div className="flex items-center">
                              <div className="mr-1 -strong flex items-center text-neutral-600 text-sm">
                                <span>جمع سبد خرید</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {cost?.payable && (
                                <div className="flex p-1">
                                  <span className="text-sm font-bold">
                                    {cost?.total_price.toLocaleString()}
                                  </span>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="flex mr-1">
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
                                </div>
                              )}
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
