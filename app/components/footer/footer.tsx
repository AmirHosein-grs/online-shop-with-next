import Image from "next/image";
import MobileFooter from "./mobileFooter";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <MobileFooter />
        <div className="hidden lg:flex lg:flex-col mx-8 ">
          <div className="flex w-full justify-between items-center p-3 pt-8 mt-12 border-t-2 ">
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
            <div className="mt-12 items-center justify-between hidden text-xs lg:flex w-5/6">
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
          <div className="w-full py-5">
            <div className="flex justify-between w-full">
              <div className=" w-6/12 ">
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-gray-900">
                  با دیجی‌کالا
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      اتاق خبر دیجی‌کالا
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      فروش در دیجی‌کالا
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      فرصت‌های شغلی
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      گزارش تخلف در دیجی‌کالا
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      تماس با دیجی‌کالا
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      درباره دیجی‌کالا
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" w-6/12 ">
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-gray-900">
                  خدمات مشتریان
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      پاسخ به پرسش‌های متداول
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      رویه‌های بازگرداندن کالا
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      شرایط استفاده
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      حریم خصوصی
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      گزارش باگ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" w-6/12 ">
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-gray-900">
                  راهنمای خرید از دیجی‌کالا
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      نحوه ثبت سفارش
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      رویه ارسال سفارش
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      شیوه‌های پرداخت
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" w-4/12 ">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900">
                    همراه ما باشید!
                  </h2>
                </div>
                <div className="flex items-center opacity-40 mb-10">
                  <Link href={"/"}>
                    <Image
                      className="ml-6"
                      src="/Social/Instagram.svg"
                      alt="Shop Logo"
                      width={35}
                      height={35}
                      priority
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image
                      className="ml-6"
                      src="/Social/Twitter.svg"
                      alt="Shop Logo"
                      width={35}
                      height={35}
                      priority
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image
                      className="ml-6"
                      src="/Social/Linkdin.svg"
                      alt="Shop Logo"
                      width={35}
                      height={35}
                      priority
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image
                      className="ml-6"
                      src="/Social/Aparat.svg"
                      alt="Shop Logo"
                      width={35}
                      height={35}
                      priority
                    />
                  </Link>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900">
                    با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
                  </h2>
                  <form className="flex justify-between h-12">
                    <label className="w-10/12 ml-2">
                      <input
                        type="text"
                        placeholder="ایمیل شما"
                        className=" w-full h-12 bg-gray-200 pr-5 rounded outline-0 "
                      />
                    </label>
                    <button
                      type="submit"
                      className="w-2/12 bg-gray-300 rounded  "
                      disabled
                    >
                      <div className="text-white">ثبت</div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <hr className="my-8 border-gray-200" />
            <div className="flex items-center justify-center">
              <span className="text-xs text-gray-500 sm:text-center">
                برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر
                «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن
                آوازه (فروشگاه آنلاین دیجی‌کالا) است.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
