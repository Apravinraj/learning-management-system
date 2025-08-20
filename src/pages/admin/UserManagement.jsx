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
  Tooltip,
  Chip,
  useTheme,
  useMediaQuery,
  Box,
  Card,
  CardContent,
  Grid
} from "@mui/material";
import { Add, Edit, Delete, Search } from "@mui/icons-material";

const UserManagement = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      setUsers(users.map((u) => (u.id === currentUser.id ? currentUser : u)));
    } else {
      const newId = Math.max(...users.map((u) => u.id), 0) + 1;
      setUsers([...users, { ...currentUser, id: newId }]);
    }
    handleCloseDialog();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mobile Card View
  const UserCard = ({ user }) => (
    <Card sx={{ mb: 2, p: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h6" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Edit">
              <IconButton onClick={() => handleOpenDialog(user)} size="small">
                <Edit fontSize="small" color="primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={() => handleDeleteUser(user.id)} size="small">
                <Delete fontSize="small" color="error" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Chip
              label={user.role}
              size="small"
              sx={{
                backgroundColor:
                  user.role === "admin"
                    ? "#4f46e5"
                    : user.role === "instructor"
                    ? "#10b981"
                    : "#3b82f6",
                color: "white",
                width: '100%'
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Chip
              label={user.status}
              size="small"
              sx={{
                backgroundColor: user.status === "active" ? "#10b981" : "#6b7280",
                color: "white",
                width: '100%'
              }}
            />
          </Grid>
        </Grid>
        
        {!isSmallScreen && (
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            ID: {user.id}
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div style={{ padding: isMobile ? "12px" : "24px" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#4f46e5", mb: 3, fontSize: isMobile ? "1.5rem" : "2rem" }}>
        User Management
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          mb: 3,
          gap: isMobile ? 2 : 0
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search users..."
          InputProps={{
            startAdornment: <Search style={{ marginRight: "8px" }} />
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: isMobile ? "100%" : "300px" }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => handleOpenDialog()}
          sx={{ width: isMobile ? "100%" : "auto" }}
        >
          Add User
        </Button>
      </Box>

      {/* Mobile Card View */}
      {isMobile ? (
        <Box>
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Box>
      ) : (
        /* Desktop Table View */
        <TableContainer component={Paper} sx={{ maxWidth: "100%", overflowX: "hidden" }}>
          <Table size={isSmallScreen ? "small" : "medium"}>
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
                  <TableCell>
                    <strong>{user.name}</strong>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.role}
                      size="small"
                      sx={{
                        backgroundColor:
                          user.role === "admin"
                            ? "#4f46e5"
                            : user.role === "instructor"
                            ? "#10b981"
                            : "#3b82f6",
                        color: "white"
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={user.status}
                      size="small"
                      sx={{
                        backgroundColor: user.status === "active" ? "#10b981" : "#6b7280",
                        color: "white"
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleOpenDialog(user)} size="small">
                        <Edit fontSize="small" color="primary" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDeleteUser(user.id)} size="small">
                        <Delete fontSize="small" color="error" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile}
      >
        <DialogTitle sx={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
          {currentUser?.id ? "Edit User" : "Add New User"}
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={currentUser?.name || ""}
            onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
            size={isMobile ? "small" : "medium"}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            value={currentUser?.email || ""}
            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
            size={isMobile ? "small" : "medium"}
          />
          <FormControl fullWidth margin="normal" size={isMobile ? "small" : "medium"}>
            <InputLabel>Role</InputLabel>
            <Select
              value={currentUser?.role || "student"}
              onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="instructor">Instructor</MenuItem>
              <MenuItem value="student">Student</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" size={isMobile ? "small" : "medium"}>
            <InputLabel>Status</InputLabel>
            <Select
              value={currentUser?.status || "active"}
              onChange={(e) => setCurrentUser({ ...currentUser, status: e.target.value })}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleCloseDialog} size={isMobile ? "small" : "medium"}>
            Cancel
          </Button>
          <Button 
            onClick={handleSaveUser} 
            color="primary" 
            variant="contained"
            size={isMobile ? "small" : "medium"}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserManagement;