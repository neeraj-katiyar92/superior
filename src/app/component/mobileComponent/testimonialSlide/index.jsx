
import React from "react";
import Slider from "react-slick";
import './style.scss';
const TestimonialSlide =()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
    return(
        <>
           {/* <div class="tag">
            Right 
           </div>
           <div class="visit-superior">Visit superior - better business</div>
           <div class="para">How Just Duo Saved 10 Hrs and Reinvested into Business. Reinvested into Business Growth.</div> */}

<div className="slide-partner2">
            
            <Slider {...settings} >
                <div className="slidePanel">
                  <div className="better-read">
                    READ
                  </div>
                  <div className="better-business">
                    Visit Superior - Better Business
                  </div>
                  <div className="business-growth">
                  How Just Duo Saved 10 Hrs and Reinvested into Business Growth.
                  </div>
                </div>
                <div className="slidePanel">
                  <div className="better-read">
                    READ
                  </div>
                  <div className="better-business">
                    Visit Superior - Better Business
                  </div>
                  <div className="business-growth">
                  How Just Duo Saved 10 Hrs and Reinvested into Business Growth.
                  </div>
                </div>
                <div className="slidePanel">
                  <div className="better-read">
                    READ
                  </div>
                  <div className="better-business">
                    Visit Superior - Better Business
                  </div>
                  <div className="business-growth">
                  How Just Duo Saved 10 Hrs and Reinvested into Business Growth.
                  </div>
                </div>
                <div className="slidePanel">
                  <div className="better-read">
                    READ
                  </div>
                  <div className="better-business">
                    Visit Superior - Better Business
                  </div>
                  <div className="business-growth">
                  How Just Duo Saved 10 Hrs and Reinvested into Business Growth.
                  </div>
                </div>
                <div className="slidePanel">
                  <div className="better-read">
                    READ
                  </div>
                  <div className="better-business">
                    Visit Superior - Better Business
                  </div>
                  <div className="business-growth">
                  How Just Duo Saved 10 Hrs and Reinvested into Business Growth.
                  </div>
                </div>
              </Slider>
            
        </div>
           
        </>
    )
}

export default TestimonialSlide;