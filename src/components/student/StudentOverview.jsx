import React from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';

const StudentOverview = () => {
  return (
    <div style={{ 
      padding: "20px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      width: "100%",
      boxSizing: "border-box"
    }}>
      <h2 style={{ 
        color: "#4f46e5", 
        marginBottom: "20px",
        textAlign: "center",
        fontSize: "clamp(1.5rem, 2.5vw, 2rem)"
      }}>
        Performance Overview
      </h2>
      
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
        gap: "20px",
        width: "100%"
      }}>
        {/* Course Completion Chart */}
        <div style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          height: "400px",
          display: "flex",
          flexDirection: "column"
        }}>
          <h3 style={{
            marginBottom: "15px",
            textAlign: "center",
            fontSize: "1.2rem"
          }}>Course Completion</h3>
          <div style={{ 
            flex: 1,
            position: "relative",
            minHeight: "300px"
          }}>
            <Pie 
              data={{
                labels: ["Completed", "In Progress", "Not Started"],
                datasets: [{
                  data: [45, 35, 20],
                  backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                  ],
                  borderWidth: 1
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    align: 'center',
                    labels: {
                      boxWidth: 12,
                      padding: 20,
                      font: {
                        size: 12
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Grade Distribution Chart */}
        <div style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          height: "400px",
          display: "flex",
          flexDirection: "column"
        }}>
          <h3 style={{
            marginBottom: "15px",
            textAlign: "center",
            fontSize: "1.2rem"
          }}>Grade Distribution</h3>
          <div style={{ 
            flex: 1,
            position: "relative",
            minHeight: "300px"
          }}>
            <Pie 
              data={{
                labels: ["A (90-100)", "B (80-89)", "C (70-79)", "D (60-69)", "F (<60)"],
                datasets: [{
                  data: [25, 35, 20, 15, 5],
                  backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                  ],
                  borderWidth: 1
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    align: 'center',
                    labels: {
                      boxWidth: 12,
                      padding: 20,
                      font: {
                        size: 12
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;