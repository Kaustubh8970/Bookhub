import React from 'react'
import './Featurebooks.css'

import Titletypeone from '../../UI/TitleTypeOne/Titletypeone'

// Import Swiper React components styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { featuredBooksData } from '../../data/data';

import { Link } from 'react-router-dom';
import { RiLinkM } from 'react-icons/ri';
import { BsArrowReturnRight } from "react-icons/bs";


const breakpoints={
  1024:{
    slidesPerView: 4,
    spaceBetweenSlides: 150
  },
  768:{
    slidesPerView: 3,
    spaceBetweenSlides: 200
  },
  480 :{
    slidesPerView: 2,
    spaceBetweenSlides: 10
  },
  0:{slidesPerView: 1,
    spaceBetweenSlides:0
  }
}

export default function () {
  return (
    <section className='feature'>
      <div className="container feature-book-container">
        <Titletypeone TitleTop={'Some quality items'} Title={'Featured Books'} />

        {/* ------------feature book slidder----------------- */}
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          modules={[ Pagination]}
          pagination={{ el: ".swipper-peggination", clickable: true }}
          breakpoints={breakpoints}


       
        >
          {
            featuredBooksData.map(({img , imgLink , name , nameLink , writer , price })=>{
              return(
                    <SwiperSlide>
                       <div className="featurebook-box">
                        <Link to={imgLink}>
                          <img src={img}></img>
                        </Link>
                        <div className="featurebook-info">
                          <Link to={nameLink}>
                          <h4>{name}</h4>
                          </Link>

                          <div><small>{writer}</small></div>
                          <div><span>{price}</span></div>

                        </div>
                      </div>
                    </SwiperSlide>
              )
            })
          }

<div className="feature-border container"></div>
          {/* swipper peggination */}
          <div className="swipper-pegination"></div>
          {/* ======== view all product====== */}
          <Link to='*' className='btn feature-btn'>View all products <BsArrowReturnRight /></Link>
        </Swiper>

         
    


      </div>
    </section>
  )
}
