"use client"
import { useState } from 'react'
import './style.scss'
const Filter = () => {
    const [activeSelect, setActiveSelect] = useState(false)

    return (
        <div className="filter-box">
            <div className="select">

            <button onClick={()=>setActiveSelect(!activeSelect)}>Click</button>
            <div class={activeSelect ?"chat-active":"chat-outer-box "}>
                </div>
            </div>
        </div>
    )
}

export default Filter