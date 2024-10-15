import { dlfproperty, dlfLogo  } from '../../../../../public/images';
import './style.scss'
import Image from 'next/image';

const DlfBuidler =()=>{
    return(
        <div className='dlfproperty'>
            <div className='dlf-channelpartner'>
                <Image src={dlfproperty} />
                    <div className='brand-logo'>
                    <Image src={dlfLogo} />
                    </div>
            </div>
        </div>
    )
}

export default DlfBuidler