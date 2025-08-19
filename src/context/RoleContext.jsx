
// src/context/RoleContext.jsx
import { createContext, useState, useEffect } from "react";
import Login from "../pages/Login";
export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  // when app loads, check sessionStorage
  useEffect(() => {
    const savedRole = sessionStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  // when role changes, save it to sessionStorage
  useEffect(() => {
    if (role) {
      sessionStorage.setItem("role", role);
    }
  }, [role]);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
