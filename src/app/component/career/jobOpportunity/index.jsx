import './style.scss'
import { careergirl } from '../../../../../public/images';
import Image from 'next/image';
import { IoDocumentTextOutline } from "react-icons/io5";
const JobOpportunity =()=>{
    return(
        <div className="jobopportunity">
            <h2 className='job-oppurtitle'>Job <br />Opportunities.</h2>
            <ul className='job-list'>
                <li><a href="#"><IoDocumentTextOutline /> Sales Executive (3-4 Exp)</a></li>
                <li><a href="#"><IoDocumentTextOutline /> Manager (7-8 Exp)</a></li>
                <li><a href="#"><IoDocumentTextOutline /> Sales Executive</a></li>
                <li><a href="#"><IoDocumentTextOutline /> Sales Pers.</a></li>
                <li><a href="#"><IoDocumentTextOutline /> Sales Pers.</a></li>
                <li><a href="#"><IoDocumentTextOutline /> Sales Executive (3-4 Exp)</a></li>
                <li><a href="#"><IoDocumentTextOutline /> Manager (7-8 Exp)</a></li>
            </ul>
        </div>
    )
}

export default JobOpportunity;