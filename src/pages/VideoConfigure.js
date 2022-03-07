import Vimeo from "@vimeo/player";
import React from "react";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import VideoConfigureSensitive from "../components/VideoConfigureSensitive";
import VideoConfigureInsensitive from "../components/VideoConfigureInsensitive";
import "./VideoConfigure.css";

var sensitive = [
  "1.80",
  "2.74",
  "5.86"
];

var Insensitive = [
  "2.45",
  "6.34",
  "12.13"
];

function VideoConfigure() {
  function UserResponse(message){
    var iframe = document.querySelector('iframe');
    var player = new Vimeo(iframe);

    player.getCurrentTime().then(function(seconds){
      if (message === "Sensitive"){
        sensitive.push(seconds.toString());
        console.log(sensitive);
      }
      console.log(seconds)
    });

    console.log(message);
  }
  

  return (
    <StandardPage>
      <div className="overlay">
          <div className="VideoConfigure-contentL">
                <h5><u>Sensitive Times</u></h5>
                <VideoConfigureSensitive timeS={sensitive}/>
                <hr></hr>
                <h5><u>Insensitive Times</u></h5>
                <VideoConfigureInsensitive timeIS = {Insensitive}/>
          </div>
      </div>
      <div className="VideoConfigure-content">
        <VideoRetrieval videoPlay="1" />
        <div className="VideoPlayer-controls">
          <button class="VideoPlayer-button VideoPlayer-button1" onClick={() => UserResponse('Sensitive')}>Sensitive</button>
          <button class="VideoPlayer-button VideoPlayer-button2" onClick={() => UserResponse('Insensitive')}>Insensitive</button>
        </div> 
      </div>
    </StandardPage>
  );
}

export default VideoConfigure;
