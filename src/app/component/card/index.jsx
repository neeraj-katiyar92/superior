import "./style.scss"
import { IoCallSharp } from "react-icons/io5";
const Card = () => {
    return (
        <div className="card">           
           <div className="flip-box common-flip-style">
                {/* front image */}
                <div className="box-front common-box-style">
                    <div className="box-content-wrapper">
                        <div className="phone-icon">
                            <IoCallSharp />
                        </div>
                        
                        <div className="property-name">
                            <h2 className="property-title">
                                DLF Privana West
                            </h2>
                            <p className="property-area">Sector 76, Gurgaon</p>
                        </div>

                    </div>
                </div>
                {/* back image */}
                <div className="box-back common-box-style box-bgi-effect">
                    <div className="box-content-wrapper">
                        <div class="box-content">
                        <div className="phone-icon-black">
                            <IoCallSharp />
                        </div>
                            <h1> DLF Privana West</h1>
                            <p>Sector 76, Gurgaon</p>
                        </div>
                    </div>
                </div>

           </div>
           
        </div>
    )
}

export default Card;
