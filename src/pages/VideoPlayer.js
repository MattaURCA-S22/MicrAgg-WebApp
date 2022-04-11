import Vimeo from "@vimeo/player";
import ResponseContext from "../context/ResponseContext";
import React, { useState , useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import "./VideoPlayer.css";
import { UserInfo } from "firebase-admin/lib/auth/user-record";
import { fillArray } from "../data/firebaseInterface";
import { useAuth } from "../context/AuthContext";

function VideoPlayer() {
  const [finished, setFinished] = useState(false);
  const userData = useContext(ResponseContext);
  var masterSensitive = [];
  var masterInsensitive = [];
  var secondsLast = -10;
  var numCorrectS;
  var numIncorrectS;
  var numCorrectI;
  var numIncorrectI;
  const { addUserData } = useAuth();

  console.log(userData.video)

  useEffect(() => {
    const fetchData = async () => {
      console.log(userData.video);
      if (userData.video == "A") {
        masterSensitive = await fillArray("Sensitive");
        masterInsensitive = await fillArray("Insensitive");
      } else {
        masterSensitive = await fillArray("SensitiveB");
        masterInsensitive = await fillArray("InsensitiveB");
      }
    };

    fetchData();
  }, [])

  console.log(masterSensitive);
  console.log(masterInsensitive);

  function UserResponse(message){
    var iframe = document.querySelector('iframe');
    var player = new Vimeo(iframe);
    let lockoutTime = 2;

    player.getCurrentTime().then(function(seconds){
      // You can use seconds and message here to add data to the user's response data
      console.log(secondsLast);
      if ((secondsLast + lockoutTime) < seconds){
        if (message == "Sensitive"){ 
          masterSensitive.forEach(element => {
            if (seconds <= element + 5 && seconds >= element - 5) {
              numCorrectS++;
            } else {
              numIncorrectS++;
            }
          });
          userData.sTimes.push(seconds);  
        }
        else if (message == "Insensitive"){
          masterInsensitive.forEach(element => {
            if (seconds <= element + 5 && seconds >= element - 5) {
              numCorrectI++;
            } else {
              numIncorrectI++;
            }
          });
          userData.iTimes.push(seconds);   
        }
        secondsLast = seconds;
      }
      console.log(userData);
      console.log(secondsLast);
    });

    player.on('ended', function() {
      console.log('Finished.');
      setFinished(true);
    });

    console.log(message);
  }

  return (
    <StandardPage className="VideoPlayer-content">
      <div className="VideoPlayer-content">
        <VideoRetrieval videoPlay={userData.video} />
        <i className="VideoPlayer-hint">*Tap or Click Video to Play - Please Avoid Fullscreen</i>
        <div className="VideoPlayer-controls">
          <button class="VideoPlayer-button VideoPlayer-button1" onClick={() => UserResponse('Sensitive')}>Sensitive</button>
          <button class="VideoPlayer-button VideoPlayer-button2" onClick={() => UserResponse('Insensitive')}>Insensitive</button>
        </div>
        {/* Button Only Appears on video finish*/}
        {finished && 
        <Link to="/SurveyPage">
          <button class="VideoPlayer-button" onClick={async () => await addUserData(userData)} style={{height: 40}}>Continue</button>
        </Link>
        }
      </div>
    </StandardPage>
  );
}

export default VideoPlayer;
