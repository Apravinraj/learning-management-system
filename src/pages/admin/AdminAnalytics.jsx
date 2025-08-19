import React from "react";
import { 
  Typography, 
  Grid, 
  Paper,
  Box
} from "@mui/material";
import { 
  BarChart, 
  PieChart, 
  Bar, 
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell
} from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#4f46e5'];

const AdminAnalytics = () => {
  // Sample data for charts
  // const userGrowthData = [
  //   { name: 'Jan', users: 100 },
  //   { name: 'Feb', users: 150 },
  //   { name: 'Mar', users: 200 },
  //   { name: 'Apr', users: 280 },
  //   { name: 'May', users: 350 },
  //   { name: 'Jun', users: 420 }
  // ];

  const courseEnrollmentData = [
    { name: 'React Fundamentals', students: 45 },
    { name: 'Data Structures', students: 32 },
    { name: 'Advanced Algorithms', students: 28 },
    { name: 'Web Design', students: 22 },
    { name: 'Database Systems', students: 18 }
  ];

  // const userRolesData = [
  //   { name: 'Students', value: 75 },
  //   { name: 'Instructors', value: 15 },
  //   { name: 'Admins', value: 10 }
  // ];

  const completionRatesData = [
    { name: 'React Fundamentals', completion: 68 },
    { name: 'Data Structures', completion: 52 },
    { name: 'Advanced Algorithms', completion: 45 },
    { name: 'Web Design', completion: 72 },
    { name: 'Database Systems', completion: 58 }
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ color: "#4f46e5", marginBottom: "30px", marginTop: "30px",marginLeft: "50px" }}>
        System Analytics
      </Typography>

      {/* <Grid container spacing={3}> */}
        {/* User Growth Chart */}
        {/* <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', height: '400px' }}>
            <Typography variant="h6" gutterBottom>
              User Growth (Last 6 Months)
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#4f46e5" name="Total Users" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid> */}

        {/* User Roles Pie Chart */}
        {/* <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', height: '400px' }}>
            <Typography variant="h6" gutterBottom>
              User Roles Distribution
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={userRolesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {userRolesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid> */}

       <Grid container spacing={6} sx={{ height: 'calc(100vh - 100px)' }}>
  {/* Course Enrollment Chart */}
  <Grid item xs={12} md={6} sx={{ width: '90%' , height:"100%",margin:"0% 5%"}}>
    <Paper 
      elevation={3} 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 2
      }}
    >
      <Typography variant="h6" gutterBottom>
        Course Enrollment
      </Typography>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={courseEnrollmentData}
            layout="vertical"
            margin={{ left: 30, right: 20, top: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={100} 
              tick={{ fontSize: 14 }}
            />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="students" 
              fill="#10b981" 
              name="Enrolled Students" 
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  </Grid>

  {/* Completion Rates Chart */}
  <Grid item xs={12} md={6} sx={{ width: '100%' , height:'100%',margin:"0% 5%"}}>
    <Paper 
      elevation={3} 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 2
      }}
    >
      <Typography variant="h6" gutterBottom>
        Course Completion Rates (%)
      </Typography>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart 
            data={completionRatesData}
            margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 14 }}
            />
            <YAxis 
              domain={[0, 100]} 
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip formatter={(value) => [`${value}%`, "Completion"]} />
            <Legend />
            <Bar 
              dataKey="completion" 
              fill="#f59e0b" 
              name="Completion" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  </Grid>
</Grid>

      {/* Key Metrics */}
      {/* <Box mt={4}>
        <Typography variant="h5" gutterBottom style={{ color: "#4f46e5" }}>
          Key Metrics
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: "Total Users", value: "420", change: "+12%", color: "#4f46e5" },
            { title: "Active Courses", value: "15", change: "+3", color: "#10b981" },
            { title: "Avg. Completion", value: "59%", change: "+5%", color: "#f59e0b" },
            { title: "Monthly Revenue", value: "$8,450", change: "+18%", color: "#ef4444" }
          ].map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={2} style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ color: metric.color }}>
                  {metric.title}
                </Typography>
                <Typography variant="h4" style={{ fontWeight: 'bold', margin: '10px 0' }}>
                  {metric.value}
                </Typography>
                <Typography variant="body2" style={{ color: '#6b7280' }}>
                  {metric.change} from last month
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </div>
  );
};

export default AdminAnalytics;