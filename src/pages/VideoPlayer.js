import Vimeo from "@vimeo/player";
import React, { useState , useContext, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import "./VideoPlayer.css";
import { UserInfo } from "firebase-admin/lib/auth/user-record";
import { fillArray } from "../data/firebaseInterface";
import { useAuth } from "../context/AuthContext";
import { useResponse } from "../context/ResponseContext";

function VideoPlayer() {
  const [finished, setFinished] = useState(false);
  const [rendered, setRendered] = useState(false);
  const { response, checkForValidContext, setNewContext } = useResponse();
  const navigate = useNavigate();
  var masterSensitive = [];
  var masterInsensitive = [];
  var secondsLast = -10;
  var numCorrectS = 0;
  var numIncorrectS = 0;
  var numCorrectI = 0;
  var numIncorrectI = 0;
  var readIn = {
    Times: []
  }
  const { addUserData, checkForUserDoc } = useAuth();

  // console.log(userData.video);
  console.log(response);

  useEffect(() => {
    if(!checkForValidContext()) {
      let userDoc = checkForUserDoc();
      userDoc.then(value => {
        if(value != null) {
          setNewContext(value);
          console.log(value.isDataComplete);
          if (value.isDataComplete == true || value.consent == false) {
              navigate("/");
          }
        } else {
          navigate("/");
        }
      })
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (response.video === "A") {
        readIn = await fillArray("Sensitive");
        masterSensitive = readIn.Times;
        readIn = await fillArray("Insensitive");
        masterInsensitive = readIn.Times;
      } else {
        readIn = await fillArray("SensitiveB");
        masterSensitive = readIn.Times;
        readIn = await fillArray("InsensitiveB");
        masterInsensitive = readIn.Times;
      }
    };

    fetchData();
  }, [])

  function UserResponse(message){
    var iframe = document.querySelector('iframe');
    var player = new Vimeo(iframe);
    let lockoutTime = 2;

    player.getCurrentTime().then(function(seconds){
      // You can use seconds and message here to add data to the user's response data
      console.log(secondsLast);
      if ((secondsLast + lockoutTime) < seconds){
        if (message === "Sensitive"){ 
          for (var i = 0; i < masterSensitive.length; i++) {
            if (seconds <= masterSensitive[i] + 5 && seconds >= masterSensitive[i] - 5) {
              numCorrectS++;
              break;
            } else {
              numIncorrectS++;
              break;
            }
          } 
          response.sTimes.push(seconds);  
        }
        else if (message === "Insensitive"){
          for (var i = 0; i < masterInsensitive.length; i++) {
            if (seconds <= masterInsensitive[i] + 5 && seconds >= masterInsensitive[i] - 5) {
              numCorrectI++;
              break;
            } else {
              numIncorrectI++;
              break;
            }
          }
          response.iTimes.push(seconds);   
        }
        secondsLast = seconds;
      }
      console.log(numCorrectI);
      console.log(numCorrectS);
      console.log(numIncorrectI);
      console.log(numIncorrectS);
      console.log(response);
      console.log(secondsLast);
    });

    player.on('ended', function() {
      response.sCorrect = numCorrectS;
      response.sIncorrect = numIncorrectS;
      response.iCorrect = numCorrectI;
      response.iIncorrect = numIncorrectI;
      console.log('Finished.');
      setFinished(true);
    });

    console.log(message);
  }

  return (
    <StandardPage className="VideoPlayer-content">
      <div className="VideoPlayer-content">
        <VideoRetrieval videoPlay={response.video} />
        <i className="VideoPlayer-hint">*Tap or Click Video to Play - Please Avoid Fullscreen</i>
        <div className="VideoPlayer-controls">
          <button class="VideoPlayer-button VideoPlayer-button1" onClick={() => UserResponse('Sensitive')}>Sensitive</button>
          <button class="VideoPlayer-button VideoPlayer-button2" onClick={() => UserResponse('Insensitive')}>Insensitive</button>
        </div>
        {/* Button Only Appears on video finish*/}
        {finished && 
        <Link to="/SurveyPage">
          <button class="VideoPlayer-button VideoPlayer-button3" onClick={async () => await addUserData(response)} style={{height: 40}}>Continue</button>
        </Link>
        }
      </div>
    </StandardPage>
  );
}

export default VideoPlayer;
