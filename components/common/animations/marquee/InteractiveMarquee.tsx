"use client";
import React from "react";
import SwiperCore from "swiper";
import { Parallax, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuSearchCode } from "react-icons/lu";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

interface HighlightPropArg {
  content: string[];
  reverse?: boolean;
}

const InteractiveMarquee: React.FC<HighlightPropArg> = ({
  content,
  reverse = false,
}) => {
  const swiperRef = React.useRef<SwiperCore>();
  const [, onHover] = React.useState<boolean>(false);

  // const SwiperConfig: SwiperProps = {
  //   speed: 3000,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //     pauseOnMouseEnter: true,
  //     reverseDirection: reverse,
  //   },
  //   loop: true,
  //   slidesPerView: "auto",
  //   watchSlidesProgress: true,
  //   spaceBetween: 40,
  //   grabCursor: true,
  // };
  // SwiperCore.use([Autoplay, Parallax]);

  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const handleMouseEnter = () => {
    onHover(true);
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };
  const handleMouseLeave = () => {
    onHover(false);
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  return (
    <div
      className="highlight-inner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: reverse,
        }}
        loop
        slidesPerView="auto"
        watchSlidesProgress
        spaceBetween={15}
        breakpoints={{
          "640": {
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Parallax]}
        onInit={onInit}
      >
        {content.map((image, index) => (
          <SwiperSlide
            key={index}
            className="highlight-card !w-[120px] !h-[120px] sm:!w-[200px] sm:!h-[200px] rounded-lg overflow-hidden"
          >
            <div className=" bg-background group relative w-full h-full cursor-pointer flex items-center justify-center">
              <div className="card-overlay absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-10 z-[10] transition-all duration-300 ease-in-out"></div>
              <a
                href="/"
                className="card-title w-[140px] absolute z-[20] text-white text-sm font-light opacity-0 group-hover:opacity-100 bg-primary px-2 py-2 rounded-md transition-all duration-300 ease-in-out hidden. sm:flex items-center justify-center"
              >
                <LuSearchCode size={24} className="stroke-white mr-1" />
                Show Similar
              </a>
              <Image
                src={image}
                width={300}
                height={300}
                alt={`${image + index}`}
                className="w-full h-full object-cover object-center cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InteractiveMarquee;
