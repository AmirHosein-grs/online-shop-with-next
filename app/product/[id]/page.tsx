import DesktopHeader from "@/app/components/header/desktopHeader";
import Navigation from "./components/navigation";
import ProductHeader from "./components/productHeader";
import PhotoSlider from "./components/photoSlider";
import ProductSection from "./components/productSection";
import "swiper/css";
import AddToCart from "./components/addToCart";
import Footer from "@/app/components/footer/footer";

//import icon from react-icon
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";
import { RiLineChartFill } from "react-icons/ri";
import { MdCompare, MdStorefront } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { AiOutlineFileDone } from "react-icons/ai";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " ... دیجی کالا | ست هودی",
  description: "Generated by create next app",
};

export default function SingleProduct() {
  return (
    <>
      <ProductHeader />
      <DesktopHeader />
      <Navigation />
      <div className="lg:hidden">
        <div className=" mb-[90px]">
          <PhotoSlider />
          <ProductSection />
        </div>
        <AddToCart />
      </div>
      <div className="hidden lg:flex flex-row lg:px-5 lg:pb-5 ">
        <div className="lg:ml-4 w-[36%] ml-4">
          <div className="flex flex-col items-center lg:max-w-92 xl:max-w-145 lg:block mb-2">
            <div className="flex">
              <div className="flex lg:flex-col lg:gap-y-4 lg:pt-9 text-neutral-700 self-end lg:self-start lg:text-neutral-900">
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <FaRegHeart className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <IoMdShare className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <LuBellRing className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <RiLineChartFill className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <MdCompare className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <CiCircleList className="h-[20px] w-[20px]" />
                  </div>
                </div>
              </div>
              <div>
                <PhotoSlider />
              </div>
            </div>
          </div>
        </div>
        <div className="grow">
          <div className="flex items-center w-full px-5 lg:px-0">
            <div>
              <h1 className=" text-2xl text-neutral-900 mb-5 pointer-events-none">
                ست هودی و شلوار دخترانه سون پون
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-6 mx-1">
            <div className="col-span-4">
              <div className=" pb-3 min-w-0 mx-5 lg:mx-0 lg:pb-3 border-t-[1px]">
                <div>
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <div className="py-3">
                        <div className="flex items-center text-md font-bold">
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
              </div>
              <div className="">
                <div>
                  <ul>
                    <div className="py-3">
                      <div className="flex items-center">
                        <p className="text-lg font-medium text-neutral-900">
                          <span className="relative">ویژگی‌ها</span>
                        </p>
                      </div>
                    </div>
                    <li className="flex items-start mb-2 mr-2">
                      <div className="flex items-center">
                        <div className="flex w-3 opacity-30">
                          <GoDotFill />
                        </div>
                        <p className="text-sm mr-1">جنس :</p>
                      </div>
                      <p className="text-sm font-bold mr-2 text-neutral-700">
                        بافت، کشبافت
                      </p>
                    </li>
                    <li className="flex items-start mb-2 mr-2">
                      <div className="flex items-center">
                        <div className="flex w-3 opacity-30">
                          <GoDotFill />
                        </div>
                        <p className="text-sm mr-1">طرح :</p>
                      </div>
                      <p className="text-sm font-bold mr-2 text-neutral-700">
                        راه‌راه
                      </p>
                    </li>
                    <li className="flex items-start mb-2 mr-2">
                      <div className="flex items-center">
                        <div className="flex w-3 opacity-30">
                          <GoDotFill />
                        </div>
                        <p className="text-sm mr-1">استایل لباس :</p>
                      </div>
                      <p className="text-sm font-bold mr-2 text-neutral-700">
                        آزاد
                      </p>
                    </li>
                    <li className="flex items-start mb-2 mr-2">
                      <div className="flex items-center">
                        <div className="flex w-3 opacity-30">
                          <GoDotFill />
                        </div>
                        <p className="text-sm mr-1">قد لباس :</p>
                      </div>
                      <p className="text-sm font-bold mr-2 text-neutral-700">
                        زیر مچ پا
                      </p>
                    </li>
                    <li className="flex items-start mb-2 mr-2">
                      <div className="flex items-center">
                        <div className="flex w-3 opacity-30">
                          <GoDotFill />
                        </div>
                        <p className="text-sm mr-1">نوع فاق :</p>
                      </div>
                      <p className="text-sm font-bold mr-2 text-neutral-700">
                        بلند
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-2 p-5 border rounded-xl mr-4 bg-neutral-100">
              <div className="">
                <div className="">
                  <div className="flex items-center pb-4">
                    <p className="text-lg font-medium text-neutral-900">
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
                            <p className="text-sm">شلوارگندم</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="py-3 flex items-center justify-center border-b-[1px]">
                      <div className="ml-4">
                        <AiOutlineFileDone className="w-6 h-6 " />
                      </div>
                      <div className="flex w-full">
                        <div className="flex items-center mt-1 lg:mb-1">
                          <span>
                            <p className="text-sm">
                              گارانتی اصالت و سلامت فیزیکی کالا
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AddToCart />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
}
