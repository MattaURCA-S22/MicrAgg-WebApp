import React from "react";
import "./VideoPlayer.css";

function VideoPlayer() {
  return (
    <div className="VideoPlayer">
      <div className="VideoPlayer-content">
        <div className="VideoPlayer-navBar"><a href="/DashboardMain">Dashboard</a></div>

        {/*   Youtube Embed
        <iframe
          className="VideoPlayer-video"
          title="Test Video"
          src="https://www.youtube.com/embed/fB8rHN4KvjQ?fs=0?playsinline=1&autoplay=1&modestbranding=1&rel=0"
        ></iframe>
        */}


        {/*   Vimeo Embed  */}
        <div>
          <iframe
            src="https://player.vimeo.com/video/670831443?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=1&player_id=0&VideoPlayer_id=58479"
            frameborder="0"
            allow="autoplay;"
            className="VideoPlayer-video"
            title="MVI_0566"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        
        <i className="VideoPlayer-hint">*Tap or Click Video to Play - Please Avoid Fullscreen</i>
      

        {/*   Local Video, this was giving me trouble for some reason, showed blank player
        <video className="VideoPlayer-video" controls>
          <source src="/public/testVids/MVI_0566.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        */}

        <div className="VideoPlayer-controls">
          <button class="VideoPlayer-button VideoPlayer-button1">Supportive</button>
          <button class="VideoPlayer-button VideoPlayer-button2">Unsupportive</button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
