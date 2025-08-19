import React from "react";
import { useLocation, Link } from "react-router-dom";

function CourseDetails() {
  const location = useLocation();
  const course = location.state?.course;

  if (!course) return <h2 style={styles.notFound}>No course data found</h2>;

  return (
    <div style={styles.container}>
      <Link to="/dashboard" style={styles.backLink}>⬅ Back to Dashboard</Link>
      
      <div style={styles.header}>
        <h1 style={styles.title}>{course.title}</h1>
        <p style={styles.description}>{course.description || "No description available"}</p>
      </div>

      <div style={styles.detailsContainer}>
        <div style={styles.metaData}>
          <div style={styles.metaItem}>
            <span style={styles.metaLabel}>Instructor:</span>
            <span style={styles.metaValue}>{course.instructor || "Not specified"}</span>
          </div>
          <div style={styles.metaItem}>
            <span style={styles.metaLabel}>Duration:</span>
            <span style={styles.metaValue}>{course.duration || "Not specified"}</span>
          </div>
          <div style={styles.metaItem}>
            <span style={styles.metaLabel}>Enrollment:</span>
            <span style={styles.metaValue}>{course.enrollmentStatus || "Open"}</span>
          </div>
        </div>

        <h2 style={styles.sectionTitle}>📚 Course Units</h2>
        
        <div style={styles.unitsGrid}>
          {course.units.map((unit, index) => (
            <div key={index} style={styles.unitCard}>
              <h3 style={styles.unitTitle}>{unit.name}</h3>
              <div style={styles.unitContent}>
                <p style={styles.unitDetail}>📹 Videos: {unit.videos}</p>
                <p style={styles.unitDetail}>📄 PDFs: {unit.pdfs}</p>
                <p style={styles.unitDetail}>📝 Quiz: {unit.quiz ? "✅ Available" : "❌ Not Available"}</p>
                {unit.duration && <p style={styles.unitDetail}>⏱️ Duration: {unit.duration}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    lineHeight: "1.6"
  },
  backLink: {
    display: "inline-block",
    marginBottom: "20px",
    color: "#4f46e5",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.2s",
    padding: "8px 12px",
    borderRadius: "4px",
    backgroundColor: "#f0f0f0",
    '&:hover': {
      color: "#3a36b1",
      backgroundColor: "#e0e0e0"
    }
  },
  header: {
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "1px solid #eee"
  },
  title: {
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
    marginBottom: "10px",
    color: "#2d3748"
  },
  description: {
    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
    color: "#4a5568",
    margin: "0"
  },
  detailsContainer: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    padding: "25px"
  },
  metaData: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "1px solid #eee"
  },
  metaItem: {
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },
  metaLabel: {
    fontSize: "14px",
    color: "#718096",
    fontWeight: "500"
  },
  metaValue: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#2d3748"
  },
  sectionTitle: {
    fontSize: "clamp(1.3rem, 2vw, 1.8rem)",
    marginBottom: "20px",
    color: "#2d3748",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  unitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px"
  },
  unitCard: {
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    padding: "20px",
    border: "1px solid #e2e8f0",
    transition: "transform 0.2s, box-shadow 0.2s",
    '&:hover': {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }
  },
  unitTitle: {
    fontSize: "1.2rem",
    marginTop: "0",
    marginBottom: "15px",
    color: "#4f46e5",
    paddingBottom: "10px",
    borderBottom: "1px solid #e2e8f0"
  },
  unitContent: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  unitDetail: {
    margin: "0",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  },
  notFound: {
    textAlign: "center",
    margin: "50px auto",
    color: "#e53e3e",
    fontSize: "1.5rem"
  }
};

export default CourseDetails;