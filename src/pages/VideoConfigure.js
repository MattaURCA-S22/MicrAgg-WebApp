import Vimeo from "@vimeo/player";
import React from "react";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import VideoConfigureTimes from "../components/VideoConfigureTimes";
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

  return (
    <StandardPage>
      <div className="configureBackground">
      <div className="VideoConfigure-content">
      <div className="overlay">
          <div className="VideoConfigure-contentL">
                <h5 className=""><u>Sensitive Times</u></h5>
              <div>
                <VideoConfigureTimes which="s"/>
              </div>
                <hr></hr>
                <h5><u>Insensitive Times</u></h5>
              <div>
                <VideoConfigureTimes which="i"/>
              </div>
          </div>
      </div>
      <div>
        <VideoRetrieval videoPlay={video} showChange="1"/>
      </div>
      </div>
      </div>
    </StandardPage>
  );
}

export default VideoConfigure;
