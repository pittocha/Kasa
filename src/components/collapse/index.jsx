import React, { useState } from "react";
import arrow from '../../assets/arrow_back_ios-24px 2.png'
import '../../utils/style/collapse.scss'


const Collapsible =(props)=>{

    const [open, setOpen] = useState(false);
    const [arrowDirection, setArrowDirection] = useState('up')
    const toggle = () => {
        setOpen(!open);
    };
    const toggleArrowDirection = () => {
        setArrowDirection(arrowDirection === 'up' ? 'down' : 'up');
    };

    return(
        <div className="collapsible-content">
        <div className="section-header">
        <h2 className='section-titie'>{props.label}</h2>
        <button className={`toggle-button ${arrowDirection}`} onClick={() =>{toggleArrowDirection(); toggle()}}><img src={arrow} alt="fléche" /></button>
        </div>
        
        <div className={`section-content ${open ? 'open' : ''}`}>{props.children}</div>
        </div>
    )
}
export default Collapsible