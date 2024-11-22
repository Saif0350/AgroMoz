"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const bannersData = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/farmland_1112-1236.jpg?t=st=1731925964~exp=1731929564~hmac=2fb8fbc3f7bd2e57086feb10d42dc03971a95bc5fd28ecf6d1f6abc3ec4b4702&w=1060",
    title: "Innovative Farming Equipment",
    description:
      "Transform your farming operations with cutting-edge machinery designed to enhance productivity, efficiency, and sustainability in every harvest.",
  },
  {
    id: 2,
    img: "https://img.freepik.com/premium-photo/indian-farmer-working-with-bull-his-farm_75648-8708.jpg?w=996",
    title: "Advanced Crop Protection",
    description:
      "Ensure healthy crops with the latest in crop protection technology. Our solutions safeguard your fields from pests, diseases, and weather impacts.",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/tractor-agricultural-machine-cultivating-field_342744-896.jpg?t=st=1731926025~exp=1731929625~hmac=eeea602836653424627bf80121f681e3b26cc0469e5b84679ec56c1ffa9d2927&w=996",
    title: "Efficient Harvesting Solutions",
    description:
      "Maximize your yield with our high-efficiency harvesting machinery. Designed for speed, precision, and minimal crop loss.",
  },
];

const Homebanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  return (
    <div className="banner-container h-[40vh] sm:h-[50vh] md:h-[80vh]">
      <Swiper
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        pagination={{ dynamicBullets: true }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        grabCursor
        className="mySwiper"
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.params.navigation.prevEl = prevButtonRef.current;
        }}
      >
        {bannersData.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div
                className={`slide-image ${currentSlide === index ? "fade-in" : "fade-out"
                  }`}
              >
                <img
                  src={banner.img}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>

              <div
                className={`absolute inset-0 flex items-center justify-center p-5 text-white ${currentSlide === index ? "slide-up" : "slide-down"
                  }`}
              >
                <div className="text-center">
                  <h2 className=" text-[22px] sm:text-[40px] md:text-[65px] text-white font-bold font-[antonio]">
                    {banner.title}
                  </h2>
                  <p className="mt-2 text-white text-[15px] sm:text-xl md:text-2xl mx-0 sm:mx-16 md:mx-32 my-4">
                    {banner.description}
                  </p>
                  <div className="bg-gradient-to-r from-primary to-primary rounded-sm duration-200 w-[116px] md:w-36 mt-3 md:mt-6 mx-auto px-2 md:px-6 py-1.5 md:py-2 hover:from-primary hover:to-secondary">
                    <Link
                      href="/contact-us"
                      className=" text-base md:text-xl text-white group font-medium flex justify-center"
                    >
                      Contact us
                      {/* <span className="-mb-0.5 ml-1 group-hover:ml-1.5 duration-150">
                        <ChevronRight size={20} color="#fff" />
                      </span> */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          ref={nextButtonRef}
          className="swiper-button-next  bg-gradient-to-r from-darkPrimary to-lightPrimary rounded-full !h-14 !w-14 md:!h-24 md:!w-24 p-1 !hidden md:!block"
        >
          <ChevronRight strokeWidth={1} color="#fff" />
        </div>
        <div
          ref={prevButtonRef}
          className="swiper-button-prev  bg-gradient-to-r from-darkPrimary to-lightPrimary rounded-full !h-14 !w-14 md:!h-24 md:!w-24 p-1 !hidden md:!block"
        >
          <ChevronRight strokeWidth={1} color="white" className="rotate-180" />
        </div>
      </Swiper>
    </div>
  );
};

export default Homebanner;
