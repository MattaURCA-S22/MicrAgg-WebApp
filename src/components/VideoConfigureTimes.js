import React, {useState, useEffect, useContext} from 'react';
import Vimeo from "@vimeo/player";
import './VideoConfigureComponent.css';
import { fillArray } from "../data/firebaseInterface";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { GetVideoList } from "./VideoRetrieval";
import videoContext from "../context/videoContext";


export default function AddSensitive(props) {

  const videoLoad = useContext(videoContext);
  var video = GetVideoList();
  var whichVideo = props.whichVideo;
  console.log(whichVideo);

  var sOrI = props.whichType;
  var documentData;
  var buttonText = "";
  var buttonClass1;
  var buttonClass2;

  if (whichVideo == null) {
    whichVideo = "A";
  }

  if (sOrI === "s" && whichVideo === "A") {
    documentData = "Sensitive";
    buttonText = "Add Sensitive";
    buttonClass1 = "addButton";
    buttonClass2 = "configureButton configureButton-1";
  } else if(sOrI === "i" && whichVideo === "A") {
    documentData = "Insensitive";
    buttonText = "Add Insensitive";
    buttonClass1 = "removeButton";
    buttonClass2 = "configureButton configureButton-2";
  } else if (sOrI === "s" && whichVideo === "B") {
    documentData = "SensitiveB";
    buttonText = "Add Sensitive";
    buttonClass1 = "addButton";
    buttonClass2 = "configureButton configureButton-1";
  } else if(sOrI == "i" && whichVideo === "B") {
    documentData = "InsensitiveB";
    buttonText = "Add Insensitive";
    buttonClass1 = "removeButton";
    buttonClass2 = "configureButton configureButton-2";
  } 

  var readIn = {
    Times: []
  }

    var player;

    const [timeArr, setValue] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        readIn = await fillArray(documentData);
        console.log(readIn.Times);
        setValue(readIn.Times);
      };
      
      console.log("Fetching Data")
      fetchData();
    }, [whichVideo]);

    function RemoveItems(id) {
      const newList = timeArr.filter((item) => item !== id);
      WriteToDb(newList);
      setValue(newList);
    }

    function UserResponse(message){
      var iframe = document.querySelector('iframe');
      player = new Vimeo(iframe);
        player.getCurrentTime().then(function(seconds){
          if (message === "Sensitive"){
            const nextList = timeArr.concat(seconds);
            WriteToDb(nextList);
            setValue(nextList);
          }
        });
      }

      function WriteToDb(timesList) {
        const res = setDoc(doc(db, "Master-times", documentData), {
          Times: timesList
        });
      }

    const listItems = timeArr.map((time) => <li key={time} className = 'configureList' >{time} <button className={buttonClass1} onClick={() => RemoveItems(time)}><b>&times;</b></button><hr className="configureHR"></hr></li>)
    return (
    <div>
        <button className={buttonClass2} onClick={() => UserResponse('Sensitive')}>Add Sensitive</button>
        <div className='overlayTimes1'>
        <ul className='configureList'>{listItems}</ul>
        </div>
    </div>)
}
