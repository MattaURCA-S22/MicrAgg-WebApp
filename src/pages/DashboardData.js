import React, { useState, useEffect } from "react";
import "./DashboardData.css";
import StandardPage from "../components/StandardPage";
import VideoRetrieval from "../components/VideoRetrieval";
import { Link } from "react-router-dom";
//import IndividualData from "../components/IndividualData";
import OverallDataTable from "../components/OverallDataTable";
import { getAllUserData } from "../data/firebaseInterface";
import { csvParser } from "../data/csvParser";

function DashboardMain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getAllUserData();
      setData(userData);
    };

    fetchData();
  }, []);

  function downloadCSV() {
    const element = document.createElement("a");
    const file = new Blob([csvParser(data)], {
      type: "text/csv"
    });
    element.href = URL.createObjectURL(file);
    element.download = "SurveyData.csv";
    document.body.appendChild(element);
    element.click();
  }

  console.log(data);
  return (
    <StandardPage className="DashboardMain-Main">
      <div className="">
        <div className="DashboardData-eNav">
          {/* <div className="eNavL"> */}
            <h3 className="">Dashboard</h3>
          {/* </div> */}
          {/* <div className="DashboardData-Nav"> */}
            <h2 className="">Data Options</h2>
            {/* <div className="DashboardData-Body-Nav"> */}
            {/* </div> */}
          {/* </div> */}
          {/* <div className="eNavR"> */}
            <VideoRetrieval className="video" videoPlay="A" data="true" showChange="2" />
            <h4 className="">Welcome Dr. George</h4>
            <button className="DashboardData-Button" onClick={downloadCSV}>Download CSV</button>
            <Link to="/VideoConfigure">
              <button className="dashboardData-Button">Configure Video</button>
            </Link>
          {/* </div> */}
        </div>
        {/**<IndividualData/>**/}
        <OverallDataTable data={data} />
      </div>
    </StandardPage>
  );
}

export default DashboardMain;
