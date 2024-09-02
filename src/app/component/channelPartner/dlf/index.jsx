import { dlfproperty } from '../../../../../public/images';
import './style.scss'
import Image from 'next/image';

const DlfBuidler =()=>{
    return(
        <div className='dlfproperty'>
            <div className='dlf-channelpartner'>
             <Image src={dlfproperty} />
            </div>
        </div>
    )
}

export default DlfBuidler