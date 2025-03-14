import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Shark from './../public/shark.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Pagination } from 'swiper/modules';


const Services = () => {

    const pagination = {
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
      };


  return (
    <div className='py-16 mt-32 px-4' >
        <p className='text-[200px] text-white font-bold' >Services</p>
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='flex justify-items-center h-screen text-white' >
                <div className=' flex-1 text-left space-y-4 flex flex-col justify-center w-[500px]' >
                        <p className='text-6xl font-bold text-left' >Precision Search Solutions </p>
                        <p className='text-sm text-[#FFED00] ' >Pinpoint. Accuracy.</p>
                        <p className='text-xs' >Our Precision Search Solutions use advanced SEO techniques to target the most relevant keywords with pinpoint accuracy. By focusing on high-quality, data-driven strategies, we help your website rank higher and attract the right audience. Just like a shark moves with clarity and focus, we guide your online presence to stand out, drive more traffic, and make a real impact.</p>
                </div>
                <div className=' flex-2  h-full p-16 px-40' >
                    <img src={Shark}  />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Services