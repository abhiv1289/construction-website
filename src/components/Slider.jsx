import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation , Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import cons1 from '../assets/cons1.jpg';
import cons2 from '../assets/cons2.jpg';
import cons3 from '../assets/cons3.jpg';

const Slider = () => {
  return (
    <Swiper
      navigation
      pagination
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Pagination, Autoplay]}
      className="w-full h-[450px]"   // ✅ control height here
    >
      {[cons1, cons2, cons3].map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img}
            alt={`Slide ${i}`}
            className="w-full h-full object-cover" // ✅ important
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider