import React from 'react';

export default function addInsensitive(props) {
    var timeIS = props.timeIS;
    const listItems = timeIS.map((time) =>
    <li key={time}>{time} <button>&times;</button><hr></hr></li>
  );
    return (
    <div>
        <ul>{listItems}</ul>
    </div>)
}