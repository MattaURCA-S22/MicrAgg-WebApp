import React, { useState, useEffect } from "react";
import "./DashboardData.css";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import { Link } from "react-router-dom";
import IndividualData from "../components/IndividualData";
import OverallDataTable from "../components/OverallDataTable";
import { getAllUserData } from "../data/firebaseInterface"

function DashboardMain() {
  

  useEffect(() => {
    getAllUserData;
  });

  
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
            <VideoRetrieval videoPlay="1" data="true" showChange="2" />
            <Link to="/VideoConfigure">
              <button className="DashboardData-Button">Configure Video</button>
            </Link>
          </div>
        </div>
        {/**<IndividualData/>**/}
        {/*<OverallDataTable/>*/}
      </div>
    </StandardPage>
  );
}

export default DashboardMain;
