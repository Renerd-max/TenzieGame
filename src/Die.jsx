import React from "react";

export default function Dies(props) {

   const customStyle = {backgroundColor: props.isHeld? "#59E391": "white"}

    return (
        <div className="die" style={customStyle} onClick={props.hold} ><p>{props.value}</p></div>
    )
}