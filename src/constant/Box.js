import React from "react";

const Box =({title, text, icon}) => {
    return(
        <div className="box-container">
            <div className="icon-wrapper">
                <h1 className="icon ">{icon}</h1>          
                <h1 className="box-title">{title}</h1>
            </div>
            <p className="pText">{text}</p>

        </div>
    )
    }

    export default Box;