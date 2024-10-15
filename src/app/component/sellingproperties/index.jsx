import Image from 'next/image';
import { hotsellingcircle } from '../../../../public/images';
import './style.scss';

const Sellingproperties =()=>{
    return(
        <div className='harrison'>
            <Image src={hotsellingcircle} />
        </div>
    )
}

export default Sellingproperties