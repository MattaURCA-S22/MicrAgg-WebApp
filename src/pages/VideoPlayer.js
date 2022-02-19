import Vimeo from "@vimeo/player";
import React from "react";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import "./VideoPlayer.css";

function VideoPlayer() {
  function UserResponse(message){
    var iframe = document.querySelector('iframe');
    var player = new Vimeo(iframe);

    player.getCurrentTime().then(function(seconds){
      console.log(seconds)
    });

    console.log(message);
  }

  return (
    <StandardPage>
      <div className="VideoPlayer-content">

        {/*   Youtube Embed
        <iframe
          className="VideoPlayer-video"
          title="Test Video"
          src="https://www.youtube.com/embed/fB8rHN4KvjQ?fs=0?playsinline=1&autoplay=1&modestbranding=1&rel=0"
        ></iframe>
        */}


        {/*   Vimeo Embed  */}
        {/* <div>
          <iframe
            src="https://player.vimeo.com/video/674740238?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=1&player_id=0&VideoPlayer_id=58479"
            frameborder="0"
            allow="autoplay;"
            className="VideoPlayer-video"
            title="MVI_0566"
          ></iframe>
        </div> */}
        <VideoRetrieval videoPlay="1" />
        
        <i className="VideoPlayer-hint">*Tap or Click Video to Play - Please Avoid Fullscreen</i>
      

        {/*   Local Video, this was giving me trouble for some reason, showed blank player
        <video className="VideoPlayer-video" controls>
          <source src="/public/testVids/MVI_0566.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        */}

        <div className="VideoPlayer-controls">
          <button class="VideoPlayer-button VideoPlayer-button1" onClick={() => UserResponse('Supportive')}>Supportive</button>
          <button class="VideoPlayer-button VideoPlayer-button2" onClick={() => UserResponse('Unsupportive')}>Unsupportive</button>
        </div>
      </div>
    </StandardPage>
  );
}

export default VideoPlayer;