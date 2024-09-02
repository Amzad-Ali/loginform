// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export default function Carousel() {
    return (
        <div className="w-80 h-80">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="rounded-lg shadow-lg h-full"
            >
                <SwiperSlide>
                    <img src="https://via.placeholder.com/300x200?text=Slide+1" alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://via.placeholder.com/300x200?text=Slide+2" alt="Slide 2" className="w-full h-full object-cover rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://via.placeholder.com/300x200?text=Slide+3" alt="Slide 3" className="w-full h-full object-cover rounded-lg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
