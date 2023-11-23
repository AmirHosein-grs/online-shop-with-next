"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  BellAlertIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

export default function Navigation() {
  return (
    <div className="flex items-center">
      <nav className="py-2 mx-5 lg:px-0 w-full">
        <div>
          <Swiper
            slidesPerView={"auto"}
            className="text-xs lg:my-4  opacity-60  "
          >
            <SwiperSlide style={{ width: "auto" }}>
              {" "}
              <Link href={"/"}>
                دیجی‌کالا
                <span className="mx-3">/</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "auto" }}>
              {" "}
              <Link href={"/"}>
                زیبایی و سلامت
                <span className="mx-3">/</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "auto" }}>
              {" "}
              <Link href={"/"}>
                لوازم شخصی برقی
                <span className="mx-3">/</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide style={{ width: "auto" }}>
              {" "}
              <Link href={"/"}>
                اصلاح موی صورت
                <span className="mx-3">/</span>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </nav>
      <div className="hidden lg:flex items-center mr-auto py-2 text-sm">
        <div>
          <Link
            href={"/"}
            className="ml-8 text-neutral-400 flex items-center w-max"
          >
            <span>ثبت آگهی در پیندو</span>
            <div className="mr-1">
              <BellAlertIcon className="w-4 h-4" />
            </div>
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
            className=" text-neutral-400 flex items-center w-max"
          >
            <span>فروش در دیجی‌کالا</span>
            <div className="mr-1">
              <BuildingStorefrontIcon className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
