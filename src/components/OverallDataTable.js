import React from "react";
import "./IndividualData.css";
import { timeListHandler } from "../data/csvParser";

export default function OverallDataTable(props) {
  function returnRows() {
    let allData = props.data;
    let rows = [];
    console.log(allData.length);
    for (var i = 0; i < allData.length; i++) {
      let user = allData[i];
      //customize data in row below, headings put also be modified further down
      rows.push(
        <tr>
          <td>{user.uid}</td>
          <td>{user.sCorrect}</td>
          <td>{user.sIncorrect}</td>
          <td>{user.iCorrect}</td>
          <td>{user.iIncorrect}</td>
          <td>{timeListHandler(user.sTimes)}</td>
          <td>{timeListHandler(user.iTimes)}</td>
        </tr>
      );
    }
    return rows;
  }

  return (
    <div className="DashboardData-Body">
      <table className="DashboardData-Table">
        <caption>Results</caption>
        {/* Modify Table Headings Here */}
        <tr>
          <th>User</th>
          <th># Sensitive Correct</th>
          <th># Sensitive Wrong</th>
          <th># Insensitive Correct</th>
          <th># Insensitive Wrong</th>
          <th># Sensitive Times</th>
          <th># Insensitive Times</th>
        </tr>

        {returnRows()}
      </table>
    </div>
  );
}
