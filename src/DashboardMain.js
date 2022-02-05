import React from "react"
import "./DashboardMain.css"

function DashboardMain() {
    return (
        <div className="DashboardMain-Main">
            <div className="DashboardMain-Nav">
                <h1>Welcome Dr. George!</h1>
            </div>
                <div className="DashboardMain-Body">
                    <div className="DashboardMain-Content">
                        <div className="Dashboard-VideoQuickView">

                        </div>
                        <h4>Video Configuration Status</h4>
                        <button className="DashboardMain-Button">Configure Video</button>
                    </div>
                    <div className="DashboardMain-Body">
                        <button className="DashboardMain-Button">Quick View</button>
                        <div className="Dashbaord-VideoQuickView">

                        </div>
                        <button className="DashboardMain-Button">Detailed View</button>
                    </div>
                </div>
        </div>
    );
}