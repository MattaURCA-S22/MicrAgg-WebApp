import React, {useState} from 'react';
import Vimeo from "@vimeo/player";
import './VideoConfigureComponent.css';
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function AddInsensitive(props) {
  var readIn = {
    Times: []
  }
  var Insensitive = [
];

const [timeArr, setValue] = useState(['3.21', '3.31', '12.2']);

async function FillArray() {
  const docRef = doc(db, "Master-times", "Insensitive");
  const docSnap = await getDoc(docRef);
  readIn.Times = docSnap.data();
  console.log(readIn.Times);
  Insensitive = readIn.Times;
}



function RemoveItems(id) {
  console.log(id);
  const newList = timeArr.filter((item) => item !== id);
  console.log(newList);
  
  setValue(newList);
  WriteToDb();
}

function UserResponse(message){
    var iframe = document.querySelector('iframe');
    var player = new Vimeo(iframe);

    player.getCurrentTime().then(function(seconds){
      if (message === "Insensitive"){
        //sensitive.push(seconds.toString());
        //setValue(...timeArr, sensitive.push(seconds.toString()));
        const nextList = timeArr.concat(seconds.toString());
        console.log(nextList);
        setValue(nextList);
        WriteToDb();
        //setValue([...timeArr, seconds.toString()]);
        //console.log(sensitive);
      }
      console.log(Insensitive);
      console.log(seconds);
    });

    console.log(message);
  }

  function WriteToDb() {
    const res = setDoc(doc(db, "Master-times", "Insensitive"), {
      Times: timeArr
    });
  }

//var newTime = props.newTime;
var timeIS = props.timeIS;
FillArray();
const listItems = timeArr.map((time) => <div><li className = 'configureList' key = {time}>{time} <button className="removeButton" onClick={() => RemoveItems(time)}><b>&times;</b></button></li><li><hr></hr></li></div>);
return (
<div>
    <button className="configureButton-2 configureButton" onClick={() => UserResponse('Insensitive')}>Add Insensitive</button>
    <div className='overlayTimes1'>
    <ul className='configureList'>{listItems}</ul>
    </div>
</div>)
}