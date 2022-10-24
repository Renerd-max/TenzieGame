import React from "react";
import ReactDOM from 'react-dom/client'

export default function Dies(props) {

   const customStyle = {backgroundColor: props.isHeld? "green": "white"}

   const dotOne = <div id="dotOne" className="dot"></div>

   const dotTwo = <div id="dotTwo">
    <div className="dot"></div>
    <div className="dot"></div>
    </div>

const dotThree = <div id="dotThree">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    </div>

const dotFour = <div id="dotFour">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    </div>

const dotFive = <div id="dotFive">
    <div id="fiveUp">
    <div className="dot"></div>
    <div className="dot"></div>
    </div>

    <div id="fiveMiddle">
    <div className="dot"></div>
    </div>

    <div id="fiveBottom">
    <div className="dot"></div>
    <div className="dot"></div>
    </div>
    </div>

const dotSix = <div id="dotSix">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    </div>

   function valueFunct(dot) {
    if (dot === 1) {
        return dot = dotOne;
    } else if(dot === 2) {
        return dot = dotTwo;
    } else if(dot === 3) {
        return dot = dotThree;
    } else if(dot === 4) {
        return dot = dotFour;
    } else if(dot === 5) {
        return dot = dotFive;
    } else if(dot === 6) {
        return dot = dotSix
    }
   }

    return (
        <div className="die" style={customStyle} onClick={props.hold} > {valueFunct(props.value)} </div>
    )
}