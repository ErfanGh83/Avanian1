"use client"

import React from 'react'
import { data } from './AuthSlidersData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const AuthSliders = () => {
    return (
        <div className="w-full h-full relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 6000 }}
                loop={true}
                pagination={{ clickable: true }}
                className="h-full w-full"
            >
                {data.map((image, index) => (
                    <SwiperSlide key={index} className="relative h-full w-full">
                        <Image
                            src={image.src}
                            alt={image.title}
                            className="object-cover"
                            fill
                            quality={100}
                            priority={index === 0} // Only prioritize first image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AuthSliders