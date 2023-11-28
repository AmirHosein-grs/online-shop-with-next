"use client";

import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";
import type { RootState } from "@/app/store/store";
import { useSelector, useDispatch } from "react-redux";
import { setCarts } from "@/app/store/features/cartSlice";
import { useState } from "react";
import ProductCounter from "@/app/components/shared/productCounter";

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
  return (
    <div className=" fixed select-none right-0 bottom-0 w-full z-30 bg-white lg:bg-inherit lg:relative  lg:mb-0 pb-5 lg:px-0 px-5 pt-5 lg:border-0 border-t-4">
      <div className="flex lg:flex-col-reverse flex-row justify-between items-center lg:justify-start lg:items-start">
        {cartButton ? (
          <div className="w-7/12 lg:w-9/12">
            <ProductCounter
              product={product}
              setCartButton={setCartButton}
              cart={cart}
              productId={productId}
              goToCart={true}
            />
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
