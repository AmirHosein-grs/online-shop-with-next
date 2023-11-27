import {
  BanknotesIcon,
  Bars3Icon,
  FireIcon,
  GiftTopIcon,
  MapPinIcon,
  ReceiptPercentIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import StickyHeader from "./components/stickyHeader";

export default function DesktopHeader() {
  return (
    <div className="hidden lg:flex lg:flex-col sticky top-0 left-0 z-50 bg-white">
      <StickyHeader />
      <nav>
        <div className="flex py-4 px-5 border-b-2 justify-between text-xs">
          <div className="flex">
            <Link href={"/main/productList"}>
              <div className="flex items-center   ">
                <div>
                  <Bars3Icon className="w-5 h-5 ml-1 " />
                </div>
                <div className="text-sm">لیست محصولات</div>
              </div>
            </Link>
            <span className="bg-neutral-200 mx-3 block w-[1px] h-6 "></span>
            <div className="flex ">
              <div className="flex items-center ml-6">
                <div>
                  <ReceiptPercentIcon className="w-5 h-5 ml-1 opacity-60 " />
                </div>
                <div className="">شگفت‌انگیزها</div>
              </div>
              <div className="flex items-center ml-6">
                <div>
                  <TruckIcon className="w-5 h-5 ml-1 opacity-60 " />
                </div>
                <div className="">سوپرمارکت</div>
              </div>
              <div className="flex items-center ml-6">
                <div>
                  <BanknotesIcon className="w-5 h-5 ml-1 opacity-60 " />
                </div>
                <div className="">کارت هدیه</div>
              </div>
              <div className="flex items-center ml-6">
                <div>
                  <FireIcon className="w-5 h-5 ml-1 opacity-60 " />
                </div>
                <div className="">پرفروش‌ترین‌ها</div>
              </div>
              <div className=" items-center hidden xl:flex">
                <div>
                  <GiftTopIcon className="w-5 h-5 ml-1 opacity-60 " />
                </div>
                <div className="">تخفیف‌ها و پیشنهادها</div>
              </div>
            </div>
            <span className="bg-neutral-200 mx-3 block w-[1px] h-6 "></span>
            <div className="flex items-center  ">
              <div className="pl-8">
                <Link href={"/"}>سوالی دارید؟</Link>
              </div>
              <div>
                <Link href={"/"}>در دیجی‌کالا بفروشید!</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div>
              <MapPinIcon className=" w-5 h-5 ml-3 -scale-x-100" />
            </div>
            <div>لطفا شهر خود را انتخاب کنید</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
