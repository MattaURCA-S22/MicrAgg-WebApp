import React, {useState} from "react";
import "./VideoRetrieval.css";



export default function VideoRetrieval(props) {
    const [video, setVideo] = useState(props.videoPlay);
    var showButton = props.showChange;
   // var video = props.videoPlay;
    var data = props.data;
    var videoLink;
    var cssType;
    var finalVar;


    function ChangeVideo(videoNum) {
        setVideo(videoNum);
      }

    if (video === "1"){
        videoLink = "https://player.vimeo.com/video/674740238?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
        if (data === "true"){
            cssType = "DashboardData-VideoQuickView";
        } else {
            cssType = "VideoPlayer-video";
        }
    } else if (video === "2"){
        videoLink = "https://player.vimeo.com/video/670831443?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
        cssType = "Dashboard-VideoQuickView";
    }


    if (showButton === "1") {
        finalVar = (
        <div className="VideoConfigure-content">
            <div className="dropdown">
                <button className="configureButton">Videos</button>
                <div className="dropdown-content">
                    <button onClick={() => ChangeVideo("1")}>Control video</button>
                    <button onClick={() => ChangeVideo("2")}>Experimental Video</button>
                </div>
            </div>
            <div>
                <iframe
                    src={videoLink}
                    frameborder="0"
                    allow="autoplay;"
                    className={cssType}
                    title="MVI_0566"
                ></iframe>
            </div> 
        </div>
        )
    } else {
        finalVar = (
            <div>
            <iframe
            src={videoLink}
            frameborder="0"
            allow="autoplay;"
            className={cssType}
            title="MVI_0566"
            ></iframe>
        </div>
        )
    }

    return (
        finalVar
    ); 
}