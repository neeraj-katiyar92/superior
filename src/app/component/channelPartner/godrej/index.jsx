import './style.scss'
import Image from 'next/image';
import { whitelandLogo, godrejvideo,  godrejapplince } from '../../../../../public/images';
const GodrejBuilder=()=>{
    return(
        <>
         <div className="affordable-range">
            <div className='godrej-industry'>
                <Image src={whitelandLogo} />
            </div>
            <div className='godrej-agriculture'>
            <Image src={godrejvideo} />
            </div>
        </div>
        <div className="godrej-appliance">
        <Image src={ godrejapplince} />
        </div>
        </>
       
    )
}

export default GodrejBuilder