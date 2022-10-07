import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile, tablet } from "../responsive";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
    width: 100vw;
    position: relative;
    overflow: hidden;

    ${tablet({
        "overflow" : "hidden"
    })}
`

const Card = styled.a`
    height: 100%;
    width: 100%;
    outline: none;
    object-fit: cover;
    `
const Img = styled.img`
    height: 70vh;
    width: 100%;
    border-radius: 15px;
    position: relative;

    ${tablet({
        "height" : "40vh",
    })}

    ${mobile({
        "height" : "20vh"
    })}
    `

const Carousel = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    const sliderStyle = {
        "borderRadius" : "15px",
        "width" : "90vw",
    }

    
    function NextArrow(props) {
        const { nextArrow, style, onClick } = props;
        return (
          <div
            className={nextArrow}
            style={{ ...style, 
                color: "#3bb77d36", 
                fontSize: "20px",
                position: "absolute",
                top: "45%",
                right: "15px",
            }}
            onClick={onClick}
          ><IoIosArrowForward/></div>
        );
      }
      
      function PrevArrow(props) {
        const { prevArrow, style, onClick } = props;
        return (
          <div
            className={prevArrow}
            style={{ ...style, 
                color: "#3bb77d36", 
                fontSize: "20px",
                position: "absolute",
                top: "45%",
                left: "10px",
                zIndex: "1"
            }}
            onClick={onClick}
          ><IoIosArrowBack/></div>
        );
      }
    


  return (
    <Wrapper>
        <Slider {...settings} style={sliderStyle} dots >
            {
                sliderItems.map((item,index) => (
                    <Card href="/">
                        <Img src={item.img}/>
                    </Card>
                ))
            }
        </Slider>
    </Wrapper>
  )
}

export default Carousel
