import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';

const StudentQuizHistory = () => {
  const quizHistory = [
    { course: "React Basics", quiz: "Components Quiz", score: 85, date: "2023-05-10" },
    { course: "React Basics", quiz: "Hooks Quiz", score: 92, date: "2023-05-24" },
    { course: "Data Structures", quiz: "Arrays Quiz", score: 78, date: "2023-05-15" },
    { course: "Data Structures", quiz: "Linked List Quiz", score: 88, date: "2023-05-29" },
    { course: "Algorithms", quiz: "Sorting Quiz", score: 65, date: "2023-06-05" }
  ];

  const quizChartData = {
    labels: quizHistory.map(quiz => quiz.quiz),
    datasets: [
      {
        label: 'Quiz Scores',
        data: quizHistory.map(quiz => quiz.score),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ color: "#4f46e5", marginBottom: "20px" }}>Quiz History</h2>
      
      <div style={{ 
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        marginBottom: "30px",
        height: "300px"
      }}>
        <Bar 
          data={quizChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 100
              }
            }
          }}
        />
      </div>

      <div style={{ 
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={{ textAlign: "left", padding: "12px" }}>Quiz</th>
              <th style={{ textAlign: "left", padding: "12px" }}>Course</th>
              <th style={{ textAlign: "right", padding: "12px" }}>Score</th>
              <th style={{ textAlign: "right", padding: "12px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {quizHistory.map((quiz, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "12px" }}>{quiz.quiz}</td>
                <td style={{ padding: "12px" }}>{quiz.course}</td>
                <td style={{ 
                  padding: "12px", 
                  textAlign: "right",
                  color: quiz.score >= 80 ? "#10b981" : quiz.score >= 60 ? "#f59e0b" : "#ef4444",
                  fontWeight: "bold"
                }}>
                  {quiz.score}%
                </td>
                <td style={{ padding: "12px", textAlign: "right" }}>
                  {new Date(quiz.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentQuizHistory;