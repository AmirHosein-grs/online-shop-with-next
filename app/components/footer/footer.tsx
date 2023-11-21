import Image from "next/image";
import MobileFooter from "./mobileFooter";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <MobileFooter />
        <div className="flex w-full justify-between items-center p-3 pt-8 mt-12 border-t-2 invisible lg:visible">
          <div className="flex w-full justify-between">
            <div className="">
              <Image
                src="/digi.svg"
                alt="Shop Logo"
                width={115}
                height={30}
                priority
              />
            </div>
            <div>
              <button className="flex items-center justify-center cursor-pointer px-3 rounded ">
                <div className="flex opacity-70 border-2 rounded-lg p-3 ">
                  <span className="ml-2 text-xs ">بازگشت به بالا</span>
                  <div>
                    <ChevronUpIcon className="h-4 w-4" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex text-sm opacity-60 items-center">
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <div>
            <span className="bg-neutral-500 mx-5 block w-[1px] h-4 "></span>
          </div>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-12 mb-5 items-center justify-between hidden text-xs lg:flex w-5/6">
            <Link href={"/"}>
              <div className=" flex flex-col items-center">
                <div className="items-center">
                  <Image
                    src="/Footer/express-delivery.svg"
                    alt="express-delivery"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
                <p>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/Footer/cash-on-delivery.svg"
                    alt="express-delivery"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
                <p>امکان پرداخت در محل</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/Footer/support.svg"
                    alt="express-delivery"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
                <p>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/Footer/days-return.svg"
                    alt="express-delivery"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
                <p>هفت روز ضمانت بازگشت کالا</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    src="/Footer/original-products.svg"
                    alt="express-delivery"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
                <p>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
