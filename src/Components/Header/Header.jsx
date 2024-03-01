import React from 'react'
import './Header.css'

// Import Swiper React components styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

 import { Link } from 'react-router-dom';

import { headerBooks } from '../../data/data'

import HeaderShape from '../../assets/letestArticlesIamge/header-shape.svg'

export default function Header() {
  return (
   <header>
    <div className="header-container">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      modules={[Navigation, Pagination]}
      pagination={{ el: ".swipper-peggination" ,clickable: true }}
      navigation={
        {
            preE1 : 'button-prev-slide',
            nextE1 : 'button-next-slide'
        }
      }
      >
        {
          headerBooks.map(({title , info, img, btnLink},index )=>{
            return (
              <SwiperSlide key={index}>
                <div className="header-wrapper container">
                  {/* .....................Header Left...... */}
                    <div className="header-left">
                      <h1>{title}</h1>
                      <p dangerouslySetInnerHTML={{__html:info}}></p>
                      <Link className='btn btn-border' to={btnLink}>Learn More</Link>
                    </div>

                  {/* .....................Header Right..... */}
                  <div className="header-right">
                    <img src={img} alt=""></img>
                  </div>

                </div>
              </SwiperSlide>
            );
          })
        }
                  {/* .....................Header Peggination..... */}

           {/* <div className="slider-button">
              <div className="button-prev-slide slidebutton"><GoArrowLeft /></div>
              <div className="button-next-slide slidebutton"><GoArrowRight /></div>

            </div>          */}

         <div className="container">
                <div className="swipper-peggination"></div>
              </div>
         </Swiper>
   
     {/* .....................Header Shape..... */}

     <div className="header-shape">
        <img src={HeaderShape}></img>
     </div>


    </div>
   </header>
  )
}
