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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Tooltip
} from "@mui/material";
import { Add, Edit, Delete, Search } from "@mui/icons-material";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "student", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "instructor", status: "active" },
    { id: 3, name: "Admin User", email: "admin@example.com", role: "admin", status: "active" },
    { id: 4, name: "Bob Johnson", email: "bob@example.com", role: "student", status: "inactive" }
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenDialog = (user) => {
    setCurrentUser(user || { id: null, name: "", email: "", role: "student", status: "active" });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveUser = () => {
    if (currentUser.id) {
      // Update existing user
      setUsers(users.map(u => u.id === currentUser.id ? currentUser : u));
    } else {
      // Add new user
      const newId = Math.max(...users.map(u => u.id), 0) + 1;
      setUsers([...users, { ...currentUser, id: newId }]);
    }
    handleCloseDialog();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ color: "#4f46e5", margin: "20px" }}>
        User Management
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search users..."
          InputProps={{
            startAdornment: <Search style={{ marginRight: '8px' }} />
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '300px' }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => handleOpenDialog()}
        >
          Add User
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: 
                      user.role === 'admin' ? '#4f46e5' : 
                      user.role === 'instructor' ? '#10b981' : '#3b82f6',
                    color: 'white',
                    fontSize: '0.8rem'
                  }}>
                    {user.role}
                  </span>
                </TableCell>
                <TableCell>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: user.status === 'active' ? '#10b981' : '#6b7280',
                    color: 'white',
                    fontSize: '0.8rem'
                  }}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleOpenDialog(user)}>
                      <Edit color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDeleteUser(user.id)}>
                      <Delete color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* User Edit/Create Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{currentUser?.id ? 'Edit User' : 'Add New User'}</DialogTitle>
        <DialogContent style={{ minWidth: '400px', paddingTop: '20px' }}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={currentUser?.name || ''}
            onChange={(e) => setCurrentUser({...currentUser, name: e.target.value})}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={currentUser?.email || ''}
            onChange={(e) => setCurrentUser({...currentUser, email: e.target.value})}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={currentUser?.role || 'student'}
              label="Role"
              onChange={(e) => setCurrentUser({...currentUser, role: e.target.value})}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="instructor">Instructor</MenuItem>
              <MenuItem value="student">Student</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              value={currentUser?.status || 'active'}
              label="Status"
              onChange={(e) => setCurrentUser({...currentUser, status: e.target.value})}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveUser} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserManagement;