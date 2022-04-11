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
        <div className="DashboardData-TopNav">
            <h2>Dashboard</h2>
            <h2>Data Options</h2>
            <VideoRetrieval videoPlay="A" data="true" showChange="2" />
            <h4></h4>
            <div className="shadow">
              <button className="DashboardData-Buttons" onClick={downloadCSV}>Download CSV</button>
            </div>
            <Link to="/VideoConfigure">
              <div className="shadow">
                <button className="DashboardData-Buttons">Configure Video</button>
              </div>
            </Link>
        </div>
        {/**<IndividualData/>**/}
        <OverallDataTable data={data} />
    </StandardPage>
  );
}

export default DashboardMain;
