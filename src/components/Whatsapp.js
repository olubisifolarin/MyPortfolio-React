import React from "react";
import {IoLogoWhatsapp} from 'react-icons/io';


const Whatsapp = ()  => {
    const whatsappIcon = 'https://api.whatsapp.com/send?phone=+2348021317321';
    return(
        <div className="">
            <a href={whatsappIcon} target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className="whatsapp" />
            </a>
        </div>
    )

}

export default Whatsapp;