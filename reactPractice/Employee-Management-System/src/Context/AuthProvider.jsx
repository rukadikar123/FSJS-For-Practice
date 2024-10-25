import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../LocalStorage/Localstorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setLocalStorage();
  }, []);

  

  useEffect(() => {
    const { admin, employees } = getLocalStorage();

    setUserData({ admin, employees });
  }, [setUserData]);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
