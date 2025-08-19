import React from "react";

function CourseCard({ course, onClick }) {
  // Determine progress color based on percentage
  const getProgressColor = (progress) => {
    if (progress >= 80) return "#10b981"; // green
    if (progress >= 50) return "#f59e0b"; // yellow
    return "#ef4444"; // red
  };

  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #e5e7eb",
        padding: "15px",
        borderRadius: "10px",
        cursor: "pointer",
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        ":hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }
      }}
    >
      <h4 style={{ marginTop: 0, color: "#4f46e5" }}>{course.title}</h4>
      <p style={{ color: "#6b7280", marginBottom: "10px" }}>Instructor: {course.instructor}</p>
      
      {/* Progress bar */}
      <div style={{ marginBottom: "10px" }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between",
          marginBottom: "5px"
        }}>
          <span>Progress:</span>
          <span style={{ fontWeight: "bold" }}>{course.progress}%</span>
        </div>
        <div style={{
          height: "8px",
          backgroundColor: "#e5e7eb",
          borderRadius: "4px",
          overflow: "hidden"
        }}>
          <div style={{
            width: `${course.progress}%`,
            height: "100%",
            backgroundColor: getProgressColor(course.progress),
            borderRadius: "4px"
          }}></div>
        </div>
      </div>
      
      <button 
        style={{
          padding: "6px 12px",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          width: "100%"
        }}
      >
        Continue Learning
      </button>
    </div>
  );
}

export default CourseCard;