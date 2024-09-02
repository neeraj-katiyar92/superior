import { m3mproperty } from '../../../../../public/images';
import './style.scss'
import Image from 'next/image';

const BestUnit=()=>{
    return(
        <div className='bestunit'>
            <h2 className='bestunit-title'>
            Trusted <br /><span className='bluetxt'>Channel Partner</span> <span>of <br />Reputed Builders in <br />Gurugram</span>
            </h2>

            <div className='m3m-channelpartner'>
                <Image src={m3mproperty} />
            </div>

        </div>
    )
}

export default BestUnit;