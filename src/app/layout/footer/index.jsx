import React from 'react'
import './style.scss';
import footerLogo from '../../../../public/images/footer-logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <section className='callus'>
        <div className='superior-container'>
            <div className="superior-row">
                <div className="superior-col-lg-12 footer-realty">
                  <Link href=""><Image src={footerLogo} alt="" /></Link>
                    <div className='number'>+91 9717079052</div>
                </div>
            </div>
        </div>
      </section>

      <section className='reach-us'>
          <div className="superior-container">
              <div className='superior-row'>
                <div className="superior-col-lg-12">
                  <p className='address'>
                    2nd Floor, EMERALD PLAZA, 201-202, <br /> Course Ext Rd, Sector 65, Gurugram, Haryana 122102<br />
                    rerA no. <br /> 
                    МОСКВА
                  </p>
                </div>
              </div>
          </div>
      </section>

      <section className='copyright'>
        <div className="superior-container">
          <div className='superior-row'>
          <div className="superior-col-lg-12">
              <ul>
                <li>2024 @ superior realty</li>
                <li>Write to us at <br /> connect@superiorrealty.com</li>
                <li>Job/Career Related <br /> careers@superiorrealty.com</li>
                <li>terms of use  |  privacy policy</li>
              </ul>
          </div>
          </div>    
        </div>
      </section>
    
    </>    
  )
}

export default Footer