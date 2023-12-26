import React, { useState } from "react";
import arrow from '../../assets/arrow_back_ios-24px 2.png'
import '../../utils/style/collapse.scss'


const Collapsible =(props)=>{

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    

    return(
        <div>
        <div className="section-header">
        <h2 className='section-titie'>{props.label}</h2>
        <button className="toggle-button" onClick={toggle}><img src={arrow} alt="fléche" /></button>
        </div>
        {open &&
        <div className="section-content">{props.children}</div>
        }
        </div>
    )
}
export default Collapsible