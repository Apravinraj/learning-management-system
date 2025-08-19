import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { RoleContext } from "./context/RoleContext";
import Login from "./pages/Login";
import StudentHome from "./components/dashboard/StudentHome";
import CourseDetails from "./pages/CourseDetails";
import FloatingChatButton from "./components/chatbot/FloatingChatButton";
import ChatbotModal from "./components/chatbot/ChatbotModal";
import StudentNavbar from "./components/navbar/StudentNavbar";
import AdminNavbar from "./components/navbar/AdminNavbar";
import StudentProgress from "./components/student/StudentProgress";
import StudentOverview from "./components/student/StudentOverview";
import StudentDeadlines from "./components/student/StudentDeadlines";
import StudentQuizHistory from "./components/student/StudentQuixHistory";
import AdminAnalytics from "./components/dashboard/AdminAnalytics";
import CourseManagement from "./components/dashboard/CourseManagement";
import UserManagement from "./components/dashboard/userManagement";


function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const { role, setRole } = useContext(RoleContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);
    sessionStorage.removeItem("role");
    navigate("/"); // redirect to login
  };

  return (
    <>
      {/* Role-specific Navbar */}
      {/* Role-specific Navbar with logout */}
      {role === 'student' && <StudentNavbar handleLogout={handleLogout} />}
      {role === 'admin' && <AdminNavbar handleLogout={handleLogout} />}

    
      

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Student Routes */}
        {role === 'student' && (
          <>
            <Route path="/dashboard" element={<StudentHome />} />
            <Route path="/dashboard/progress" element={<StudentProgress />} />
            <Route path="/dashboard/overview" element={<StudentOverview />} />
            <Route path="/dashboard/deadlines" element={<StudentDeadlines />} />
            <Route path="/dashboard/quizzes" element={<StudentQuizHistory />} />
            <Route path="/course" element={<CourseDetails />} />
          </>
        )}
        
        {/* Admin Routes */}
        {role === 'admin' && (
          <>
            <Route path="/dashboard" element={<UserManagement />} />
            <Route path="/dashboard/courses" element={< CourseManagement/>} />
            <Route path="/dashboard/analytics" element={<AdminAnalytics />} />
          </>
        )}
        
        {/* Redirect to appropriate dashboard if no sub-route specified */}
        <Route 
          path="/dashboard" 
          element={role ? (role === 'student' ? <StudentHome /> : <UserManagement />) : <Login />} 
        />
      </Routes>

      {/* Chatbot */}
      {role && <FloatingChatButton onClick={() => setChatOpen(true)} />}
      {chatOpen && <ChatbotModal role={role} onClose={() => setChatOpen(false)} />}
    </>
  );
}

export default App;