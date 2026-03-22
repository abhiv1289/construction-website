import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation , Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cons1 from '../assets/cons1.jpg';
import cons2 from '../assets/cons2.jpg';
import cons3 from '../assets/cons3.jpg';


const SubSlider = () => {
  return (
    <Swiper navigation={true} slidesPerView={3} pagination={true} autoplay={true} modules={[Navigation, Pagination , Autoplay]} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={cons1} alt="Slide 1" style={{maxWidth: '50%', height: 'auto'}}/>
                    </SwiperSlide>
                    <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={cons2} alt="Slide 2" style={{maxWidth: '50%', height: 'auto'}}/>
                    </SwiperSlide>
                    <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={cons3} alt="Slide 3" style={{maxWidth: '50%', height: 'auto'}}/>
                    </SwiperSlide>
            <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={cons1} alt="Slide 1" style={{maxWidth: '50%', height: 'auto'}}/>
                    </SwiperSlide>
                    <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={cons2} alt="Slide 2" style={{maxWidth: '50%', height: 'auto'}}/>
                    </SwiperSlide>
                    <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={cons3} alt="Slide 3" style={{maxWidth: '50%', height: 'auto'}}/>
                    </SwiperSlide>
        </Swiper>
  )
}

export default SubSlider