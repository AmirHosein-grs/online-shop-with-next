import { MdStorefront } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
export default function ProductSection() {
  return (
    <div>
      <div className="px-5">
        <h1 className="my-5 ">شلوار بافت زنانه مدل بگ رنگ سفید</h1>
      </div>
      <hr className="my-2 border-gray-200 mx-5" />
      <div className="px-5 pb-5">
        <div className="mt-3">
          <div className="flex justify-between">
            <div className="py-3">
              <div className="flex items-center text-sm">
                <p>
                  <span className="relative ">اندازه: فری سایز</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex overflow-x-auto overflow-y-hidden no-scrollbar">
            <div className="border border-blue-450 text-xs rounded-3xl ml-2 py-2 px-3 cursor-pointer flex items-center justify-center w-max">
              <span className="w-max">فری سایز</span>
            </div>
            <div className="border text-xs rounded-3xl ml-2 py-2 px-3 cursor-pointer flex items-center justify-center w-max">
              <span className="w-max">فری سایز (38-48) </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t-8">
        <ul className="mx-5  lg:pb-3 pb-1">
          <div className="py-3">
            <div className="flex items-center">
              <p className="text-sm font-medium text-neutral-900">
                <span className="relative">ویژگی‌ها</span>
              </p>
            </div>
          </div>
          <li className="flex items-start mb-2">
            <div className="flex items-center">
              <div className="flex w-3 opacity-50">
                <GoDotFill />
              </div>
              <p className="text-[12px] mr-1">جنس :</p>
            </div>
            <p className="text-[12px] font-bold mr-2 text-neutral-700">
              بافت، کشبافت
            </p>
          </li>
          <li className="flex items-start mb-2">
            <div className="flex items-center">
              <div className="flex w-3 opacity-50">
                <GoDotFill />
              </div>
              <p className="text-[12px] mr-1">طرح :</p>
            </div>
            <p className="text-[12px] font-bold mr-2 text-neutral-700">
              راه‌راه
            </p>
          </li>
          <li className="flex items-start mb-2">
            <div className="flex items-center">
              <div className="flex w-3 opacity-50">
                <GoDotFill />
              </div>
              <p className="text-[12px] mr-1">استایل لباس :</p>
            </div>
            <p className="text-[12px] font-bold mr-2 text-neutral-700">آزاد</p>
          </li>
          <li className="flex items-start mb-2">
            <div className="flex items-center">
              <div className="flex w-3 opacity-50">
                <GoDotFill />
              </div>
              <p className="text-[12px] mr-1">قد لباس :</p>
            </div>
            <p className="text-[12px] font-bold mr-2 text-neutral-700">
              زیر مچ پا
            </p>
          </li>
          <li className="flex items-start mb-2">
            <div className="flex items-center">
              <div className="flex w-3 opacity-50">
                <GoDotFill />
              </div>
              <p className="text-[12px] mr-1">نوع فاق :</p>
            </div>
            <p className="text-[12px] font-bold mr-2 text-neutral-700">بلند</p>
          </li>
        </ul>
      </div>
      <div className=" border-t-8">
        <div className="mx-5  lg:pb-3 pb-1">
          <div className="py-3">
            <div className="flex items-center">
              <p className="text-sm font-medium text-neutral-900">
                <span className="relative">فروشنده</span>
              </p>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col">
              <div className="py-3 flex items-center justify-center border-b-[1px]">
                <div className="ml-4">
                  <MdStorefront className="w-6 h-6 " />
                </div>
                <div className="flex w-full">
                  <div className="flex items-center mt-1 lg:mb-1">
                    <span>
                      <p className="text-xs">شلوارگندم</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-3 flex items-center justify-center ">
                <div className="ml-4">
                  <AiOutlineFileDone className="w-6 h-6 " />
                </div>
                <div className="flex w-full">
                  <div className="flex items-center mt-1 lg:mb-1">
                    <span>
                      <p className="text-xs">
                        گارانتی اصالت و سلامت فیزیکی کالا
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t-8">
        <div className="flex flex-col items-center">
          <div className="my-5 w-full flex items-center justify-between text-[8px] overflow-x-auto overflow-y-hidden no-scrollbar">
            <Link href={"/"}>
              <div className=" flex flex-col items-center w-max px-3">
                <div className="items-center">
                  <Image
                    src="/Footer/express-delivery.svg"
                    alt="express-delivery"
                    width={45}
                    height={45}
                    priority
                  />
                </div>
                <p>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="flex flex-col items-center w-max px-3">
                <div>
                  <Image
                    src="/Footer/support.svg"
                    alt="express-delivery"
                    width={45}
                    height={45}
                    priority
                  />
                </div>
                <p>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="flex flex-col items-center w-max px-3">
                <div>
                  <Image
                    src="/Footer/cash-on-delivery.svg"
                    alt="express-delivery"
                    width={45}
                    height={45}
                    priority
                  />
                </div>
                <p>امکان پرداخت در محل</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className=" flex flex-col items-center w-max px-3">
                <div>
                  <Image
                    src="/Footer/days-return.svg"
                    alt="express-delivery"
                    width={45}
                    height={45}
                    priority
                  />
                </div>
                <p>هفت روز ضمانت بازگشت کالا</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className=" flex flex-col items-center w-max px-3">
                <div>
                  <Image
                    src="/Footer/original-products.svg"
                    alt="express-delivery"
                    width={45}
                    height={45}
                    priority
                  />
                </div>
                <p>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
