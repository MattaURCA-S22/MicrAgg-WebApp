import React, {useState, useContext} from "react";
import "./VideoRetrieval.css";

var videoList;

export function GetVideoList() {
    return videoList;
}

export default function VideoRetrieval(props) {
    const video = props.videoPlay;
    var data = props.data;
    var videoLink;
    var cssType;
    var finalVar;
    var videoTitle;

    if (video === "A"){
        videoLink = "https://player.vimeo.com/video/745639164?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
        if (data === "true"){
            cssType = "DashboardData-VideoQuickView";
            videoTitle = "Control";
        } else {
            cssType = "VideoPlayer-video";
            videoTitle = "Control";
        }
    } else if (video === "B"){
        videoLink = "https://player.vimeo.com/video/745639562?h=8bec22d9fe&title=0&badge=0&portrait=0&byline=0&autoplay=0&texttrack=en&player_id=0&VideoPlayer_id=58479"
        cssType = "VideoPlayer-video";
        videoTitle = "Experimental";
    }

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

    return (
        finalVar
    ); 
}
