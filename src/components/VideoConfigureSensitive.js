import React from 'react';

export default function addSensitive(props) {
    var timeS = props.timeS;
    const listItems = timeS.map((time) =>
    <li key={time}>{time} <button>&times;</button><hr></hr></li>
  );
    return (
    <div>
        <ul>{listItems}</ul>
    </div>)
}