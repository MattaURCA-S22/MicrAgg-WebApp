import React, {useState} from "react";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import VideoConfigureTimes from "../components/VideoConfigureTimes";
import "./VideoConfigure.css";

function VideoConfigure() {

  const [video, setVideo] = useState("A");
  console.log(video);

  return (
    <StandardPage>
      <div className="configureBackground">
      <div className="VideoConfigure-content">
      <div className="overlay">
          <div className="VideoConfigure-contentL">
                <h5 className=""><u>Sensitive Times</u></h5>
              <div>
                <VideoConfigureTimes whichType="s" whichVideo={video}/>
              </div>
                <h5><u>Insensitive Times</u></h5>
              <div>
                <VideoConfigureTimes whichType="i" whichVideo={video}/>
              </div>
          </div>
      </div>
      <div>
        <VideoRetrieval videoPlay={video} showChange="1"/>
      </div>
      <div className="">
            <div className="overlay-2">
            <h5 className="Title">Video Name: Title</h5>
              <div>
                <div className="videoA">
                <div className="pushItems-Video">
                    <iframe
                    src="https://player.vimeo.com/video/693834980?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
                    frameBorder="0"
                    allow="autoplay;"
                    className="DashboardData-VideoQuickView"
                    title="MVI_0566"
                    ></iframe>
                </div>
                <div className="buttonShadow">
                  <button className="pushItems-Button" onClick={() => setVideo("A")}>Control</button>
                </div>
                </div>
                <br></br>
                <div className="pushItems-Video">
                    <iframe
                    src="https://player.vimeo.com/video/693835115?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
                    frameBorder="0"
                    allow="autoplay;"
                    className="DashboardData-VideoQuickView"
                    title="MVI_0566"
                    ></iframe>
                </div>
                <div className="buttonShadow">
                  <button className="pushItems-Button2" onClick={() => setVideo("B")}>Experimental</button>
                </div>
            </div>
        </div>
        </div>
      </div>
      </div>
    </StandardPage>
  );
}

export default VideoConfigure;
