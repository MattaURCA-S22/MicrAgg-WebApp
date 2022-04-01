import { db } from "../firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export async function getAllUserData() {
  const answersCol = collection(db, "User-answers");
  const answerSnapshot = await getDocs(answersCol);
  const fullDataList = answerSnapshot.docs.map((doc) => doc.data());
  console.log("DataRead");
  return fullDataList;
}

export async function fillArray() {
  const docRef = doc(db, "Master-times", "Sensitive");
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
  return docSnap.data();
}
