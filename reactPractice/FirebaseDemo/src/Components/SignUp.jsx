import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  };
  return (
    <div>
      <h1 className="mb-10">SignUp</h1>

      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
