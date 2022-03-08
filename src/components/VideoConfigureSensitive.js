import React, {useState} from 'react';
import Vimeo from "@vimeo/player";
import './VideoConfigure.css';


export default function AddSensitive(props) {
    var sensitive = [
        '3.21',
        '3.31',
        '12.2'
    ];
    const [timeArr, setValue] = useState(sensitive);

    function RemoveItems(id) {
      console.log(id);
      const newList = timeArr.filter((item) => item !== id);
      console.log(newList);
      
      setValue(newList);
    }

    function UserResponse(message){
        var iframe = document.querySelector('iframe');
        var player = new Vimeo(iframe);
    
        player.getCurrentTime().then(function(seconds){
          if (message === "Sensitive"){
            //sensitive.push(seconds.toString());
            //setValue(...timeArr, sensitive.push(seconds.toString()));
            const nextList = timeArr.concat(seconds.toString());
            console.log(nextList);
            setValue(nextList);
            //console.log(sensitive);
          }
          console.log(sensitive);
          console.log(seconds);
        });
    
        console.log(message);
      }


   
    //var newTime = props.newTime;
    var timeS = props.timeS;
   const listItems = timeArr.map((time) => <li key={time} className = 'configureList' >{time} <button className="addButton" onClick={() => RemoveItems(time)}><b>&times;</b></button><hr className="configureHR"></hr></li>)
    return (
    <div>
        <button className="configureButton configureButton-1" onClick={() => UserResponse('Sensitive')}>Add Sensitive</button>
        <ul className='configureList'>{listItems}</ul>
    </div>)
}
