import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      res.json().then((result) => {
        console.log(result);
        setData(result);
      });
    });
  }, []);
  console.log(data);

  return (
    <>
      <div>
        {data.map((item)=>{
           return <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.userId}</p>
            </div>
          })
        }
      </div>
    </>
  );
}

export default App;
