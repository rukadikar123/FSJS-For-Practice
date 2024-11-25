import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";

function StudentLists() {
  const [studentData, setstudentData] = useState(null);

  const navigate=useNavigate()

  const handleDeleteData = (e, key) => {
    e.preventDefault()
    const db = getDatabase(app);
    const studentRef = ref(db, "student/" +key);
    remove(studentRef)

  }

  useEffect(() => {
    const db = getDatabase(app);
    const studentRef = ref(db, "student");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      setstudentData(data);
    });
  }, []);

  return (
    <div>
      <h1>Student Lists</h1>
      {studentData && (
        <div>
          {Object.entries(studentData).map((item) => {
            return (
              <div key={item[0]}>
                <p>
                  {item[1].name} {item[1].phone}
                </p>
              <button className="px-2 py-1 text-sm bg-red-300 rounded-lg" onClick={(e) => handleDeleteData(e, item[0])}>
                  Delete
                </button>
                <button onClick={()=> navigate('/updatestudent',{state:[item]})} className="px-2 py-1 text-sm bg-red-300 rounded-lg ml-2">Update</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default StudentLists;
