import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from "../assets/slide-1.jpg"
import slider2 from "../assets/slide-2.jpg"
import slider3 from "../assets/slide-3.jpg"
import slider4 from "../assets/slide-4.jpg"

const Slider = () => {
  return (
    <div>
    <Swiper className='m-5 mySwiper'  autoplay={{delay:2500, disableOnInteraction:false,}} navigation = {true}  pagination ={true} modules={[Navigation,Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='h-[250px] w-full' src={slider1}/></SwiperSlide>
      <SwiperSlide><img className='h-[250px] w-full' src={slider2}/></SwiperSlide>
      <SwiperSlide><img  className='h-[250px] w-full' src={slider3}/></SwiperSlide>
      <SwiperSlide><img  className='h-[250px] w-full' src={slider4}/></SwiperSlide>
      <SwiperSlide><img className='h-[250px] w-full' src={slider1}/></SwiperSlide>
      <SwiperSlide><img className='h-[250px] w-full' src={slider2}/></SwiperSlide>
      <SwiperSlide><img className='h-[250px] w-full' src={slider3}/></SwiperSlide>
      <SwiperSlide><img className='h-[250px] w-full' src={slider4}/></SwiperSlide>

    </Swiper>
    
    </div>
  )
}

export default Slider