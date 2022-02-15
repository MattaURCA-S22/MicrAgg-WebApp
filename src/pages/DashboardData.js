import React from "react"
import "./DashboardData.css"
import StandardPage from "../components/StandardPage";

function DashboardMain() {
    return (
        <StandardPage className="DashboardMain-Main">
            <div className="DashboardMain-Nav">
                    <h4 className="Dashboard">Dashboard</h4>
                    <h4>Data Options</h4>
                <div className="DashboardData-Body">
                    <button className="DashboardData-Button">Data View</button>
                    <button className="DashboardData-Button">Data Analysis</button>
                    <button className="DashboardData-Button">Video</button>
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
        </StandardPage>
    );
}

export default DashboardMain;