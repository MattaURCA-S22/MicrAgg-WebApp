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
                            <button className="DashboardData-Button">Configure Video</button>
                        </Link>
                        
                </div>
            </div>
            <div className="DashboardData-Body">
                <div>
                    <table className="DashboardData-Table">
                        <th>ID</th>
                        <tr>
                            <td>ID</td>
                        </tr>
                    </table>
                    <table className="DashboardData-Table">
                        <th>Demographics</th>
                        <tr>
                            <td>Age</td>
                            <td>Gender</td>
                            <td>Other Info</td>
                        </tr>
                    </table>
                    <table className="DashboardData-Table">
                        <th>Data Table</th>
                        <tr>
                            <td># Sensitive Key presses</td>
                            <td># insensitive key presses</td>
                            <td># Correct</td>
                        </tr>
                    </table>
                    <table className="DashboardData-Table">
                        <th>Measures</th>
                        <tr>
                            <td>Measure test 1</td>
                            <td>Measure test 2</td>
                            <td>Measure test 3</td>
                        </tr>
                    </table>
                    <button>thistuff</button>
                    <button>thistuff</button>
                    <button>thistuff</button>
                    <button>thistuff</button>
                </div>
            </div>
        </div>
        </StandardPage>
    );
}

export default DashboardMain;