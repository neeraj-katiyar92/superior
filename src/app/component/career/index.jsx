import './style.scss'
import LifeSuperReality from './lifeSuperReality';
import GrowProfession from './growprofession';
import JobOpportunity from './jobOpportunity';
const Career =()=>{
    return(
        <div className='career-job'>
            <h2 className='career-title'>Career.</h2>
            <LifeSuperReality />
            <GrowProfession />
            <JobOpportunity />
        </div>
    )
}

export default Career;