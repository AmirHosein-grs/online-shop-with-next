"use client";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../style/photoSlider.css";

export default function PhotoSlider() {
  return (
    <div>
      <div>
        <div>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            slidesPerView={"auto"}
            className="text-xs lg:my-4 w-full h-[336px] flex items-center justify-center "
          >
            <SwiperSlide>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/Test/1.jpg"
                  alt="Shop Logo"
                  width={280}
                  height={336}
                  priority
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/Test/2.jpg"
                  alt="Shop Logo"
                  width={280}
                  height={280}
                  priority
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/Test/3.jpg"
                  alt="Shop Logo"
                  width={280}
                  height={280}
                  priority
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
