import { ChevronLeftIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" w-full flex flex-col items-center lg:p-10 p-5">
      <h2 className=" text:xs lg:text-xl font-bold text-center pt-5 ">
        صفحه‌ای که دنبال آن بودید پیدا نشد!
      </h2>
      <Link href="/">
        <div className="flex items-center py-5 lg:py-10 text-blue-700 ">
          <span className="text-xs ml-2 ">صفحه اصلی</span>
          <div>
            <ChevronLeftIcon className="h-3 w-3" />
          </div>
        </div>
      </Link>
      <div>
        <Image
          src="/404/page-not-found.webp"
          alt="not-found"
          width={500}
          height={30}
          priority
        />
      </div>
    </div>
  );
}
