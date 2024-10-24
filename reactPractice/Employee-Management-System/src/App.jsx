import { useContext, useState, useEffect } from "react";
import Login from "./Components/Login";
import Employee from "./Components/Dashboards/Employee";
import Admin from "./Components/Dashboards/Admin";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  const { admin, employees } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const loggedInData = localStorage.getItem("loggedInUser");

    if (loggedInData) {
      const userData = JSON.parse(loggedInData);
      setUser(userData.role);
      
    }
  }, [admin, employees]);

  const handleClick = (email, password) => {
    const employee = employees.find((elem) => elem.email === email && elem.password === password
    );

    if (admin && admin.email === email && admin.password === password) {
      setUser("admin");
      setLoggedInUser(admin)
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (employee && employee.email === email && password === employee.password) {
      setUser("employee");
      setLoggedInUser(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
    } else {
      alert("Invalid Credentials")
    }
  };

  return (
    <>
  
      {!user && <Login handleClick={handleClick} />}
      {user === "admin" ? (
        <Admin changeUser={setUser}  data={loggedInUser? loggedInUser : {}} />
      ) : (
        (user==="employee" ? <Employee changeUser={setUser}  data={loggedInUser? loggedInUser : {}} />: "")
      )}
    </>
  );
}

export default App;
