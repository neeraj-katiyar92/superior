import './style.scss'
import { FaArrowRight } from "react-icons/fa";
const RequestCallback =()=>{
    return(
        <div className='form-container'>
            <div className="form">
                <input type="text" name="name" required autocomplete="off" />
                <label for="name" className="label-name">
                <span className="content-name">Your Name</span>
                </label>
            </div> 
            <div className="form">
                <input type="Number" name="name" required autocomplete="off" />
                <label for="name" className="label-name">
                <span className="content-name">Phone</span>
                </label>
            </div>

            <div class="custom-checkbox">
                <input type="checkbox" id="html" />
                <label for="html">i accept the tems of processing personal data</label>
            </div>

            <button className='submit-footer'>
            <FaArrowRight />
            </button>

        </div>
    )
}

export default RequestCallback;