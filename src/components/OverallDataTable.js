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
          <td>{user.sCorrect1}</td>
          <td>{user.sIncorrect1}</td>
          <td>{user.iCorrect1}</td>
          <td>{user.iIncorrect1}</td>
          <td>{user.sCorrect2}</td>
          <td>{user.sIncorrect2}</td>
          <td>{user.iCorrect2}</td>
          <td>{user.iIncorrect2}</td>
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
          <th># Sensitive Correct Part 1</th>
          <th># Sensitive Wrong Part 1</th>
          <th># Insensitive Correct Part 1</th>
          <th># Insensitive Wrong Part 1</th>
          <th># Sensitive Correct Part 2</th>
          <th># Sensitive Wrong Part 2</th>
          <th># Insensitive Correct Part 2</th>
          <th># Insensitive Wrong Part 2</th>
        </tr>

        {returnRows()}
      </table>
    </div>
  );
}
