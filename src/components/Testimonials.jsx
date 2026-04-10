import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../data/testimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Testimonials = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div className="bg-gray-100 m-5 py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Client Reviews</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
          Real feedback from clients who trusted us with their projects.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.name}-${index}`}>
              <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 text-center min-h-[320px] flex flex-col justify-between">
                <div>
                  <FaQuoteLeft className="text-2xl text-blue-500 mx-auto mb-5" />
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                    {testimonial.text}
                  </p>
                </div>

                <div className="mt-8">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-white shadow"
                  />
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-yellow-400 mt-2">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar key={starIndex} className="text-sm" />
                    ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-center text-xs text-gray-500 -mt-4">
          {current}/{testimonials.length}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;