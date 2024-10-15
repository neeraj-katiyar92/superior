import './style.scss'
import Image from 'next/image';
import { spokeperson } from '../../../../public/images';
import { IoMdCall } from "react-icons/io";
const CallSolution =()=>{
    return(
        <div className='sale-executive'>
            
            <div className='spokeperson'>
            <Image src={spokeperson} />
            <span className='personName'>Siddharth Arora <br /> <span>Sales Executive</span></span>
            <span className='solutionfor'>
            Customized <br />Solutions for you.
            </span>
            </div>

            <div className='callblue'>
                <IoMdCall />
            </div>
            

        </div>
    )
}

export default CallSolution;

