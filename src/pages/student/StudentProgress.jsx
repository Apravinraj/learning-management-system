import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';

const StudentProgress = () => {
  const enrolledCourses = [
    { title: "React Basics", progress: 70 },
    { title: "Data Structures", progress: 40 },
    { title: "Algorithms", progress: 30 },
    { title: "Web Development", progress: 90 }
  ];

  const progressChartData = {
    labels: enrolledCourses.map(course => course.title),
    datasets: [
      {
        label: 'Course Progress (%)',
        data: enrolledCourses.map(course => course.progress),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ color: "#4f46e5", marginBottom: "20px" }}>My Course Progress</h2>
      
      <div style={{ 
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        height: "400px"
      }}>
        <Bar 
          data={progressChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                max: 100
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default StudentProgress;