import './style.scss';
const MobileSearchPanel = () => {
    return(
        <div className="realEstateProperties">
            
            <ul className='by-category'>
                <li><span>By</span> <br />Location</li>
                <li><span>By</span> <br />Builder</li>
                <li><span>By</span> <br />Budget</li>
            </ul>

            <div className="builder-flat">
                <input type="text" placeholder='Search by Builder - "Flats by M3M in Gurugram"
' className='flat-search' />
            </div>
            
        </div>
    )
}

export default MobileSearchPanel;