"use client";
import Image from "next/image";
import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

export default function StickyHeader() {
  const count: any = useSelector((state: RootState) => state.cart.count);
  return (
    <div className="flex w-full justify-between items-center p-3 ">
      <div className="flex items-center">
        <div className="ml-6">
          <Link href={"/"}>
            <Image
              className=""
              src="/Logo.svg"
              alt="Shop Logo"
              width={115}
              height={30}
              priority
            />
          </Link>
        </div>
        <div className="flex items-center w-[600px] h-11 bg-neutral-200 opacity-80 rounded-lg ">
          <div className="ml-5">
            <MagnifyingGlassIcon className="w-6 h-6 opacity-40 mr-5 " />
          </div>
          <span className="">
            <div className="text-neutral-500 text-sm  ">جستجو</div>
          </span>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="flex px-3 py-1.5 border-2 rounded-lg">
          <ArrowRightOnRectangleIcon className=" w-6 h-6 -scale-x-100 ml-2" />
          <span className="flex items-center">
            <div className="text-black text-sm  ">ورود | ثبت‌نام</div>
          </span>
        </div>
        <span className="bg-neutral-200 mx-3 block w-[1px] h-6 "></span>
        <div>
          <Link href={"/cart"}>
            <FiShoppingCart className=" w-5 h-5 -scale-x-100" />
            {count === 0 ? (
              ""
            ) : (
              <div className=" relative">
                <span className="rounded-md text-white text-center absolute top-[-8px] left-[8px] flex items-center border-[1px] border-neutral-500 justify-center text-sm bg-red-600 w-4 h-4">
                  <span className="mt-1">{count}</span>
                </span>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
