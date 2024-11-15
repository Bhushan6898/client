import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { useSelector } from 'react-redux';
import useAdmin from '../../hooks/useUser';
import Paging from '../Paging';
import { classNames } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Sample data
const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 7000 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 8000 },
    { month: 'Jul', sales: 9000 },  // Added July
    { month: 'Aug', sales: 7500 },  // Added August
    { month: 'Sep', sales: 8500 },   // Added September
    { month: 'Oct', sales: 9500 },   // Added October
    { month: 'Nov', sales: 11000 },  // Added November
    { month: 'Dec', sales: 12000 },  // Added December
  ];
  
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' },
  ];
  
const inventoryData = [
  { product: 'Hammer', stock: 50 },
  { product: 'Nails', stock: 200 },
  { product: 'Screwdriver', stock: 150 },
  { product: 'Drill', stock: 30 },
  { product: 'Wrench', stock: 75 },
];

const salesByCategoryData = [
    { category: 'Nuts & Bolts', sales: 12000 },
    { category: 'Cement', sales: 18000 },
    { category: 'Agricultural Tools', sales: 15000 },
    { category: 'Pipes & Fittings', sales: 9000 },
    { category: 'Paint & Adhesives', sales: 7000 },
    { category: 'Electrical Fittings', sales: 11000 },
    { category: 'Power Tools', sales: 13000 },
    { category: 'Hand Tools', sales: 9500 },
    { category: 'Safety Equipment', sales: 8000 },
    { category: 'Fasteners', sales: 5000 },
    { category: 'Plumbing Materials', sales: 6000 },
  ];
  
  

const recentActivitiesData = [
  "User John Doe registered.",
  "User Jane Smith updated profile.",
  "Bill created for Alice Johnson.",
];

const Dashboard = () => {
    const navigate = useNavigate(); // Initialize navigate
  const { Bills, verification,getUsers } = useAdmin();
  const billdata = useSelector((state) => state.auth.billdata);
  const usersData = useSelector((state) => state.auth.userdata);
  const productData = useSelector((state) => state.auth.productDatas);
  
console.log(productData);

  // State for filtering and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBills, setFilteredBills] = useState(billdata);
  const [currentPage, setCurrentPage] = useState(1);
  const [billsPerPage] = useState(5);
  const [currentBills, setCurrentBills] = useState([]);


  useEffect(() => {
    Bills();
    verification();
    getUsers();
  }, []);

  // Effect to filter bills based on search term
  useEffect(() => {
    if (!searchTerm) {
      
      setFilteredBills(billdata);
    } else {
      // Otherwise, filter based on searchTerm
      const result = billdata.filter((bill) =>
        bill.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bill.contactNumber.includes(searchTerm)
      );
      setFilteredBills(result);
    }
  }, [searchTerm, billdata]);
  

  // Calculate current bills for pagination
  useEffect(() => {
    const indexOfLastBill = currentPage * billsPerPage;
    const indexOfFirstBill = indexOfLastBill - billsPerPage;
    setCurrentBills(filteredBills.slice(indexOfFirstBill, indexOfLastBill));
  }, [filteredBills, currentPage]);

  const onPageChanged = (data) => {
    const { currentPage } = data;
    setCurrentPage(currentPage);
  };
  const handleAddUserClick = () => {
    navigate('/account/signup'); // Redirect to the Add User page
  };
  
  
  return (
   
    <div classNames="container-fluide" style={{ padding: '20px' }}>
         <Container>
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1E90FF',textAlign:"center" }}>
        Dashboard Overview
      </Typography>

      {/* Action Buttons */}
      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={3}>
          <Button variant="contained" color="primary" style={{ width: '100%' }} onClick={handleAddUserClick} >
            Add User
          </Button>
        </Grid>
       
      </Grid>

      {/* Filter Section */}
      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Search by Name or Contact"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Metrics Section */}
      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#FFD700', borderRadius: '8px' }}>
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>  {filteredBills.reduce((sum, bill) => sum + bill.totalAmount, 0).toFixed(2)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#FF4500', borderRadius: '8px', color: '#fff' }}>
            <Typography variant="h6">New product</Typography>
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>{productData.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#32CD32', borderRadius: '8px', color: '#fff' }}>
            <Typography variant="h6">Bills</Typography>
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>{billdata.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#4682B4', borderRadius: '8px', color: '#fff' }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4" style={{ fontWeight: 'bold',color:"white" }}>{usersData.length}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Sales Trends Graph */}
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px', color: '#1E90FF' }}>
        Sales Trends
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#FF4500" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      {/* Inventory Levels Graph */}
      <Typography variant="h5" gutterBottom style={{ marginTop: '30px', color: '#1E90FF' }}>
        Product Inventory Levels
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={inventoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stock" fill="#32CD32" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Sales Performance by Category */}
      <Typography variant="h5" gutterBottom style={{ marginTop: '30px', color: '#1E90FF' }}>
        Sales Performance by Category
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesByCategoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#4682B4" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* User List Section */}
      <Typography variant="h5" gutterBottom style={{ marginTop: '30px', color: '#1E90FF' }}>
  Client List
</Typography>

<TableContainer component={Paper} style={{ marginBottom: '20px', borderRadius: '8px' }}>
  <Typography variant="h5" gutterBottom style={{ marginTop: '30px', color: '#1E90FF' }}>
    Client List
  </Typography>
  <Table>
    <TableHead style={{ backgroundColor: '#4682B4' }}>
      <TableRow>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>ID</TableCell>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>First Name</TableCell>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Last Name</TableCell>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Mobile Number</TableCell>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Email</TableCell>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Country</TableCell>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>City</TableCell>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>State</TableCell>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Status</TableCell>
        <TableCell style={{ color: '#fff', fontWeight: 'bold' }}>Permissions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {usersData.map((user) => (
        <TableRow key={user._id} hover>
          <TableCell>{user._id}</TableCell>
          <TableCell>{user.firstName}</TableCell>
          <TableCell>{user.lastName}</TableCell>
          <TableCell>{user.mobileNumber}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.country}</TableCell>
          <TableCell>{user.city}</TableCell>
          <TableCell>{user.state}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              style={{
                backgroundColor: user.status === "inactive" ?"red" : "green",
                color: user.status === "active" ? "#155724" : "white",
                fontWeight: "bold",
              }}
            >
              {user.status}
            </Button>
          </TableCell>
          <TableCell>
            <Button
              variant="contained"
              style={{
                backgroundColor: user.permissions === "Granted" ? "green" : "red",
                color: user.permissions === "granted" ? "#155724" : "white",
                fontWeight: "bold",
              }}
            >
              {user.permissions}
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


      {/* Bills List Section */}
      <Typography variant="h5" gutterBottom style={{ marginTop: '30px', color: '#1E90FF' }}>
        Bill List
      </Typography>
      <TableContainer component={Paper} style={{ borderRadius: '8px' }}>
        <Table>
          <TableHead style={{ backgroundColor: '#32CD32', color: '#fff' }}>
            <TableRow>
              <TableCell style={{ color: '#fff' }}>Customer Name</TableCell>
              <TableCell style={{ color: '#fff' }}>Contact Number</TableCell>
              <TableCell style={{ color: '#fff' }}>Address</TableCell>
              <TableCell style={{ color: '#fff' }}>Created At</TableCell>
              <TableCell style={{ color: '#fff' }}>Products</TableCell>
              <TableCell style={{ color: '#fff' }}>Total Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentBills.map((bill) => (
              <TableRow key={bill.id}>
                <TableCell>{bill.customerName}</TableCell>
                <TableCell>{bill.contactNumber}</TableCell>
                <TableCell>{bill.address}</TableCell>
                <TableCell>{new Date(bill.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                  <div className="table-responsive">
                    <Table>
                      <TableHead style={{ backgroundColor: '#f2f2f2' }}>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Quantity</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Total</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bill.productList.map((product, index) => (
                          <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{product.productName}</TableCell>
                            <TableCell>{product.quantity}</TableCell>
                            <TableCell>₹{product.price}</TableCell>
                            <TableCell>₹{product.quantity * product.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TableCell>
                <TableCell className="font-weight-bold">₹{bill.totalAmount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination for Bills */}
      <Paging
        totalRecords={filteredBills.length}
        pageLimit={billsPerPage}
        pageNeighbours={1}
        onPageChanged={onPageChanged}
      />

      {/* Recent Activities Section */}
      <Typography variant="h5" gutterBottom style={{ marginTop: '30px', color: '#1E90FF' }}>
        Recent Activities
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
        {recentActivitiesData.map((activity, index) => (
          <Typography key={index} variant="body2">
            {activity}
          </Typography>
        ))}
      </Paper>
      </Container>
    </div>
  );
};

export default Dashboard;
