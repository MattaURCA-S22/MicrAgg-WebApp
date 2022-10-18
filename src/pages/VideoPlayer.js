import Vimeo from "@vimeo/player";
import React, { useState , useContext, useEffect, useRef } from "react";
import {Link, useNavigate} from "react-router-dom";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import "./VideoPlayer.css";
import { UserInfo } from "firebase-admin/lib/auth/user-record";
import { fillArray } from "../data/firebaseInterface";
import { useAuth } from "../context/AuthContext";
import { useResponse } from "../context/ResponseContext";
import Confirmation from "../components/Confirmation";

function VideoPlayer() {
  const [finished, setFinished] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [message, setMessage] = useState("");
  const [cssClass, setCssClass] = useState("invisible");
  const { response, checkForValidContext, setNewContext } = useResponse();
  const navigate = useNavigate();
  var masterSensitive = [];
  var masterInsensitive = [];
  var sLinesCorrect = [];
  var iLinesCorrect = [];
  const halfwayTime = 496;
  const secondsLast = useRef(-10);
  const lastLine = useRef("");
  const numCorrectS1 = useRef(0);
  const numIncorrectS1 = useRef(0);
  const numCorrectI1 = useRef(0);
  const numIncorrectI1 = useRef(0);
  const numCorrectS2 = useRef(0);
  const numIncorrectS2 = useRef(0);
  const numCorrectI2 = useRef(0);
  const numIncorrectI2 = useRef(0);
  var readIn = {
    Times: []
  }
  const { addUserData, checkForUserDoc } = useAuth();

  // console.log(userData.video);
  console.log(response);

  useEffect(() => {
    document.body.style.zoom = "100%";
    if (!checkForValidContext()) {
      let userDoc = checkForUserDoc();
      userDoc.then(value => {
        console.log(value);
        if (value != null) {
          setNewContext(value);
          if (value.consent == undefined || value.consent == false) {
            navigate("/");
          } else if (value.isDataComplete == true) {
            navigate("/ThankYouPage");
          } else if (value.isStudent != undefined && value.isStudent == true) {
            navigate("/StudentCompletePage");
          }
        } else {
          navigate("/");
        }
      })
    } else if (response.consent == false) {
      navigate("/");
    } else if(response.isStudent != undefined && response.isStudent == true) {
      navigate("/StudentCompletePage");
    } else if (response.isDataComplete == true) {
      navigate("/ThankYouPage");
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

  function handleAnimationEnd(whichClass) {
    setCssClass(whichClass);
  }

  function UserResponse(message){
    setCssClass("show");
    setMessage(message);
    var iframe = document.querySelector('iframe');
    var player = new Vimeo(iframe);
    let lockoutTime = 2;

    player.getCurrentTime().then(function(seconds){
      // You can use seconds and message here to add data to the user's response data
      console.log(secondsLast.current);
      if ((secondsLast.current + lockoutTime) <= seconds){
        if (message === "Sensitive"){
          let incorrect = true; 
          for (var i = 0; i < masterSensitive.length; i++) {
            if (seconds <= masterSensitive[i]['end'] + 5 && seconds >= masterSensitive[i]['start']) {
              if(lastLine.current != masterSensitive[i]['line']){
                if (seconds < halfwayTime){
                  numCorrectS1.current++;
                }else{
                  numCorrectS2.current++;
                }
                response.sLinesCorrect.push(masterSensitive[i]['line']);
                lastLine.current = masterSensitive[i]['line']
              }
              incorrect = false;
              break;
            } 
          } 
          if (incorrect) {
            if (seconds < halfwayTime){
              numIncorrectS1.current++;
            }else{
              numIncorrectS2.current++;
            }
          }
          response.sTimes.push(seconds);  
        }
        else if (message === "Insensitive"){
          let incorrect = true; 
          for (var i = 0; i < masterInsensitive.length; i++) {
            if (seconds <= masterInsensitive[i]['end'] + 5 && seconds >= masterInsensitive[i]['start']) {
              if(lastLine.current != masterInsensitive[i]['line']){
                if (seconds < halfwayTime){
                  numCorrectI1.current++;
                }else{
                  numCorrectI2.current++;
                }
                response.iLinesCorrect.push(masterInsensitive[i]['line']);
              }
              incorrect = false;
              break;
            }
          }
          if (incorrect) {
            if (seconds < halfwayTime){
              numIncorrectI1.current++;
            }else{
              numIncorrectI2.current++;
            }
          }
          response.iTimes.push(seconds);   
        }
        secondsLast.current = seconds;
      }
      console.log(response);
      console.log(secondsLast.current);
    });

    player.on('ended', function() {
      response.sCorrect1 = numCorrectS1.current;
      response.sIncorrect1 = numIncorrectS1.current;
      response.iCorrect1 = numCorrectI1.current;
      response.iIncorrect1 = numIncorrectI1.current;
      response.sCorrect2 = numCorrectS2.current;
      response.sIncorrect2 = numIncorrectS2.current;
      response.iCorrect2 = numCorrectI2.current;
      response.iIncorrect2 = numIncorrectI2.current;
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
          <button id="sensitive" class="VideoPlayer-button VideoPlayer-button1" onClick={() => UserResponse('Sensitive')}>Sensitive</button>
          <button id="insensitive" class="VideoPlayer-button VideoPlayer-button2" onClick={() => UserResponse('Insensitive')}>Insensitive</button>
        </div>
        <div style={{overflow: "hidden"}}>
        <div className={cssClass} onAnimationEnd={() => setCssClass("invisible")}>
          <Confirmation message={message}/>
        </div>
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
