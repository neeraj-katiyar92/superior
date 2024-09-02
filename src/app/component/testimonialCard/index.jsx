"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./styles.scss"
import { testimonialImage } from '../../../../public/images';
import Image from 'next/image';
import VideoPlayer from './VideoPlayer';
import Slider from 'react-slick';


  // Your global styles
const TestimonialCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay:true,             // Enable autoplay
    // autoplaySpeed: 3000,  
  })
// useEffect(() => {
//   setSettings((prev)=>{
//     return{
//       ...prev,autoplay:isPlaying,
//     }
//   })
//   console.log(settings,"setting")
// }, [isPlaying])

  
  return (
    <div className="testimonial-card">
    <div className="left">
      <div className="tag">Right <FaArrowRight/></div>
      <div className="visit-superior">Visit superior - better business</div>
      <div className="para">How Just Duo Saved 10 Hrs and Reinvested into Business.
      Reinvested into Business Growth.
      </div>
      <div className="img">
        <Image src={testimonialImage}/>
      </div>
    </div>
    <div className="center">
      
    <Slider {...settings}>
        <div>
            <VideoPlayer setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
        </div>
        <div>
            <VideoPlayer setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
        </div>
        <div>
            <VideoPlayer setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    
      </div>
    <div className="right">
      <div className="facts">Facts and number</div>
      <div className="number">89 <span>%</span></div>
      <p>of customers recommended osome services</p>
    </div>
  </div>
  )
}

export default TestimonialCard