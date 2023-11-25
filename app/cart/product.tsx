import Image from "next/image";
import Link from "next/link";
import {
  ArchiveBoxArrowDownIcon,
  BuildingStorefrontIcon,
  InformationCircleIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function Product() {
  return (
    <>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:sm:grid-cols-5 lg:grid-cols-6 py-4 pb-8 mx-5 lg:pr-4 gap-x-8 gap-y-4 border-b-[1px] lg:last:border-0 ">
        <div className=" flex items-center justify-center max-w-[116px] col-span-1 md:grid-cols-2 lg:col-span-1">
          <Link href={"#"}>
            <div>
              <Image
                src="Logo.svg"
                alt="Shop Logo"
                width={114}
                height={114}
                priority
              />
            </div>
          </Link>
        </div>
        <div className="overflow-hidden lg:col-span-5 md:grid-cols-3 sm:col-span-3 xs:col-span-2 col-span-1">
          <div>
            <h4 className="text-xs lg:text-sm font-bold ">
              ست ماشین اصلاح موی صورت و بدن وی جی آر مدل V-099
            </h4>
            <div className="flex items-center pt-3">
              <div className="flex mt-1">
                <div className="bg-black rounded-full w-5 h-5"></div>
              </div>
              <p className="mr-2 text-xs lg:text-sm opacity-70">مشکی</p>
            </div>
            <div className="flex  pt-2 opacity-70">
              <div>
                <InformationCircleIcon className="w-5 h-5  " />
              </div>
              <p className="mr-2 text-xs lg:text-sm">
                سرویس ویژه دیجی کالا: 7 روز تضمین بازگشت کالا
              </p>
            </div>
            <div className="flex items-center pt-2 opacity-70">
              <div>
                <BuildingStorefrontIcon className="w-5 h-5  " />
              </div>
              <p className="mr-2 text-xs lg:text-sm">عسلویه شاپ</p>
            </div>
            <div className="flex pt-2 opacity-70">
              <div>
                <ArchiveBoxArrowDownIcon className="w-5 h-5  " />
              </div>
              <p className="mr-2 text-xs lg:text-sm">موجود در انبار فروشنده</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[110px] col-span-1 md:grid-cols-2 lg:col-span-1">
          <div className="flex items-center justify-between w-full p-2 rounded-md border-2 ">
            <div className="flex cursor-pointer">
              <PlusIcon className="w-5 h-5" />
            </div>
            <span>
              <span>1</span>
            </span>
            <div className="flex cursor-pointer">
              <TrashIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 md:grid-cols-3 sm:col-span-3 xs:col-span-2 col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex p-1">
                <span className="text-xs lg:text-lg font-bold">535,000</span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex mr-1">
                      <Image
                        src="/Toman/Toman.svg"
                        alt="Shop Logo"
                        width={17}
                        height={17}
                        priority
                      />
                    </div>
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
