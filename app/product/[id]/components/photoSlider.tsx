"use client";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../style/photoSlider.css";

interface PhotoSliderProps {
  images: any;
}

export default function PhotoSlider({ images }: PhotoSliderProps) {
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
            {images.map((image: any) => (
              <SwiperSlide key={image.id}>
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={image.path}
                    alt="Shop Logo"
                    width={280}
                    height={336}
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
