// src/pages/Login.jsx
import { useContext, useState } from "react";
import { RoleContext } from "../context/RoleContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setRole } = useContext(RoleContext);
  const [selectedRole, setSelectedRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    setRole(selectedRole);
    navigate("/dashboard");
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "80px auto",
      padding: "30px",
      boxShadow: "0 0 15px rgba(0,0,0,0.1)",
      borderRadius: "10px",
      textAlign: "center",
      background: "#fff"
    }}>
      <h2 style={{ marginBottom: "20px", color: "#4f46e5" }}>Login to LMS</h2>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "20px"
        }}
      >
        <option value="admin">Admin</option>
        <option value="student">Student</option>
      </select>
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "none",
          background: "#4f46e5",
          color: "white",
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
