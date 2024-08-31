import React from 'react';
import Layout from '../common/Layout';
import './style.scss';
import Filter from '../component/filter';
import Card from '../component/card';
import Getstarted from '../component/get-started';
import Infusehome from '../component/infusehome';
import Sellingproperties from '../component/sellingproperties';
import { logo1, logo2, logo3, logo4, logo5 } from '../../../public/images';
import { FcGoogle } from "react-icons/fc";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarHalfSharp } from "react-icons/io5";

import Image from 'next/image';
import TestimonialCard from '../component/testimonialCard';


const HomePage = () => {
  const logoImages = [logo1,logo2,logo3,logo4,logo5]
  return (
    <>

      <Layout>
        <section className="banner">
          <div className="banner-container">
            <h2 className='banner-title'>The Portal Behind Thriving <br />Real Estate Properties.</h2>
            <div className="filter">
              <Filter />
            </div>
          </div>
             
      </section>
      <section className='hot-selling'>
          <div className="title">
            Hot selling Properties in gurugram
          </div>
          <div className="superior-container">
            <div className="row">

              <ul>
                {logoImages?.map((list) => <li><Image src={list} alt={list} /></li>)
                }
              </ul>
            </div>
          </div>
        </section>

    <section className='projects'>
      <div className="superior-container">
        <div className="grid-view">    
          <Getstarted />
          <Card />
          <Card />
        </div>

        <div className="grid-view tp-30">    
          
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="grid-view tp-30">    
          
          
          <Sellingproperties />
          <Infusehome />
          <Card />
        </div>
       

      </div>
    </section>
    <section className="testimonial">
          <div className="superior-container">
            <div className="col">

              <div className="slag">Testimonial</div>
              <div className="title">
                <h3>
                  What our clients think about
                  Superior Services
                </h3>
              </div>
              <div className="review">
                <div className="google-icon">

                  <FcGoogle /> <span>
                    4.5
                  </span>
                </div>
                <div className="star-icon">

                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <IoStarHalfSharp />
                  <span>566 reviews</span>
                </div>
              </div>
           <TestimonialCard/>
            </div>
          </div>
        </section>

    </Layout>
    
</>
  )
}

export default HomePage


