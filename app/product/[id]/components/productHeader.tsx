"use client";
import {
  ArrowRightIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductHeader() {
  const router = useRouter();
  return (
    <div className="sticky top-0 left-0 w-full z-10 bg-white lg:hidden">
      <div className="p-2 relative flex items-center z-5 bg-white shadow-1-bottom">
        <div className="relative  ml-0 w-full">
          <div className="flex items-center grow px-2 lg:px-4 text-body-2">
            <div className="flex items-center p-2 w-full justify-between">
              <div className="flex">
                <div className="flex cursor-pointer ml-2">
                  <ArrowRightIcon
                    className="w-5 h-5 "
                    onClick={() => router.back()}
                  />
                </div>
                <div>
                  <Image
                    src="/digi.svg"
                    alt="Shop Logo"
                    width={70}
                    height={20}
                    priority
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex cursor-pointer ml-5">
                  <ShoppingCartIcon
                    className="w-6 h-6 -scale-x-100"
                    onClick={() => router.push("/cart")}
                  />
                </div>
                <div className="ml-5">
                  <HeartIcon className="w-6 h-6 " />
                </div>
                <div>
                  <EllipsisVerticalIcon className="w-6 h-6 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
