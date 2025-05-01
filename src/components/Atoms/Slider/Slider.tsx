import { ReactNode } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

interface SliderProps {
  children: ReactNode[];
  className?: string;
}

const Slider = ({ children, className }: SliderProps) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
      className={classNames("mySwiper", className)}
      loop={true}
    >
      {children.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
