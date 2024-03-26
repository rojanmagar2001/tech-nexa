"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

export const data = [
  {
    title: "Gaming Laptop",
    image: images[0],
  },
  {
    title: "Productivity Laptop",
    image: images[1],
  },
  {
    title: "Workstation Laptop",
    image: images[2],
  },
];

export default function FeaturedSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop
        speed={2000}
        navigation={{
          enabled: true,
          prevEl: ".swiper-button-custom-prev",
          nextEl: ".swiper-button-custom-next",
        }}
        pagination={{ clickable: true }}
        className="h-[60vh] sm:h-[87.4vh] w-full"
        effect="slide"
        onSlideChangeTransitionStart={() => {
          gsap.from(".swiper-slide-active p", {
            opacity: 0,
            yPercent: 200,
            ease: "power4",
            duration: 1,
            animation: 1,
            delay: 0.6,
            stagger: 0.1,
          });
          gsap.from(".swiper-slide-active h1", {
            opacity: 0,
            yPercent: 60,
            ease: "power4",
            duration: 1.5,
            animation: 1,
            delay: 0.8,
            stagger: 0.6,
          });
          gsap.from(".swiper-slide-active span", {
            opacity: 0,
            yPercent: 200,
            ease: "power4",
            duration: 1,
            animation: 1,
            delay: 1,
            // stagger: 0.,
          });
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} className="w-full flex flex-col relative">
            <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 gap-y-4 sm:gap-y-6">
              <p className="text-xl sm:text-2xl font-light text-gray-100">
                This month from $29
              </p>
              <div className="flex flex-col items-center justify-center gap-y-8 sm:gap-y-16">
                <h1 className="text-gray-50 text-4xl lg:text-8xl font-bold">
                  {slide.title}
                </h1>
                <span>
                  <a
                    href="/"
                    className="slide-link py-2 px-4 sm:py-4 sm:px-8 border-[1px] border-gray-200 text-white hover:bg-gray-200 hover:text-black transition-all duration-300 ease-in-out rounded-md"
                  >
                    Shop Now
                  </a>
                </span>
              </div>
            </div>
            <Image
              src={slide.image}
              alt={slide.title}
              width={4320}
              height={2160}
              className="absolute w-full h-full inset-0 -z-[1] object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-custom-prev hidden sm:block group absolute z-[5] top-[45%] left-16 p-5 rounded-full border-[1px] border-gray-50 hover:bg-gray-100 cursor-pointer">
        <BsArrowLeft
          size={24}
          fill="white"
          className="group-hover:!fill-primary"
        />
      </div>
      <div className="swiper-button-custom-next hidden sm:block group absolute z-[5] top-[45%] right-16 p-5 rounded-full border-[1px] border-gray-50 hover:bg-gray-100 cursor-pointer rotate-180">
        <BsArrowLeft
          size={24}
          fill="white"
          className="group-hover:!fill-primary"
        />
      </div>
      {/* <span className="swiper-button-custom-prev"></span> */}
    </section>
  );
}
