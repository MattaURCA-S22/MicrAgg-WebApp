import React, {useState, useEffect} from 'react';
import Vimeo from "@vimeo/player";
import './VideoConfigureComponent.css';
import { fillArray } from "../data/firebaseInterface";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";


export default function AddSensitive(props) {

  var sOrI = props.which;
  var documentData;
  var buttonText = "";
  var buttonClass1;
  var buttonClass2;

  if (sOrI === "s") {
    documentData = "Sensitive";
    buttonText = "Add Sensitive";
    buttonClass1 = "addButton";
    buttonClass2 = "configureButton-1";
  } else if(sOrI == "i") {
    documentData = "Insensitive";
    buttonText = "Add Insensitive";
    buttonClass1 = "removeButton";
    buttonClass2 = "configureButton-2";
  }

  var readIn = {
    Times: []
  }

    var player;

    const [timeArr, setValue] = useState([]);

    // async function FillArray() {
    //   if (arrayFilled == 1) {
    //   const docRef = doc(db, "Master-times", "Sensitive");
    //   const docSnap = await getDoc(docRef);
    //   readIn = docSnap.data();
    //   arrayFilled = 0;
    //   setValue(readIn.Times);
    //   console.log("marker");
    //   console.log(readIn.Times);
    //   }
    // }

    // useEffect(() => {
    //   var iframe = document.querySelector('iframe');
    //   player = new Vimeo(iframe);
    // });

    useEffect(() => {
      const fetchData = async () => {
        readIn = await fillArray(documentData);
        console.log(readIn.Times);
        setValue(readIn.Times);
      };
  
      fetchData();
    }, []);

    function RemoveItems(id) {
      const newList = timeArr.filter((item) => item !== id);
      console.log(newList);
      WriteToDb(newList);
      setValue(newList);
    }

    function UserResponse(message){
      var iframe = document.querySelector('iframe');
      player = new Vimeo(iframe);
        // player.getCurrentTime().then(function(seconds){
        //   if (message === "Sensitive"){
        //     sensitive.concat(seconds.toString());
        //     const nextList = timeArr.concat(seconds.toString());
        //     console.log(nextList);
        //     WriteToDb(nextList);
        //     setValue(nextList);
        //   }
        // });
      }

      function WriteToDb(timesList) {
        const res = setDoc(doc(db, "Master-times", {documentData}), {
          Times: timesList
        });
      }

    const listItems = timeArr.map((time) => <li key={time} className = 'configureList' >{time} <button className={buttonClass1} onClick={() => RemoveItems(time)}><b>&times;</b></button><hr className="configureHR"></hr></li>)
    return (
    <div>
        <button className="configureButton configureButton-1" onClick={() => UserResponse('Sensitive')}>Add Sensitive</button>
        <div className='overlayTimes1'>
        <ul className='configureList'>{listItems}</ul>
        </div>
    </div>)
}
