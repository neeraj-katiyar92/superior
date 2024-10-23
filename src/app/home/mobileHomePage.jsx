import React from 'react'
import Layout from '../common/Layout'
import MhotSellingProperties from '../component/mobileComponent/hotSellingProperties'
import { FcGoogle } from "react-icons/fc";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarHalfSharp } from "react-icons/io5";
import BestUnit from '../component/channelPartner/m3m';
import CallSolution from '../component/callSolution';
import ChannelPartnerSlide from '../component/mobileComponent/channelPartnerSlide';
import LifeSuperReality from '../component/career/lifeSuperReality';
import RequestCallback from '../component/requestCallback';
import Mtestimonial from '../component/mobileComponent/testimonial';
import MobileSearchPanel from '../component/mobileComponent/searchPanelMobile';
const MobileHomePage = () => {
  return (
    <div>
        <Layout>

      <div className="m-searchPanel">
        <div className="superior-container">
          <div className="superior-row">
            <div className="slag">Gurugram</div>
            <h1 className='m-propertiesTitle'>
            The Portal Behind Thriving Real Estate Properties.
            </h1>

            <MobileSearchPanel />

          </div>
        </div>
      </div>

        <MhotSellingProperties />

        <div className='m-testimonial'>
          <div className='superior-container'>
              <div className='superior-row'>
                <div class="slag">Testimonial</div>
                <div class="title"><h3>What our clients think about Superior Services</h3></div>
                <div class="review"><div class="google-icon">
                <FcGoogle />
                 <span>4.5</span></div><div class="star-icon">   <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <IoStarHalfSharp /><span>566 reviews</span></div></div>
              </div>
              <div className='superior-row'>
                <Mtestimonial />
              </div>
          </div>
        </div>

      <section className='m-chanelPartner'>
        <div className="superior-container">
          <div className="grid-view">
            
            <div className="neeraj">
            <BestUnit/>
            </div>
            <div className="nirmal">
              <CallSolution/>
              <ChannelPartnerSlide/>
            </div>

          </div>
        </div>
      </section>


      <section className='m-career'>
        <div className="superior-container">
          <div className="superior-row">
            <h2 className='mcareer-title'>Career.</h2>
          </div>
          <div className="superior-row">
            <LifeSuperReality/>
          </div>
        </div>
      </section>


      <section className='m-callback'>
        <div className="superior-container">
          <div className="callbackbg">
          <div className="superior-row">
            <h2 className='mcallback-title'>request a Callback.</h2>
          </div>

          <div className="superior-row">
          <RequestCallback/>
          </div>
            
          </div>

        </div>
      </section>


        </Layout>
        </div>
  )
}

export default MobileHomePage