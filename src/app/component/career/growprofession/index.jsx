import './style.scss'
import {roundcircle } from '../../../../../public/images';
import Image from 'next/image';
const GrowProfession =()=>{
    return(
        <div className="growProfession">
            <h2 className='profession-title'>Grow <br />Professionally at <br />Superior Realty.</h2>
            <p className='prioritize'>At Superior Realty, we prioritize your career advancement, providing opportunities to <br />work with industry  expand your skills.<br /> us to achieve your professional goals and excel in your real estate career.</p>

            <Image src={roundcircle} className='round-circle' />
        </div>
    )
}

export default GrowProfession;