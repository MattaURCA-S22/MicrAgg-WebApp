import Vimeo from "@vimeo/player";
import React from "react";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import "./VideoConfigure.css";

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
    document.getElementsByClassName("overlay").style.left = "15vw";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementsByClassName("overlay").style.left = "0vw";
  }

  return (
    <StandardPage>
      <span onClick={() => openNav()}>open</span>
      <div className="overlay">
          <a href={"javascript:void(0)"} className="closebtn" onClick={() => closeNav()}>&times;</a>
          <div className="VideoConfigure-contentL">
                <h4>Testing</h4>
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
