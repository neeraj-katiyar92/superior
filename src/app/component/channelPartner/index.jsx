import './style.scss'
import BestUnit from './m3m';
import DlfBuilder from './dlf';
import GodrejBuilder from './godrej';
const ChannelPartner =()=>{
    return(
        <div className='trusted-builder'>
            
            <div className='first'>
                <BestUnit/>
            </div>
            <div className='second'>
                <GodrejBuilder />
            </div>
            <div className='third'>
                <DlfBuilder />
            </div>
            
        </div>
    )
}

export default ChannelPartner;