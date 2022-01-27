import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-navBar"></div>

        {/*   Youtube Embed
        <iframe
          className="App-video"
          title="Test Video"
          src="https://www.youtube.com/embed/fB8rHN4KvjQ?fs=0?playsinline=1&autoplay=1&modestbranding=1&rel=0"
        ></iframe>
        */}


        {/*   Vimeo Embed  */}
        <div>
          <iframe
            src="https://player.vimeo.com/video/670831443?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=1&player_id=0&app_id=58479"
            frameborder="0"
            allow="autoplay;"
            className="App-video"
            title="MVI_0566"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        


        {/*   Local Video, this was giving me trouble for some reason, showed blank player
        <video className="App-video" controls>
          <source src="/public/testVids/MVI_0566.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        */}

        <div className="App-controls"></div>
      </div>
    </div>
  );
}

export default App;
