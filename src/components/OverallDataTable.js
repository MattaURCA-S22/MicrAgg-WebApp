import React from "react";
import "./IndividualData.css";
import { auth, db } from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function OverallDataTable(props) {
  async function getUserData(){
    const answersCol = collection(db, 'User-answers');
    const answerSnapshot = await getDocs(answersCol);
    const answerList = answerSnapshot.docs.map(doc => doc.data());
    console.log(answerList)
    return answerList;
  }
  

  function returnRows(){
    const promise = getUserData()
    var rows = [];
    promise.then((allData) => {
      console.log(allData.length)
      for (var i = 0; i < allData.length; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(
          <tr>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>4</td>
          </tr>
        );
      }
      return rows;
    });
  }

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

        {returnRows()}
      </table>
    </div>
  );
}
