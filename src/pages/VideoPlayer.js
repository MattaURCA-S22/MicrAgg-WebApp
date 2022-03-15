import Vimeo from "@vimeo/player";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import "./VideoPlayer.css";

function VideoPlayer() {
  const [finished, setFinished] = useState(false);

  function UserResponse(message){
    var iframe = document.querySelector('iframe');
    var player = new Vimeo(iframe);

    player.getCurrentTime().then(function(seconds){
      // You can use seconds and message here to add data to the user's response data
      console.log(seconds)
    });

    player.on('ended', function() {
      console.log('Finished.');
      setFinished(true);
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
          <button class="VideoPlayer-button VideoPlayer-button1" onClick={() => UserResponse('Sensitive')}>Sensitive</button>
          <button class="VideoPlayer-button VideoPlayer-button2" onClick={() => UserResponse('Insensitive')}>Insensitive</button>
        </div>
        {/* Button Only Appears on video finish*/}
        {finished && 
        <Link to="/SurveyPage">
          <button class="VideoPlayer-button" style={{height: 40}}>Continue</button>
        </Link>
        }
      </div>
    </StandardPage>
  );
}

export default VideoPlayer;
