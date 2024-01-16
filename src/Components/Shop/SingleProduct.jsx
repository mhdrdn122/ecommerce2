import axios from 'axios';
import React, { useEffect, useState } from 'react'
import data from '../../products.json'
import { useParams } from 'react-router'
import HeaderSection from '../Utilis/HeaderSection';

// import swiper React components
import { Swiper , SwiperSlide } from 'swiper/react';

// import swiper styles
import { Autoplay } from 'swiper/modules';
import ProductDetails from './ProductDetails';
import Review from './Review';
import PopuLarPost from './PopuLarPost';
import Tags from './Tags';


const SingleProduct = () => {
  const [product , setProduct] = useState([])
  const {id} = useParams();

  useEffect( () => {
    setProduct(data)
  },[])
  const result = product.filter( (p) => p.id === id)
 console.log(result)
  return (
    <div>
      <HeaderSection title="OUR SHOP SINGLE" curPage={"shop / single product"} />

      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            {/* right side */}

            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper

                          spaceBetween={30}
                          slidesPerView={1}
                          loop={"true"}
                          autoplay={{
                            delay : 2000,
                            disableOnInteraction : false
                          }}
                          modules={[Autoplay]}
                          navigation={
                            {
                              prevEl:".pro-single-prev",
                              nextEl:".pro-single-next",

                            }
                          }
                           className='mySwiper'>
                           {
                            result.map( (item , i) => (
                              <SwiperSlide key={i} >
                                <div className="single-thumb">
                                  <img src={item.img} alt='' />
                                </div>
                              </SwiperSlide>

                              
                            ))
                           }
                          </Swiper>
                          <div className="pro-single-next">
                                <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                                <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {
                            result.map(item => <ProductDetails key={item.id} item={item}/>)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* reviews */}
                <div className="review">
                  <Review />
                </div>
              </article>
            </div>

            {/* left side */}
            <div className="col-lg-4 col-12">
                  <PopuLarPost /> 
                  <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct