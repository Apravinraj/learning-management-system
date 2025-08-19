// src/pages/Dashboard.jsx
import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import AdminDashboard from "../components/dashboard/AdminHome";
import StudentDashboard from "./StudentHome";

const Dashboard = () => {
  const { role } = useContext(RoleContext);


  return (
    <div style={{ padding: 16, maxWidth: 1200, margin: "0 auto" }}>
      {/* <h2 style={{ marginBottom: 12 }}>{role.toUpperCase()} Dashboard</h2> */}
      {role === "admin" ? <AdminDashboard /> : <StudentDashboard />}
    </div>
  );
};

export default Dashboard;
