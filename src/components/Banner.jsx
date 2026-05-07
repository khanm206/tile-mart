"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative ">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={6000}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D"
              alt="banner"
              height={500}
              width={500}
              priority
              className="object-bottom w-full h-[40dvh] md:h-[60dvh]"
            />

            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="banner"
              height={500}
              width={500}
              priority
              className="object-bottom w-full md:h-[60dvh] h-[40dvh]"
            />

            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image
              src="https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D"
              alt="banner"
              height={500}
              width={500}
              priority
              className="object-bottom w-full md:h-[60dvh] h-[40dvh]"
            />

            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" absolute z-10 inset-0 flex flex-col items-center justify-center text-white text-center px-4 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Elevate Your Space with Timeless Design
        </h1>
        <p className=" md:text-2xl">
          Redefine your home with contemporary elegance
        </p>
        <button className="btnBanner">
          <Link href={"/all_tiles"}>Browse Now</Link>
        </button>
      </div>
    </div>
  );
}
