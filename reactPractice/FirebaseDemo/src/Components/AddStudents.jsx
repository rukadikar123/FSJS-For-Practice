import React, { useState } from "react";
import {getDatabase,ref,set} from 'firebase/database'
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";

function AddStudents() {
  const [Name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [admNo, setAdmNo] = useState(null);
  const [selectedFile,setSelectedFile]=useState(null)

    const navigate=useNavigate()

    const handleFileChange=(e)=>{
      const file=e.target.files[0]
      setSelectedFile(file)
    }

  const submitHandler = (e) => {
    e.preventDefault();
    const db=getDatabase(app)
    set(ref(db,'student/' +admNo),{
        name:Name,
        phone:phone
    }).then(res =>{
        navigate('/dashboard/studentList')
    }).catch(err=>{
            console.log(err);
            
    })

  };
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="number"
          placeholder="Adm Number"
          onChange={(e) => setAdmNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input type="file"
        onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddStudents;
