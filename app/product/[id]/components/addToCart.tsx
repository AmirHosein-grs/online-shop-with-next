"use client";

import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";

import type { RootState } from "@/app/store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  addCount,
  reduceProductCount,
  setCarts,
} from "@/app/store/features/cartSlice";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

interface AddToCartProps {
  product: any;
  productId: number;
}

export default function AddToCart({ product, productId }: AddToCartProps) {
  const cart: any = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const desiredObject = cart.cart.find((obj: any) => obj.id === productId);
  const [cartButton, setCartButton] = useState(desiredObject !== undefined);
  const setCartsHandler = () => {
    dispatch(setCarts([{ id: product.id, count: 1 }]));
    setCartButton(true);
  };
  const addHandler = () => {
    dispatch(addCount({ id: product.id, count: 1 }));
  };
  const reduceHandler = () => {
    dispatch(reduceProductCount(product.id));
  };
  const deleteHandler = () => {
    dispatch(reduceProductCount(product.id));
    setCartButton(false);
  };

  return (
    <div className=" fixed select-none right-0 bottom-0 w-full z-30 bg-white lg:bg-inherit lg:relative  lg:mb-0 pb-5 lg:px-0 px-5 pt-5 lg:border-0 border-t-4">
      <div className="flex lg:flex-col-reverse flex-row justify-between items-center lg:justify-start lg:items-start">
        {cartButton ? (
          <div className=" w-6/12 lg:w-9/12 flex justify-center bg-White lg:mt-3 ">
            <div className="w-full flex flex-row">
              <div className="flex items-center rounded-lg w-full shadow-lg border-2 p-2 border-neutral-100">
                <div className="flex w-full items-center justify-between user-select-none px-2 rounded-medium grow">
                  <div className="flex cursor-pointer" onClick={addHandler}>
                    <HiOutlinePlus className="w-4 h-4 text-rose-500 " />
                  </div>
                  <span className="flex flex-col select-none items-center justify-between text-rose-500">
                    {desiredObject?.count}
                  </span>
                  {desiredObject?.count === 1 ? (
                    <div
                      className="flex cursor-pointer"
                      onClick={deleteHandler}
                    >
                      <FaRegTrashCan className="w-4 h-4 text-rose-500" />
                    </div>
                  ) : (
                    <div
                      className="flex cursor-pointer"
                      onClick={reduceHandler}
                    >
                      <HiOutlineMinus className="w-4 h-4 text-rose-500" />
                    </div>
                  )}
                </div>
              </div>
              <div className=" mr-4 hidden lg:flex flex-col justify-between ">
                <p className="text-sm w-max">در سبد شما</p>
                <div className="flex flex-row text-xs w-max">
                  <span>مشاهده</span>
                  <Link href={"/cart"} className=" text-blue-500 text-xs mr-1">
                    سبد خرید
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-6/12 lg:w-full flex justify-center bg-red-500 rounded-lg lg:mt-3">
            <button
              onClick={setCartsHandler}
              className="w-full flex justify-center"
            >
              <div className=" text-white text-center p-3 text-xs w-max ">
                افزودن به سبد
              </div>
            </button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row-reverse justify-between  lg:mt-5 lg:w-full lg:px-2">
          <div className="flex justify-start lg:justify-end items-center">
            <div className="ml-1 lg:text-lg text:xs font-bold">
              {product?.full_price?.sale_price}
            </div>
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
          <CiCircleInfo className="w-5 h-5 hidden lg:flex" />
        </div>
      </div>
    </div>
  );
}
