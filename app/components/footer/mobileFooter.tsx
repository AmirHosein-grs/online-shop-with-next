import {
  HomeIcon,
  RectangleGroupIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function MobileFooter() {
  return (
    <div className="w-full bg-neutral-000 z-3 fixed right-0 bottom-0 shadow-1-top bg-neutral-100 border-t-2 shadow-xl lg:hidden">
      <div>
        <div className="flex p-2 justify-between w-full  ">
          <Link
            href={"/"}
            className="flex-col w-1/4 items-center justify-center m-auto"
          >
            <HomeIcon className=" w-7 h-7 opacity-40 m-auto" />
            <p className=" text-neutral-500 text-[10px] text-center ">خانه</p>
          </Link>
          <Link
            href={"/"}
            className="flex-col w-1/4 items-center justify-center m-auto"
          >
            <RectangleGroupIcon className=" w-7 h-7 opacity-40 m-auto" />
            <p className=" text-neutral-500 text-[10px] text-center">
              دسته‌بندی
            </p>
          </Link>{" "}
          <Link
            href={"/cart"}
            className="flex-col w-1/4 items-center justify-center m-auto"
          >
            <ShoppingCartIcon className=" w-7 h-7 opacity-40 m-auto -scale-x-100" />
            <p className=" text-neutral-500 text-[10px] text-center">
              سبد خرید
            </p>
          </Link>{" "}
          <Link
            href={"/"}
            className="flex-col w-1/4 items-center justify-center m-auto"
          >
            <UserIcon className=" w-7 h-7 opacity-40 m-auto" />
            <p className=" text-neutral-500 text-[10px] text-center">
              دیجی‌کالای من
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
