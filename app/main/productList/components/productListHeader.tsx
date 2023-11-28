"use client";
import DesktopHeader from "@/app/components/header/desktopHeader";
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { IoMdShare } from "react-icons/io";

export default function ProductListHeader() {
  const router = useRouter();
  return (
    <>
      <DesktopHeader />
      <div className="sticky top-0 left-0 w-full z-10 bg-white lg:hidden">
        <div className="p-2 relative flex items-center z-5 bg-white shadow-1-bottom">
          <div className="relative  ml-0 w-full">
            <div className="flex items-center grow px-2 lg:px-4 text-body-2">
              <div className="flex items-center p-2 w-full justify-between">
                <div className="flex">
                  <div className="flex cursor-pointer ml-5">
                    <ArrowRightIcon
                      className="w-5 h-5 "
                      onClick={() => {
                        router.back();
                      }}
                    />
                  </div>
                  <div>
                    <span>لیست محصولات</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="ml-5">
                    <MagnifyingGlassIcon className="w-6 h-6 " />
                  </div>
                  <div>
                    <IoMdShare className="w-6 h-6 -scale-x-100" />
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
