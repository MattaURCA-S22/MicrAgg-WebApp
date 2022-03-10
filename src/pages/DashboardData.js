import React from "react"
import "./DashboardData.css"
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import { Link } from "react-router-dom";

function DashboardMain() {
    return (
        <StandardPage className="DashboardMain-Main">
        <div className="">
            <div className="DashboardData-eNav">
                <div className="eNavL">
                    <h2 className="align">Dashboard</h2>
                    <h4 className="align">Welcome Dr. George</h4>
                </div>
                <div className="DashboardData-Nav">
                            <h2 className="align2">Data Options</h2>
                    <div className="DashboardData-Body-Nav">
                        <button className="DashboardData-Button">Data View</button>
                        <button className="DashboardData-Button">Data Analysis</button>
                    </div>
                </div>
                <div className="eNavR">
                        <VideoRetrieval videoPlay="1" data="true" showChange="2"/>
                        <Link to="/VideoConfigure">
                            <button>Configure Video</button>
                        </Link>
                        
                </div>
            </div>
            <div className="DashboardMain-Body">
                <div>
                    <table className="DashboardData-Table">
                        <th>Data Table</th>
                        <tr>
                            <td className="DashboardData-Table">ID</td>
                            <td># Key Presses</td>
                            <td># Sensitive Key presses</td>
                            <td># insensitive key presses</td>
                            <td>Measures data</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </StandardPage>
    );
}

export default DashboardMain;