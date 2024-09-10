import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => { 
        setUserData(response.data)
       setLoading(false)});
  }, []);
  console.log(userData);

  return (
    <>
      {loading ? (<p style={{textAlign:"center", paddingLeft:"600px"}}>Loading....</p>) : 
      (userData.map((item) => {
        return (
          <div key={item.id}>
            <h5>{item.name}</h5>
            <p> {item.address.city}</p>
          </div>
        );
      }))}
    </>
  );
}

export default App;
