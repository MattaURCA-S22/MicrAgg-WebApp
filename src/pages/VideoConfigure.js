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

var video = "1";

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

  function ChangeVideo(videoNum) {
    video = videoNum;
    console.log(video);
  }
  

  return (
    <StandardPage>
      <div className="overlay">
          <div className="VideoConfigure-contentL">
                <h5 className="title"><u>Sensitive Times</u></h5>
              <div className="overlayTimes1">
                <VideoConfigureSensitive timeS={sensitive}/>
              </div>
                <hr></hr>
                <h5><u>Insensitive Times</u></h5>
              <div className="overlayTimes2">
                <VideoConfigureInsensitive timeIS = {Insensitive}/>
              </div>
          </div>
      </div>
      <div className="VideoConfigure-content">
        {/* <div className="dropdown">
          <button>Videos</button>
          <div className="dropdown-content">
            <button onClick={() => ChangeVideo("1")}>Control video</button>
            <button onClick={() => ChangeVideo("2")}>Experimental Video</button>
          </div>
        </div> */}
        <VideoRetrieval videoPlay={video} showChange="1"/>
      </div>
    </StandardPage>
  );
}

export default VideoConfigure;
