"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function SwiperNavigation() {
  return (
    <div>
      <Swiper slidesPerView={"auto"} className="text-xs lg:my-4  opacity-60  ">
        <SwiperSlide style={{ width: "auto" }}>
          {" "}
          <Link href={"/"}>
            دیجی‌کالا
            <span className="mx-3">/</span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
