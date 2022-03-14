import React from "react";
import "./IndividualData.css";

export default function OverallDataTable(props) {
  return (
    <div className="DashboardData-Body">
      <table className="DashboardData-Table">
        <caption>Results</caption>
        <tr>
          <th>User</th>
          <th># Sensitive Correct</th>
          <th># Sensitive Wrong</th>
          <th># Insensitive Correct</th>
          <th># Insensitive Wrong</th>

        </tr>

        <tr>
          <td>igukbadkb</td>
          <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>4</td>
        </tr>

        <tr>
          <td>igukbadkb</td>
          <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>4</td>
        </tr>

        <tr>
          <td>igukbadkb</td>
          <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>4</td>
        </tr>
      </table>
    </div>
  );
}
