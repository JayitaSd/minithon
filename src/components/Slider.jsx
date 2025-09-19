import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Slider({ details }) {
  return (
    <section className="p-6 t-28 w-full max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1},
          1024: { slidesPerView: 1 },
        }}
      >
        {details.map((detail, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden relative transition-colors duration-300">
              {/* Image */}
              <div className="relative">
                <img
                  src={detail.img}
                  alt={detail.description || detail.artist}
                  className="w-full h-120 object-cover overflow-hidden transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Details */}
              {/* <div className="p-3 text-left">
                {/* If it's an event */}
                {/* {detail.venue && (
                  <>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="text-blue-600 dark:text-blue-400">{detail.venue}</span>
                      <span className="text-gray-500 dark:text-gray-400">{detail.description}</span>
                    </div>
                    <h3 className="font-bold text-base mt-1 text-gray-900 dark:text-gray-100">
                      {detail.date}
                    </h3>
                  </>
                )} */}

                {/* If it's an artist */}
                {/* {detail.artist && (
                  <>
                    <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">
                      {detail.artist}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {detail.song}
                    </p>
                  </>
                )}
              </div> */} 
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-2 z-20 p-2 rounded-full bg-white dark:bg-slate-800 shadow cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700">
          <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-2 z-20 p-2 rounded-full bg-white dark:bg-slate-800 shadow cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700">
          <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </div>
      </Swiper>
    </section>
  );
}