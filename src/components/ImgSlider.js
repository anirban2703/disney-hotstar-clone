import styled from "styled-components";
import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import  Slider  from "react-slick"

const ImgSlider = ( props ) => {
  
    let settings = {
        dots : true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
    };

    const outerDivStyle = {
      overflow:"hidden",
      paddingBottom:'50px',
      width:'100%',
    }


  return (
    <div style={outerDivStyle}>
     <Carousel {...settings}>
        <Wrap>
            <a><img src="/images/slider-scale.jpg" alt="" /></a>
        </Wrap>
        <Wrap>
            <a><img src="/images/slider-badag.jpg" alt="" /></a>
        </Wrap>
        <Wrap>
            <a><img src="/images/slider-badging.jpg" alt="" /></a>
        </Wrap>
        <Wrap>
            <a><img src="/images/slider-scales.jpg" alt="" /></a>
        </Wrap>
      </Carousel>
    </div>
      
  )
}


const Carousel = styled(Slider)`
  margin-top: 20px;
  height:55vh;
  width:75vw;
  margin-left:8.5vw;

  &> button{
    height:100%;
    opacity :0;
    width:10vw;
    z-index:1;
   
   
   &:hover{
    opacity:1;
    transition: opacity 0.3s ease;
   }
  }


  ul li button{
    &:before{
        font-size:13px;
        color:rgb(150,150,171);
        margin-top:1rem;
    }
  }

  li.slick-active button:before{
    color: #f9f9f9 !important;
  }
  .slick-list{
    overflow : initial;
  }
  .slick-prev{
    left:-70px;
  }
  .slick-next{
    right:-70px;
  }
  @media(max-width:768px){
    height:20vh;
  }
`;

const Wrap = styled.div`
  
  border-radius:4px;
  cursor:pointer;
  position:relative;
  a{
    border-radius:4px;
    box-shadow:rgb(0 0 0 /69%) 0 26px 30px -10px,
               rgb(0 0 0/ 73%) 0 16px 10px -10px;
    padding:10px;
    position:relative;
    display:block;
    cursor:pointer;
    width:100%;
    height:55vh;

    img{
      width:100%;
      height:100%;
      object-fit:cover;
    }
    &:hover{
      padding:0;
      border: 4px solid rgba(249,249,249,0.8);
      transition-duration:300ms;
    }
    @media(max-width:768px){
      height:20vh;
    }
  }
`;


export default ImgSlider
