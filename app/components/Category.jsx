"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Category = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <h2 className="text-2xl  font-light tracking-wide text-gray-600 flex items-center gap-2 mb-5">
        SHOP BY <span className="font-bold text-gray-800">CATEGORY</span>
        <span className=" w-12 h-[2px] bg-gray-800"></span>
      </h2>

      <Swiper
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src="/images/categories/category1.jpg"
              alt="Category 1"
              className="h-[380px] w-full rounded-lg"
              width={300}
              height={200}
            />
            <span className="bg-rose-100 py-2 px-6 absolute bottom-2 left-2 rounded-md">
              Kids
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src="/images/categories/category6.jpg"
              alt="Category 2"
              className="h-[390px] w-full rounded-lg"
              width={300}
              height={200}
            />
            <span className="bg-rose-100 py-2 px-6 absolute bottom-2 left-2 rounded-md">
              Man
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src="/images/categories/category5.jpg"
              alt="Category 3"
              className="h-[380px] w-full rounded-lg"
              width={300}
              height={200}
            />
            <span className="bg-rose-100 py-2 px-6 absolute bottom-2 left-2 rounded-md">
              Woman
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src="/images/categories/category7.jpg"
              alt="Category 4"
              className="h-[380px] w-full rounded-lg"
              width={300}
              height={200}
            />
            <span className="bg-rose-100 py-2 px-6 absolute bottom-2 left-2 rounded-md">
              Shoes
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
