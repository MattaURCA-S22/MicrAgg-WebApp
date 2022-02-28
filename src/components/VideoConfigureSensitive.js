import React, {useState} from 'react';
import Vimeo from "@vimeo/player";
import './VideoConfigure.css';


export default function AddSensitive(props) {
    var sensitive = [
        '3.21',
        '3.31',
        '12.2'
    ];
    const [timeArr, setValue] = useState(['3.21', '3.31', '12.2']);

    function UserResponse(message){
        var iframe = document.querySelector('iframe');
        var player = new Vimeo(iframe);
    
        player.getCurrentTime().then(function(seconds){
          if (message === "Sensitive"){
            //sensitive.push(seconds.toString());
            //setValue(...timeArr, sensitive.push(seconds.toString()));
            setValue([...timeArr, seconds.toString()]);
            //console.log(sensitive);
          }
          console.log(sensitive);
          console.log(seconds);
        });
    
        console.log(message);
      }


   
    //var newTime = props.newTime;
    var timeS = props.timeS;
   const listItems = timeArr.map((time) => <li className = 'configureList' key = {time.toString()}>{time} &times;<hr></hr></li>)
    return (
    <div>
        <button className="configureButton" onClick={() => UserResponse('Sensitive')}>Add Sensitive</button>
        <ul className='configureList'>{listItems}</ul>
    </div>)
}