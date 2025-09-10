"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./Slider.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";

export default function Slider({ slides, loop = true }) {
  const slidesRef = useRef([]);

  useEffect(() => {
    slidesRef.current.forEach((slide) => {
      if (slide) {
        gsap.from(slide, { opacity: 0, x: 100, duration: 1, ease: "power3.out" });
      }
    });
  }, []);


  return (
    <div className={classes.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={loop}
        navigation={{
          prevEl: `.${classes.swiperButtonPrev}`,
          nextEl: `.${classes.swiperButtonNext}`,
        }}
        pagination={{
          el: `.${classes.swiperPagination}`,
          type: "fraction",
          clickable: true
        }}
        breakpoints={{
          768: { slidesPerView: 1.5, spaceBetween: 20 },
          1240: { slidesPerView: 1, spaceBetween: 20 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={classes.slideContent}>{slide}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={classes.sliderControls}>
        <div className={classes.swiperButtonPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="16" fill="#E30613" />
            <path
              d="M14.1332 16.9466C14.0082 16.8226 13.909 16.6752 13.8413 16.5127C13.7736 16.3502 13.7388 16.1759 13.7388 15.9999C13.7388 15.8239 13.7736 15.6496 13.8413 15.4871C13.909 15.3247 14.0082 15.1772 14.1332 15.0533L20.2532 8.94658C20.3782 8.82263 20.4774 8.67517 20.545 8.51269C20.6127 8.35021 20.6476 8.17593 20.6476 7.99992C20.6476 7.8239 20.6127 7.64963 20.545 7.48715C20.4774 7.32467 20.3782 7.1772 20.2532 7.05325C20.0034 6.80492 19.6654 6.66553 19.3132 6.66553C18.9609 6.66553 18.623 6.80492 18.3732 7.05325L12.2532 13.1733C11.5041 13.9233 11.0834 14.9399 11.0834 15.9999C11.0834 17.0599 11.5041 18.0766 12.2532 18.8266L18.3732 24.9466C18.6215 25.1929 18.9567 25.3318 19.3065 25.3333C19.482 25.3343 19.6559 25.3006 19.8184 25.2343C19.9808 25.1679 20.1286 25.0702 20.2532 24.9466C20.3782 24.8226 20.4774 24.6752 20.545 24.5127C20.6127 24.3502 20.6476 24.1759 20.6476 23.9999C20.6476 23.8239 20.6127 23.6496 20.545 23.4871C20.4774 23.3247 20.3782 23.1772 20.2532 23.0533L14.1332 16.9466Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={classes.swiperPagination}></div>
        <div className={classes.swiperButtonNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="16" fill="#E30613" />
            <path
              d="M20.5331 13.1733L14.4131 7.05325C14.1633 6.80492 13.8253 6.66553 13.4731 6.66553C13.1208 6.66553 12.7829 6.80492 12.5331 7.05325C12.4081 7.1772 12.3089 7.32467 12.2412 7.48715C12.1735 7.64963 12.1387 7.8239 12.1387 7.99992C12.1387 8.17593 12.1735 8.35021 12.2412 8.51269C12.3089 8.67517 12.4081 8.82263 12.5331 8.94658L18.6664 15.0533C18.7914 15.1772 18.8906 15.3247 18.9583 15.4872C19.026 15.6496 19.0608 15.8239 19.0608 15.9999C19.0608 16.1759 19.026 16.3502 18.9583 16.5127C18.8906 16.6752 18.7914 16.8226 18.6664 16.9466L12.5331 23.0533C12.282 23.3026 12.1402 23.6414 12.139 23.9952C12.1377 24.349 12.2771 24.6888 12.5264 24.9399C12.7757 25.191 13.1145 25.3327 13.4684 25.334C13.8222 25.3352 14.162 25.1959 14.4131 24.9466L20.5331 18.8266C21.2821 18.0766 21.7029 17.0599 21.7029 15.9999C21.7029 14.9399 21.2821 13.9233 20.5331 13.1733Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}