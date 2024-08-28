import React from 'react'
import './style.scss';
import footerLogo from '../../../../public/images/footer-logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='callus'>
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 footer-realty">
                  <Link href=""><Image src={footerLogo} alt="" /></Link>
                    <div className='number'>+91 9717079052</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer