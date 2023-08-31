// Import Swiper React components
'use client';
// import Swiper core and required modules
import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import slide_image1 from '../public/assets/swiper_slide/1.jpg';
import slide_image2 from '../public/assets/swiper_slide/2.jpg';
import slide_image3 from '../public/assets/swiper_slide/3.jpg';
import slide_image4 from '../public/assets/swiper_slide/4.jpg';
import slide_image5 from '../public/assets/swiper_slide/5.jpg';
import slide_image6 from '../public/assets/swiper_slide/6.jpg';
import slide_image7 from '../public/assets/swiper_slide/7.jpg';
import slide_image8 from '../public/assets/swiper_slide/8.jpg';
import './styles.css';
export default () => {
  return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop= {true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: -100,
              depth: 500,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
        <SwiperSlide>
          <Image isBlurred src="https://swiperjs.com/demos/images/nature-1.jpg" width={300} height={300}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src="https://swiperjs.com/demos/images/nature-2.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src="https://swiperjs.com/demos/images/nature-3.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src="https://swiperjs.com/demos/images/nature-4.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src="https://swiperjs.com/demos/images/nature-5.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src="https://swiperjs.com/demos/images/nature-6.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src="https://swiperjs.com/demos/images/nature-7.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src="https://swiperjs.com/demos/images/nature-8.jpg" width={300} height={300} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src="https://swiperjs.com/demos/images/nature-9.jpg" width={300} height={300} />
        </SwiperSlide>            
        </Swiper>
);
};