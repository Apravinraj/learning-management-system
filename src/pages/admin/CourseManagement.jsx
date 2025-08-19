import React, { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
  Chip,
  MenuItem,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Add, Edit, Delete, Search } from "@mui/icons-material";

const CourseManagement = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [courses, setCourses] = useState([
    { 
      id: 1, 
      title: "React Fundamentals", 
      category: "Web Development", 
      instructor: "John Doe",
      students: 45,
      status: "published",
      createdAt: "2023-01-15"
    },
    { 
      id: 2, 
      title: "Data Structures", 
      category: "Computer Science", 
      instructor: "Jane Smith",
      students: 32,
      status: "published",
      createdAt: "2023-02-20"
    },
    { 
      id: 3, 
      title: "Advanced Algorithms", 
      category: "Computer Science", 
      instructor: "Alice Johnson",
      students: 28,
      status: "draft",
      createdAt: "2023-03-10"
    }
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenDialog = (course = null) => {
    setCurrentCourse(course || { 
      id: null, 
      title: "", 
      category: "", 
      instructor: "",
      students: 0,
      status: "draft",
      createdAt: new Date().toISOString().split('T')[0]
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveCourse = () => {
    if (currentCourse.id) {
      // Update existing course
      setCourses(courses.map(c => c.id === currentCourse.id ? currentCourse : c));
    } else {
      // Add new course
      const newId = Math.max(...courses.map(c => c.id), 0) + 1;
      setCourses([...courses, { ...currentCourse, id: newId }]);
    }
    handleCloseDialog();
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: isSmallScreen ? '16px' : '24px' }}>
      <Typography variant="h4" gutterBottom style={{ color: "#4f46e5", marginBottom: "20px" }}>
        Course Management
      </Typography>

      <div style={{ 
        display: 'flex', 
        flexDirection: isSmallScreen ? 'column' : 'row',
        justifyContent: 'space-between', 
        marginBottom: '20px',
        gap: isSmallScreen ? '16px' : '0'
      }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search courses..."
          InputProps={{
            startAdornment: <Search style={{ marginRight: '8px' }} />
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: isSmallScreen ? '100%' : '300px' }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => handleOpenDialog()}
          style={{ width: isSmallScreen ? '100%' : 'auto' }}
        >
          Add Course
        </Button>
      </div>

      <TableContainer 
        component={Paper}
        style={{ 
          maxWidth: '100%',
          overflowX: 'hidden'
        }}
      >
        <Table size={isSmallScreen ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>
              {!isSmallScreen && <TableCell>ID</TableCell>}
              <TableCell>Title</TableCell>
              {!isSmallScreen && <TableCell>Category</TableCell>}
              {!isSmallScreen && <TableCell>Instructor</TableCell>}
              <TableCell>Students</TableCell>
              <TableCell>Status</TableCell>
              {!isSmallScreen && <TableCell>Created</TableCell>}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCourses.map((course) => (
              <TableRow key={course.id}>
                {!isSmallScreen && <TableCell>{course.id}</TableCell>}
                <TableCell>
                  <strong>{course.title}</strong>
                  {isSmallScreen && (
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                      {course.category} • {course.instructor}
                    </div>
                  )}
                </TableCell>
                {!isSmallScreen && (
                  <TableCell>
                    <Chip label={course.category} variant="outlined" size="small" />
                  </TableCell>
                )}
                {!isSmallScreen && <TableCell>{course.instructor}</TableCell>}
                <TableCell>{course.students}</TableCell>
                <TableCell>
                  <Chip 
                    label={course.status} 
                    color={course.status === 'published' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                {!isSmallScreen && (
                  <TableCell>
                    {new Date(course.createdAt).toLocaleDateString()}
                  </TableCell>
                )}
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton 
                      onClick={() => handleOpenDialog(course)}
                      size="small"
                    >
                      <Edit fontSize="small" color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton 
                      onClick={() => handleDeleteCourse(course.id)}
                      size="small"
                    >
                      <Delete fontSize="small" color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Course Edit/Create Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="sm" 
        fullWidth
        fullScreen={isSmallScreen}
      >
        <DialogTitle>{currentCourse?.id ? 'Edit Course' : 'Add New Course'}</DialogTitle>
        <DialogContent style={{ paddingTop: '20px' }}>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            value={currentCourse?.title || ''}
            onChange={(e) => setCurrentCourse({...currentCourse, title: e.target.value})}
          />
          <TextField
            label="Category"
            fullWidth
            margin="normal"
            value={currentCourse?.category || ''}
            onChange={(e) => setCurrentCourse({...currentCourse, category: e.target.value})}
          />
          <TextField
            label="Instructor"
            fullWidth
            margin="normal"
            value={currentCourse?.instructor || ''}
            onChange={(e) => setCurrentCourse({...currentCourse, instructor: e.target.value})}
          />
          <TextField
            label="Students"
            type="number"
            fullWidth
            margin="normal"
            value={currentCourse?.students || 0}
            onChange={(e) => setCurrentCourse({...currentCourse, students: parseInt(e.target.value) || 0})}
          />
          <TextField
            label="Status"
            select
            fullWidth
            margin="normal"
            value={currentCourse?.status || 'draft'}
            onChange={(e) => setCurrentCourse({...currentCourse, status: e.target.value})}
          >
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="published">Published</MenuItem>
            <MenuItem value="archived">Archived</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveCourse} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CourseManagement;