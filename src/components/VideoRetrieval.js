import React from "react";
import "./VideoRetrieval.css";

export default function VideoRetrieval(props) {

    var video = props.videoPlay;
    var data = props.data;
    var videoLink;
    var cssType;
    if (video === "1"){
        videoLink = "https://player.vimeo.com/video/674740238?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&player_id=0&VideoPlayer_id=58479"
        if (data === "true"){
            cssType = "DashboardData-VideoQuickView";
        } else {
            cssType = "VideoPlayer-video";
        }
    } else if (video === "2"){
        videoLink = "https://player.vimeo.com/video/670831443?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&player_id=0&VideoPlayer_id=58479"
        cssType = "Dashboard-VideoQuickView";
    }

    return (
        <div>
            <iframe
            src={videoLink}
            frameborder="0"
            allow="autoplay;"
            className={cssType}
            title="MVI_0566"
            ></iframe>
        </div>
    ); 
}