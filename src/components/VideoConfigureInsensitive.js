import React, {useState} from 'react';
import Vimeo from "@vimeo/player";
import './VideoConfigure.css';

export default function AddInsensitive(props) {

var Insensitive = [
    '3.21',
    '3.31',
    '12.2'
];

const [timeArr, setValue] = useState(['3.21', '3.31', '12.2']);

function UserResponse(message){
    var iframe = document.querySelector('iframe');
    var player = new Vimeo(iframe);

    player.getCurrentTime().then(function(seconds){
      if (message === "Insensitive"){
        //sensitive.push(seconds.toString());
        //setValue(...timeArr, sensitive.push(seconds.toString()));
        setValue([...timeArr, seconds.toString()]);
        //console.log(sensitive);
      }
      console.log(Insensitive);
      console.log(seconds);
    });

    console.log(message);
  }



//var newTime = props.newTime;
var timeIS = props.timeIS;
const listItems = timeArr.map((time) => <div><li className = 'configureList' key = {time.toString()}>{time} &times;</li><li><hr></hr></li></div>)
return (
<div>
    <button className="configureButton-2 configureButton" onClick={() => UserResponse('Insensitive')}>Add Insensitive</button>
    <ul className='configureList'>{listItems}</ul>
</div>)
}