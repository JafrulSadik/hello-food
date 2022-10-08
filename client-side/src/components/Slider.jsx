import React from 'react';
import styled from 'styled-components';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { sliderItems } from "../data";
import { mobile, tablet } from '../responsive';

const Wrapper = styled.div`
    .swiperStyle{
        text-align: center;
    }

    .mySwiper{
        //margin: 30px 0px;
    }

    .swiper-pagination-bullet-active{
        background-color: #15151553;
    }
`

const Img = styled.img`
    width: 100vw;
    height: 70vh;
    text-align: center;

    ${tablet({
        "height": "40vh"
    })}

    ${mobile({
        "height": "20vh"
    })}
`
const Link = styled.a`
`


const Slider = () => {

  return (
    <Wrapper>
      <Swiper
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {
            sliderItems.map((item) => (
                <SwiperSlide className='swiperStyle'>
                    <Link href='/'><Img src={item.img} alt="text"></Img></Link>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </Wrapper>
  )
}

export default Slider