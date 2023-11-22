import Image from "next/image";
import MobileHeader from "./mobileHeader";
import {
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
  Bars3Icon,
  FireIcon,
  GiftTopIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ReceiptPercentIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <>
      <header>
        <MobileHeader />
        <div className="hidden lg:flex lg:flex-col">
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
                <ShoppingCartIcon className=" w-6 h-6 -scale-x-100" />
              </div>
            </div>
          </div>
          <nav>
            <div className="flex py-8 px-5 border-b-2 justify-between text-xs">
              <div className="flex">
                <div className="flex items-center   ">
                  <div>
                    <Bars3Icon className="w-5 h-5 ml-1 " />
                  </div>
                  <div className="text-sm">دسته‌بندی کالاها</div>
                </div>
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
      </header>
    </>
  );
}
