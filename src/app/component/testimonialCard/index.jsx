import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./styles.scss"
import { testimonialImage } from '../../../../public/images';
import Image from 'next/image';
const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
    <div className="left">
      <div className="tag">Right <FaArrowRight/></div>
      <div className="visit-superior">Visit superior - better business</div>
      <div className="para">How Just Duo Saved 10 Hrs and Reinvested into Business Growth.</div>
      <div className="img">
        <Image src={testimonialImage}/>
      </div>
    </div>
    <div className="center"></div>
    <div className="right"></div>
  </div>
  )
}

export default TestimonialCard