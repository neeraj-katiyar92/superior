import TestimonialSlide from '../testimonialSlide';
import './style.scss';
const Mtestimonial=()=>{
    return(
        <div className="m-factAndNumbers">
            
            <div className='left'>
                <TestimonialSlide/>
            </div>
            
            <div className="right">
                <div className="facts">Facts and number</div>
                <div className="number">89 <span>%</span></div>
                <p>of customers recommended osome services</p>
            </div>

        </div>
    )
}

export default Mtestimonial;