"use client"
import { useState } from 'react'
import './style.scss'
import CustomSelect from '../customSelect'
const Filter = () => {
    const [activeSelect, setActiveSelect] = useState(false)

    return (
        <div className="filter-box">
            <div className="bybuilder">

                <div className='byname'>By</div>
                <div className='builderName' onClick={()=>setActiveSelect(!activeSelect)}>Builder</div>
                <div className={activeSelect ?"chat-active":"chat-outer-box"}>
                </div>
            </div>

            <div className="propertytype">
                <div className="typebox">Property Type</div>
            </div>
                 <CustomSelect />


        </div>
    )
}

export default Filter