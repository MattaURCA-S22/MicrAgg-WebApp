import React from "react"
import "./DashboardMain.css"

function DashboardMain() {
    return (
        <div className="DashboardMain-Main">
            <div className="DashboardMain-Nav">
                <h3>Welcome Dr. George!</h3>
            </div>
                <div className="DashboardMain-Body">
                    <div className="DashboardMain-Content">
                        <div className="Dashboard-VideoQuickView">
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
                        </div>
                        <h4>Video Configuration Status</h4>
                        <button className="DashboardMain-Button">Configure Video</button>
                    </div>
                    <div className="DashboardMain-Body">
                        <div className="DashboardMain-Content">
                        <button className="DashboardMain-Button">Quick View</button>
                        <div className="Dashbaord-VideoQuickView">
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
                        </div>
                        <button className="DashboardMain-Button">Detailed View</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default DashboardMain;