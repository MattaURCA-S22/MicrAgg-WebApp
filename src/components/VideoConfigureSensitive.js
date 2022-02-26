import React from 'react';

export default function addSensitive(props) {
    var timeS = props.timeS;
    return (
    <div>
        <li>{timeS} &times;</li>
    </div>)
}