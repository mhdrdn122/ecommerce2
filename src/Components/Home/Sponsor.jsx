import React from 'react'

import { Swiper , SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'

import sponer1 from '../../assets/images/sponsor/01.png'
import sponer2 from '../../assets/images/sponsor/02.png'
import sponer3 from '../../assets/images/sponsor/03.png'
import sponer4 from '../../assets/images/sponsor/04.png'
import sponer5 from '../../assets/images/sponsor/05.png'
import sponer6 from '../../assets/images/sponsor/06.png'

const sponsorList = [
    {
    imgUrl: sponer1,
    },
    {
    imgUrl: sponer2,
    },
    {
    imgUrl: sponer3,
    },
    {
    imgUrl: sponer4,
    },
    {
    imgUrl: sponer5,
    },
    {
    imgUrl: sponer6,
    },
    ];
    
    
const Sponsor = () => {
  return (
    <div className='sponsor-section section-bg'>
        <div className='container'>
            <div className='section-wrapper'>
                <Swiper 
                
                slidesPerView={2}
                spaceBetween={20}
                autoplay = {
                    {
                        delay : 2000,
                        disableOnInteraction: false
                    }
                }
                breakpoints={{
                    640: {
                        slidesPerView : 1,
                        spaceBetween:20
                    },
                    768: {
                        slidesPerView : 3,
                        spaceBetween:40
                    },
                    1024 : {
                        slidesPerView : 5,
                        spaceBetween:50
                    }
                }}

                modules={[Autoplay]}
                className='mySwiper'
                >

                   {
                    sponsorList.map( (val , i) => { 
                        return(
                            <SwiperSlide key={i} >
                                    <div   className='sponsor-item'>
                                        <div  className='sponer-thumb'>
                                            <img src={val.imgUrl} alt='img'/>
                                        </div>
                                    </div>
                            </SwiperSlide>
                        )
                    })
                   } 
                    
                 </Swiper>
            </div>

        </div>

    </div>
  )
}

export default Sponsor