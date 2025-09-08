"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";

export default function Slider({ slides, loop = true }) {
  const slidesRef = useRef([]);

  useEffect(() => {
    slidesRef.current.forEach((slide) => {
      if (slide) {
        gsap.from(slide, {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: "power3.out",
        });
      }
    });
  }, []);

  const handleSlideChange = () => {
    slidesRef.current.forEach((slide, i) => {
      if (slide) {
        gsap.fromTo(
          slide,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
        );
      }
    });
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      loop={loop}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
      }}
      onSlideChange={handleSlideChange}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} ref={(el) => (slidesRef.current[index] = el)}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}