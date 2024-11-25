import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../Firebase";

function FacultyList() {
  const [facultyData, setFacultyData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const db = getFirestore(app);
    const docRef = collection(db, "faculty");
    const docSnap = await getDocs(docRef);
    const data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFacultyData(data);
    console.log(data);
  };

  const deleteData = async (id) => {
    const db = getFirestore(app);
    const dataRef = doc(db, "faculty", id);
    try {
      await deleteDoc(dataRef);
      getData();
    } 
    catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>FacultyList</h1>
      <div>
        {facultyData?.map((item) => {
         return <div key={item.id}>
            <p>{item.facultyName}</p>
            <p>{item.PhoneNumber}</p>
            <button onClick={() => deleteData(item.id)}>Delete</button>
          </div>;
        })}
      </div>
    </div>
  );
}

export default FacultyList;
