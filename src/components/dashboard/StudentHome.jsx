import React from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../CourseCard";

const StudentHome = () => {
  const navigate = useNavigate();

  const enrolledCourses = [
    {
      id: 1,
      title: "React Basics",
      description:"Learn how to build interactive UIs using components, props, and state.Understand React’s virtual DOM, event handling, and data flow.By the end, you’ll be able to create dynamic, reusable front-end applications.",
      instructor: "John Doe",
      duration:"8 hours",
      progress: 70,
      units: [
        { name: "Unit 1: Introduction", videos: 2, pdfs: 1, quiz: true },
        { name: "Unit 2: Components", videos: 3, pdfs: 2, quiz: true },
        { name: "Unit 3: Props & State", videos: 2, pdfs: 1, quiz: true },
        { name: "Unit 4: Hooks", videos: 3, pdfs: 2, quiz: true },
        { name: "Unit 5: Routing", videos: 2, pdfs: 1, quiz: true }
      ]
    },
    {
      id: 2,
      title: "Data Structures",
      description:"Master core data structures such as arrays, stacks, queues, and trees.Understand their operations, time complexities, and real-world use cases.By the end, you’ll be ready to apply them in solving coding problems efficiently.",
      instructor: "Jane Smith",
      duration:"10 hours",
      progress: 40,
      units: [
        { name: "Unit 1: Arrays", videos: 2, pdfs: 1, quiz: true },
        { name: "Unit 2: Linked List", videos: 2, pdfs: 2, quiz: true },
        { name: "Unit 3: Stacks", videos: 1, pdfs: 1, quiz: true },
        { name: "Unit 4: Queues", videos: 2, pdfs: 2, quiz: true },
        { name: "Unit 5: Trees", videos: 3, pdfs: 2, quiz: true }
      ]
    }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ color: "#4f46e5", marginBottom: "20px" }}>My Enrolled Courses</h2>
      
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {enrolledCourses.map((course) => (
          <CourseCard 
            key={course.id}
            course={course}
            onClick={() => navigate("/course", { state: { course } })}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentHome;