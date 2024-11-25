import React, { useState } from "react";
import { getDatabase, ref, set, update } from "firebase/database";
import { app } from "../Firebase";
import { useLocation, useNavigate } from "react-router-dom";

function Updatestudents() {
  const navigate = useNavigate();
  const location = useLocation();
  const [Name, setName] = useState(location.state[0][1].name);
  const [phone, setPhone] = useState(location.state[0][1].phone);
  const [admNo, setAdmNo] = useState(location.state[0][0]);

  console.log(location);

  const submitHandler = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const studentref=ref(db,'student/'+ location.state[0][0])
    update(studentref,{
        name:Name,
        phone:phone
    }).then(res=>{
        navigate('/studentList')
    }).catch(err=>{
        console.log(err);
        
    })
  };
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
        disabled
          type="number"
          placeholder="Adm Number"
          value={admNo}
          onChange={(e) => setAdmNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Updatestudents;
