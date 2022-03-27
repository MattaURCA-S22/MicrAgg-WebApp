import "./IndividualData.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getAllUserData() {
  const answersCol = collection(db, "User-answers");
  const answerSnapshot = await getDocs(answersCol);
  const fullDataList = answerSnapshot.docs.map((doc) => doc.data());
  console.log("DataRead");
  return fullDataList;
}
