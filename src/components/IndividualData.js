import React from "react";
import "./IndividualData.css"

export default function IndividualData(props) {
  return (
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
  );
}
