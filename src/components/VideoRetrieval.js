import React, {useState, useContext} from "react";
import "./VideoRetrieval.css";
import ResponseContext from "../context/ResponseContext";
import videoContext from "../context/videoContext";

var videoList;

export function GetVideoList() {
    return videoList;
}

export default function VideoRetrieval(props) {
    const [video, setVideo] = useState(props.videoPlay);
    const userData = useContext(ResponseContext);
    const videoLoad = useContext(videoContext);
    var showButton = props.showChange;
    var data = props.data;
    var videoLink;
    var cssType;
    var finalVar;
    var videoTitle;

    console.log(userData)

    function ChangeVideo(videoNum) {
        videoLoad.video = videoNum;
        console.log(videoLoad.video);
        setVideo(videoNum);
    }

    console.log(userData)

    if (video === "A"){
        videoLink = "https://player.vimeo.com/video/693834980?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
        if (data === "true"){
            cssType = "DashboardData-VideoQuickView";
            videoTitle = "Control";
        } else {
            cssType = "VideoPlayer-video";
            videoTitle = "Control";
        }
    } else if (video === "B"){
        videoLink = "https://player.vimeo.com/video/693835115?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
        cssType = "VideoPlayer-video";
        videoTitle = "Experimental";
    }


    if (showButton === "1") {
        finalVar = (
        <div className="VideoConfigure-Content">
            <div>
                <iframe
                    src={videoLink}
                    frameBorder="0"
                    allow="autoplay;"
                    className={cssType}
                    title={videoTitle}
                ></iframe>
            </div> 
            <div className="overlay-2">
            <h5 className="Title">Video Name: {videoTitle}</h5>
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
                <button className="pushItems-Button" onClick={() => setVideo("A")}>Control</button>
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
                <button className="pushItems-Button2" onClick={() => setVideo("B")}>Experimental</button>
                {/* <div className="dropdown-content">
                    <button onClick={() => setVideo("1")}>Control video</button>
                    <button onClick={() => setVideo("2")}>Experimental Video</button>
                </div> */}
            {/* </div> */}
            </div>
        </div>
        </div>
        )
    } else {
        finalVar = (
            <div>
            <iframe
            src={videoLink}
            frameBorder="0"
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
