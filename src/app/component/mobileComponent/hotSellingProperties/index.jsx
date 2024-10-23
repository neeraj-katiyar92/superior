import React from "react";
import Slider from "react-slick";
import './style.scss'
import Card from "../../card";

const MhotSellingProperties=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
           
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return(
        <div className="m-hotSellingProperty">
            <span>GURUGRAM</span>
            <h2>Hot Selling Properties</h2>
           <div className="superior-container">
            

                <Slider {...settings}>
                    <div>          
                    <Card/>       
                        
                    </div>
                    <div>
                        <Card/>  
                    </div>
                    <div>
                        <Card/>  
                    </div>
                    <div>
                        <Card/>  
                    </div>
                    <div>
                        <Card/>  
                    </div>
                    <div>
                        <Card/>  
                    </div>
                </Slider>
    </div>

        </div>
    )
}

export default MhotSellingProperties;