import React from "react";

const StudentDeadlines = () => {
  const upcomingDeadlines = [
    { course: "React Basics", assignment: "State Management Project", dueDate: "2023-06-15", priority: "high" },
    { course: "Data Structures", assignment: "Linked List Implementation", dueDate: "2023-06-18", priority: "medium" },
    { course: "React Basics", assignment: "Final Exam", dueDate: "2023-06-25", priority: "high" },
    { course: "Algorithms", assignment: "Sorting Assignment", dueDate: "2023-07-01", priority: "low" }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ color: "#4f46e5", marginBottom: "20px" }}>Upcoming Deadlines</h2>
      
      <div style={{ 
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={{ textAlign: "left", padding: "12px" }}>Course</th>
              <th style={{ textAlign: "left", padding: "12px" }}>Assignment</th>
              <th style={{ textAlign: "right", padding: "12px" }}>Due Date</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Priority</th>
            </tr>
          </thead>
          <tbody>
            {upcomingDeadlines.map((deadline, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "12px" }}>{deadline.course}</td>
                <td style={{ padding: "12px" }}>{deadline.assignment}</td>
                <td style={{ padding: "12px", textAlign: "right" }}>
                  {new Date(deadline.dueDate).toLocaleDateString()}
                </td>
                <td style={{ 
                  padding: "12px", 
                  textAlign: "center",
                  color: getPriorityColor(deadline.priority),
                  fontWeight: "bold"
                }}>
                  {deadline.priority.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDeadlines;