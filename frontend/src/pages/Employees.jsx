import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { allGridColumnsFieldsSelector, DataGrid } from '@mui/x-data-grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const theme = createTheme({
     palette: {
          neutral: {
               main: '#61c668',
               contrastText: '#fff',
          },
          red: {
               main: '#d13f3f',
               contrastText: '#fff',
          },
          blue: {
               main: '#9306f1',
               contrastText: '#fff',
          },
          green: {
               main: '#0a9941',
               contrastText: '#fff',
          },
     },
});

const Container = styled.div`
    background-color: #f0f2f9;
    height: 100vh;
    width: 1500px;
    padding: 50px 100px 100px 100px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Main = styled.div`
    width: 1020px;
    height: 650px;
`
const Card = styled.div`
    background-color: white;
    height: 680px;
    width: 100%;
    border-radius: 20px;
    padding: 30px;
    justify-content: space-between;
`
const FormContainer = styled.div`
     display: flex;
     justify-content: space-between;
     margin-bottom: 20px;
`
const EditDeleteContainer = styled.div`
    display: flex;
    justify-content: right;
`
const ButtonContainer = styled.div`
     display: flex;
     justify-content: space-between;
`
const SearchContainer = styled.div`
     display: flex;
     padding-bottom: 30px;
`
const FormSeparator = styled.div`
     display: flex;
     justify-content: left;
     align-items: center;
     padding-bottom: 10px;
     padding-top: 30px;
     color: #9306f1;
`

const Employees = (props) => {
     const [employee_id, setEmployee_id] = useState('')
     const [firstname, setFirstname] = useState('')
     const [middlename, setMiddleName] = useState('')
     const [lastname, setLastname] = useState('')
     const [age, setAge] = useState('')
     const [birthday, setBirthday] = useState('')
     const [address, setAddress] = useState('')
     const [email, setEmail] = useState('')
     const [contact_number, setContact_number] = useState('')
     const [incase_of_emergency, setIncase_of_emergency] = useState('')
     const [job_title, setJob_title] = useState('')
     const [salary, setSalary] = useState('')
     const [start_date, setStart_date] = useState('')
     const [end_date, setEnd_date] = useState('')
     const [contract, setContract] = useState('')
     const [department, setDepartment] = useState('')
     const [is_active, setIs_active] = useState('')
     const [sss, setSss] = useState('')
     const [pagibig, setPagibig] = useState('')
     const [tin, setTin] = useState('')
     const [philhealth, setPhilhealth] = useState('')
     const [bank_name, setBank_name] = useState('')
     const [bank_account_number, setBank_account_number] = useState('')
     const [sick_leave, setSick_leave] = useState('')
     const [vacation_leave, setVacation_leave] = useState('')
     const [emergency_leave, setEmergencty_leave] = useState('')
     const [photo, setPhoto] = useState('')
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')


     const [error, setError] = useState('')
     const [query, setQuery] = useState('')
     const [id, setId] = useState('')
     const [openDelete, setOpenDelete] = useState(false);
     const [openEdit, setOpenEdit] = useState(false);
     const [openAdd, setOpenAdd] = useState(false);
     const [openWarning, setOpenWarning] = useState(false);

     const handleOpenAdd = () => {
          setOpenAdd(true);
          // setDepartment_name('');
          // setDescription('')
     };
     const handleCloseAdd = () => {
          setOpenAdd(false);
     };
     const handleCloseWarning = () => {
          setOpenWarning(false);
     };

     const handleOpenDelete = () => {
          if (id == "") {
               setOpenWarning(true)
          }
          else {
               setOpenDelete(true);
          }

     };
     const handleCloseDelete = () => {
          setOpenDelete(false);
     };
     const handleOpenEdit = () => {
          if (id == "") {
               setOpenWarning(true)
          }
          else {
               setOpenEdit(true);
          }

     };
     const handleCloseEdit = () => {
          setOpenEdit(false);
     };

     const columns = [
          { field: 'employee_id', headerName: 'Employee ID', width: 100 },
          { field: 'firstname', headerName: 'Firstname', width: 300, sortable: false },
          { field: 'middlename', headerName: 'Middlename', width: 300, sortable: false },
          { field: 'lastname', headerName: 'Lastname', width: 300, sortable: false },
          { field: 'age', headerName: 'Age', width: 300, sortable: false },
          { field: 'birthday', headerName: 'Birthday', width: 300, sortable: false },
          { field: 'address', headerName: 'City', width: 300, sortable: false },
          { field: 'email', headerName: 'Email', width: 300, sortable: false },
          { field: 'contact_number', headerName: 'Contact Number', width: 300, sortable: false },
          { field: 'incase_of_emergency', headerName: 'Incase of Emergency', width: 300, sortable: false },
          { field: 'job_title', headerName: 'Job Title', width: 300, sortable: false },
          { field: 'salary', headerName: 'Salary', width: 300, sortable: false },
          { field: 'start_date', headerName: 'Start Date', width: 300, sortable: false },
          { field: 'end_date', headerName: 'End Date', width: 300, sortable: false },
          { field: 'contract', headerName: 'Contract', width: 300, sortable: false },
          { field: 'department', headerName: 'Department', width: 300, sortable: false },
          { field: 'is_active', headerName: 'Is Active', width: 300, sortable: false },
          { field: 'sss', headerName: 'SSS', width: 300, sortable: false },
          { field: 'pagibig', headerName: 'Pagibig', width: 300, sortable: false },
          { field: 'tin', headerName: 'TIN', width: 300, sortable: false },
          { field: 'philhealth', headerName: 'Philhealth', width: 300, sortable: false },
          { field: 'bank_name', headerName: 'Bank Name', width: 300, sortable: false },
          { field: 'bank_account_number', headerName: 'Account Number', width: 300, sortable: false },
          { field: 'sick_leave', headerName: 'Sick Leave', width: 300, sortable: false },
          { field: 'vacation_leave', headerName: 'Vacation Leave', width: 300, sortable: false },
          { field: 'emergency_leave', headerName: 'Emergency Leave', width: 300, sortable: false },
          { field: 'photo', headerName: 'Photo', width: 300, sortable: false },
          { field: 'username', headerName: 'Username', width: 300, sortable: false },
          { field: 'password', headerName: 'Password', width: 300, sortable: false },
     ];

     const handleAdd = async (e) => {
          e.preventDefault()
          const employees = {
               employee_id: employee_id,
               firstname: firstname,
               middlename: middlename,
               lastname: lastname,
               age: age,
               birthday: birthday,
               address: address,
               email: email,
               contact_number: contact_number,
               incase_of_emergency: incase_of_emergency,
               job_title: job_title,
               salary: salary,
               start_date: start_date,
               end_date: end_date,
               contract: contract,
               department: department,
               is_active: is_active,
               sss: sss,
               pagibig: pagibig,
               tin: tin,
               philhealth: philhealth,
               bank_name: bank_name,
               bank_account_number: bank_account_number,
               sick_leave: sick_leave,
               vacation_leave: vacation_leave,
               emergency_leave: emergency_leave,
               photo: photo,
               username: username,
               password: password
          }

          const response = await fetch('/api/employee', {
               method: 'POST',
               body: JSON.stringify(employees),
               headers: {
                    'Content-Type': 'application/json'
               }
          })
          const json = await response.json()
          if (!response.ok) {
               setError(json.error)
          }
          else {
               setEmployee_id('')
               setFirstname('')
               setMiddleName('')
               setLastname('')
               setAge('')
               setBirthday('')
               setAddress('')
               setEmail('')
               setContact_number('')
               setIncase_of_emergency('')
               setJob_title('')
               setSalary('')
               setStart_date('')
               setEnd_date('')
               setContract('')
               setDepartment('')
               setIs_active('')
               setSss('')
               setPagibig('')
               setTin('')
               setPhilhealth('')
               setBank_name('')
               setBank_account_number('')
               setSick_leave('')
               setVacation_leave('')
               setEmergencty_leave('')
               setPhoto('')
               setUsername('')
               setPassword('')

               console.log('New department added', json)
          }
          window.location.reload();
     }

     const handlePatch = async (e) => {
          e.preventDefault()
          const employees = {
               employee_id: employee_id,
               firstname: firstname,
               middlename: middlename,
               lastname: lastname,
               age: age,
               birthday: birthday,
               address: address,
               email: email,
               contact_number: contact_number,
               incase_of_emergency: incase_of_emergency,
               job_title: job_title,
               salary: salary,
               start_date: start_date,
               end_date: end_date,
               contract: contract,
               department: department,
               is_active: is_active,
               sss: sss,
               pagibig: pagibig,
               tin: tin,
               philhealth: philhealth,
               bank_name: bank_name,
               bank_account_number: bank_account_number,
               sick_leave: sick_leave,
               vacation_leave: vacation_leave,
               emergency_leave: emergency_leave,
               photo: photo,
               username: username,
               password: password
          }

          const response = await fetch('/api/employee/' + id, {
               method: 'PATCH',
               body: JSON.stringify(employees),
               headers: {
                    'Content-Type': 'application/json'
               }
          })
          const json = await response.json()
          if (!response.ok) {
               setError(json.error)
          }
          else {
               setEmployee_id('')
               setFirstname('')
               setMiddleName('')
               setLastname('')
               setAge('')
               setBirthday('')
               setAddress('')
               setEmail('')
               setContact_number('')
               setIncase_of_emergency('')
               setJob_title('')
               setSalary('')
               setStart_date('')
               setEnd_date('')
               setContract('')
               setDepartment('')
               setIs_active('')
               setSss('')
               setPagibig('')
               setTin('')
               setPhilhealth('')
               setBank_name('')
               setBank_account_number('')
               setSick_leave('')
               setVacation_leave('')
               setEmergencty_leave('')
               setPhoto('')
               setUsername('')
               setPassword('')

               console.log('Edited Department', json)
          }
          window.location.reload();
     }

     /**DELETE */
     const handleDelete = async () => {
          const response = await fetch('/api/employee/' + id, {
               method: 'DELETE'
          })
          const json = await response.json()
          if (response.ok) {
               console.log('deleted', json)
          }
          window.location.reload();
     }
     const [employees, setEmployee] = useState([])
     useEffect(() => {
          const fetchEmployees = async () => {
               const response = await fetch('/api/employee')
               const json = await response.json()

               if (response.ok) {
                    setEmployee(json)
               }
          }
          fetchEmployees();
     }, [])

     const handleRowClick = async (params) => {
          setId(params.row._id);

     };
     const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


     return (

          <Container>
               <Wrapper>
                    <Main>
                         <Header title={props.title} user={props.user} />
                         <Card>
                              <SearchContainer>
                                   <TextField
                                        required
                                        id="search"
                                        label="Search"
                                        fullWidth
                                        onChange={(e) => setQuery(e.target.value)}
                                   />
                              </SearchContainer>
                              <div style={{ height: 475, width: '100%' }}>
                                   <DataGrid
                                        getRowId={(row) => row._id}
                                        rows={employees.filter((employee) =>
                                             employee.firstname.toLowerCase().includes(query))}
                                        columns={columns}
                                        pageSize={7}
                                        rowsPerPageOptions={[5]}
                                        onRowClick={handleRowClick}
                                   />
                                   <ButtonContainer>
                                        <ThemeProvider theme={theme}>
                                             <Button style={{ marginTop: "20px", marginRight: "5px" }} variant="outlined" color="green" onClick={handleOpenAdd}>
                                                  Add New
                                             </Button>
                                        </ThemeProvider>
                                        <EditDeleteContainer>
                                             <ThemeProvider theme={theme}>
                                                  <Button style={{ marginTop: "20px", marginRight: "5px" }} variant="outlined" color="blue" onClick={handleOpenEdit}>
                                                       Edit
                                                  </Button>
                                                  <Button style={{ marginTop: "20px" }} variant="outlined" color="red" onClick={handleOpenDelete}>
                                                       Delete
                                                  </Button>
                                             </ThemeProvider>
                                        </EditDeleteContainer>
                                   </ButtonContainer>
                                   <Dialog
                                        open={openDelete}
                                        onClose={handleCloseDelete}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                   >
                                        <DialogTitle id="alert-dialog-title">
                                             {"Are you sure to delete selected item?"}
                                        </DialogTitle>
                                        <DialogContent>
                                             <DialogContentText id="alert-dialog-description">
                                                  Deleted item can't be undone. Confirm by clicking "Delete"
                                             </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                             <Button onClick={handleDelete}>Delete</Button>
                                             <Button onClick={handleCloseDelete} autoFocus>
                                                  Cancel
                                             </Button>
                                        </DialogActions>
                                   </Dialog>

                                   <Dialog
                                        fullScreen={fullScreen}
                                        open={openEdit}
                                        onClose={handleCloseEdit}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"

                                   >
                                        <DialogTitle id="alert-dialog-title">

                                             Editing Department
                                        </DialogTitle>
                                        <DialogContent style={{ height: '150px', paddingTop: '20px' }}>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Department"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       // onChange={(e) => setDepartment_name(e.target.value)}
                                                       value={department}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Department Description"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                  // onChange={(e) => setDescription(e.target.value)}
                                                  // value={description}
                                                  />
                                             </FormContainer>
                                        </DialogContent>
                                        <DialogActions>
                                             <Button onClick={handlePatch}>Update</Button>
                                             <Button onClick={handleCloseEdit} autoFocus>
                                                  Cancel
                                             </Button>
                                        </DialogActions>
                                   </Dialog>
                                   <Dialog
                                        fullScreen={fullScreen}
                                        open={openAdd}
                                        onClose={handleCloseAdd}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                        fullWidth
                                        maxWidth="xl"
                                   >
                                        <DialogTitle id="alert-dialog-title">

                                             Adding New Employee
                                        </DialogTitle>
                                        <DialogContent style={{ height: '700px', paddingTop: '20px' }}>
                                             <FormSeparator>
                                                  Personal Details
                                             </FormSeparator>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Employee ID"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setEmployee_id(e.target.value)}
                                                       value={employee_id}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Firstname"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setFirstname(e.target.value)}
                                                       value={firstname}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Middlename"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setMiddleName(e.target.value)}
                                                       value={middlename}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Lastname"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setLastname(e.target.value)}
                                                       value={lastname}
                                                  />
                                             </FormContainer>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Age"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setAge(e.target.value)}
                                                       value={age}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Birthday"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setBirthday(e.target.value)}
                                                       value={birthday}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Email"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setEmail(e.target.value)}
                                                       value={email}
                                                  />
                                                  <TextField
                                                       required
                                                       type="number"
                                                       id="outlined-required"
                                                       label="Contact Number"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setContact_number(e.target.value)}
                                                       value={contact_number}
                                                  />
                                             </FormContainer>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Address"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setAddress(e.target.value)}
                                                       value={address}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Incase of Emergency"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setIncase_of_emergency(e.target.value)}
                                                       value={incase_of_emergency}
                                                  />
                                             </FormContainer>
                                             <FormSeparator>
                                                  Job Details
                                             </FormSeparator>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Job Title"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setJob_title(e.target.value)}
                                                       value={job_title}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Contract"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setContract(e.target.value)}
                                                       value={contract}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Department"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setDepartment(e.target.value)}
                                                       value={department}
                                                  />

                                             </FormContainer>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Is Active?"
                                                       fullWidth
                                                       select
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setIs_active(e.target.value)}
                                                       value={is_active}
                                                  >
                                                       <MenuItem value={true}>Yes</MenuItem>
                                                       <MenuItem value={false}>Not anymore</MenuItem>
                                                  </TextField>
                                                  <TextField
                                                       type="number"
                                                       required
                                                       id="outlined-required"
                                                       label="Salary"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setSalary(e.target.value)}
                                                       value={salary}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Start Date"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setStart_date(e.target.value)}
                                                       value={start_date}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="End Date"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setEnd_date(e.target.value)}
                                                       value={end_date}
                                                  />
                                             </FormContainer>
                                             <FormSeparator>
                                                  Government Taxes
                                             </FormSeparator>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="SSS"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setSss(e.target.value)}
                                                       value={sss}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Pagibig"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setPagibig(e.target.value)}
                                                       value={pagibig}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="TIN"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setTin(e.target.value)}
                                                       value={tin}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Philhealth"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setPhilhealth(e.target.value)}
                                                       value={philhealth}
                                                  />
                                             </FormContainer>
                                             <FormSeparator>
                                                  Bank Details
                                             </FormSeparator>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Bank Name"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setBank_name(e.target.value)}
                                                       value={bank_name}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Account Number"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setBank_account_number(e.target.value)}
                                                       value={bank_account_number}
                                                  />
                                             </FormContainer>
                                             <FormSeparator>
                                                  Leave Credits
                                             </FormSeparator>
                                             <FormContainer>
                                                  <TextField
                                                       type="number"
                                                       required
                                                       id="outlined-required"
                                                       label="Vacation Leave"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setVacation_leave(e.target.value)}
                                                       value={vacation_leave}
                                                  />
                                                  <TextField
                                                       type="number"
                                                       required
                                                       id="outlined-required"
                                                       label="Sick Leave"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setSick_leave(e.target.value)}
                                                       value={sick_leave}
                                                  />
                                                  <TextField
                                                       type="number"
                                                       required
                                                       id="outlined-required"
                                                       label="Emergency Leave"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setEmergencty_leave(e.target.value)}
                                                       value={emergency_leave}
                                                  />
                                             </FormContainer>
                                             <FormSeparator>
                                                  Credentials
                                             </FormSeparator>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Username"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setUsername(e.target.value)}
                                                       value={username}
                                                  />
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Password"
                                                       fullWidth
                                                       style={{ paddingRight: "20px" }}
                                                       onChange={(e) => setPassword(e.target.value)}
                                                       value={password}
                                                  />
                                             </FormContainer>
                                             <FormSeparator>
                                                  Photo
                                             </FormSeparator>
                                             <FormContainer>
                                                  <TextField
                                                       required
                                                       id="outlined-required"
                                                       label="Photo Link"
                                                       style={{ paddingRight: "20px" }}
                                                       fullWidth
                                                       onChange={(e) => setPhoto(e.target.value)}
                                                       value={photo}
                                                  />
                                             </FormContainer>

                                        </DialogContent>
                                        <DialogActions>
                                             <Button onClick={handleAdd}>Add</Button>
                                             <Button onClick={handleCloseAdd} autoFocus>
                                                  Cancel
                                             </Button>
                                        </DialogActions>
                                   </Dialog>
                                   <Dialog
                                        open={openWarning}
                                        onClose={handleCloseWarning}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                   >
                                        <DialogTitle id="alert-dialog-title">

                                             <h2>{"No data has been selected"}</h2>
                                        </DialogTitle>
                                        <DialogContent>
                                             <DialogContentText id="alert-dialog-description">
                                                  You need to select a data first before deleting/editing
                                             </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                             <Button onClick={handleCloseWarning} autoFocus>
                                                  Okay
                                             </Button>
                                        </DialogActions>
                                   </Dialog>

                              </div>
                         </Card>
                    </Main>
               </Wrapper>
          </Container>

     )
}

export default Employees