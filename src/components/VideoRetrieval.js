import React, {useState, useContext} from "react";
import "./VideoRetrieval.css";
import ResponseContext from "../context/ResponseContext";


export default function VideoRetrieval(props) {
    const [video, setVideo] = useState(props.videoPlay);
    const userData = useContext(ResponseContext);
    var showButton = props.showChange;
    var data = props.data;
    var videoLink;
    var cssType;
    var finalVar;
    var videoTitle;
    var videoList;

    console.log(userData)

    function ChangeVideo(videoNum) {
        setVideo(videoNum);
    }

    if (video === "1" || video === "0"){
        videoLink = "https://player.vimeo.com/video/693834980?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
        if (data === "true"){
            cssType = "DashboardData-VideoQuickView";
            videoTitle = "Control";
        } else {
            cssType = "VideoPlayer-video";
            videoTitle = "Control";
        }
    } else if (video === "2"){
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
                    frameborder="0"
                    allow="autoplay;"
                    className={cssType}
                    title={videoTitle}
                ></iframe>
            </div> 
            <div className="overlay-2">
            <h3 className="Title">Video Name: {videoTitle}</h3>
                <div className="pushItems-Video">
                    <iframe
                    src="https://player.vimeo.com/video/693834980?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
                    frameborder="0"
                    allow="autoplay;"
                    className="DashboardData-VideoQuickView"
                    title="MVI_0566"
                    ></iframe>
                </div>
                <button className="pushItems-Button" onClick={() => ChangeVideo("1")}>Control</button>
                <br></br>
                
                <div className="pushItems-Video">
                    <iframe
                    src="https://player.vimeo.com/video/693835115?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
                    frameborder="0"
                    allow="autoplay;"
                    className="DashboardData-VideoQuickView"
                    title="MVI_0566"
                    ></iframe>
                </div>
                <button className="pushItems-Button2" onClick={() => ChangeVideo("2")}>Experimental</button>
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