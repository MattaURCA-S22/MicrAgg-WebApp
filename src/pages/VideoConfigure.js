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
      console.log(seconds)
    });

    console.log(message);
  }

  function openNav() {
    var overlay = document.getElementsByClassName("overlay");
    overlay.style.visibility = "visible";
    console.log(overlay);
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementsByClassName("overlay").style.visibility = "hidden";
  }

  return (
    <StandardPage>
      <button onClick={() => openNav()}>Open</button>
      <div className="overlay">
          <a href={"javascript:void(0)"} className="closebtn" onClick={() => closeNav()}>&times;</a>
          <div className="VideoConfigure-contentL">
                <h5>Sensitive Times</h5>
                <hr></hr>
                <VideoConfigureSensitive timeS={sensitive}/>
                <h5>Insensitive Times</h5>
                <hr></hr>
                <VideoConfigureInsensitive timeIS={Insensitive}/>
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
