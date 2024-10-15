"use client"
import { dlfWhite } from '../../../../public/images';
import './style.scss';
import Image from 'next/image';
const Location=()=>{
    return(
        <div className='map-area'>
            <div className="tooltip">
                <div className="tooltiptext">
                    <div className='circle-image'></div>
                    <Image src={dlfWhite} />
                    <h2>
                    DLF Privana South <br />Sector 77 Gurgaon
                    Housing Complex
                    </h2>
                </div>
            </div>

            <div className="m3m">
                <div className="tooltiptext">
                    <div className='circle-image'></div>
                    <Image src={dlfWhite} />
                    <h2>
                    DLF Privana South <br />Sector 77 Gurgaon
                    Housing Complex
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default Location;