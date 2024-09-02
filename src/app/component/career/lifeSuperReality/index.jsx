import './style.scss'
import { careergirl, roundcircle } from '../../../../../public/images';
import Image from 'next/image';
const LifeSuperReality =()=>{
    return(
        <div className="LifeSuperReality">
            <h2 className='superiorReality-title'>Life at <br />Superior <br />Reality</h2>

            <div className='workCulture'>
                <div className='career-desp'>
                    <p>
                    Life at Superior Realty means collaborating with talented professionals in a vibrant work culture. We offer continuous learning opportunities and support your career growth. Join us for a fulfilling and dynamic real estate career.
                    </p>
                </div>
                <div className='girl'>
                <Image src={careergirl} />
                </div>
            </div>
            <Image src={roundcircle} className='round-circle' />
        </div>
    )
}

export default LifeSuperReality;