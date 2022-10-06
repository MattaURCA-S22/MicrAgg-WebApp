import React, {useState} from "react";
import "./Confirmation.css";

export default function Confirmation(props) {
    const [whichColor, setWhichColor] = useState();

    // if (props.message == "sensitive") {
    //     setWhichColor("confirmation-bar sensitive");
    // } else {
    //     setWhichColor("confirmation-bar insensitive");
    // }
    return (
        <div className="confirmation-bar sensitive">
            <p>{props.message} time logged.</p>
        </div>
    )
}