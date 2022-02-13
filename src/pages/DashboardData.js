import React from "react"
import "./DashboardData.css"
import StandardPage from "../components/StandardPage";

function DashboardMain() {
    return (
        <div className="DashboardMain-Main">
            <div className="DashboardMain-Nav">
                    <h4 className="Dashboard">Dashboard</h4>
                    <h4>Data Options</h4>
                <div className="DashboardData-Body">
                    <button className="DashboardData-Button"></button>
                    <button className="DashboardData-Button"></button>
                    <button className="DashboardData-Button"></button>
                </div>
            </div>
            <div className="DashboardMain-Body">
            </div>
        </div>
    );
}

export default DashboardMain;