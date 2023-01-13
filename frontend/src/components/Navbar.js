import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import PasswordIcon from '@mui/icons-material/Password';
import WorkIcon from '@mui/icons-material/Work';
import SampleLogo from '../images/logo.JPG'



const Container = styled.div`
     background-color: white;
     height: 100vh;
     width: 300px;
     color: #8d89b4;
`
const LogoContainer = styled.div`
     display: flex;
     justify-content: left;
     align-items: center;
     padding-left: 40px;
`
const Logo = styled.div`
     width: 200px;
     margin: 80px 0 50px 0;
     padding-left: 10px;
`
const SampleLogoContainer = styled.img`
     width: 70px;
`
const NavContainer = styled.div`
     width: 350px;
     padding-left: 100px;
`
const NavList = styled.div`
     padding: 10px;
`


const Navbar = () => {
     return (
          <Container>
               <LogoContainer>
                    <SampleLogoContainer src={SampleLogo}></SampleLogoContainer>
                    <Logo style={{ color: "purple", fontSize: "30px", fontWeight: "600" }}>HHH HR</Logo>
               </LogoContainer>
               <List
                    sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}
                    component="nav">
                    <ListItemButton>
                         <div style={{ paddingLeft: "40px" }}>
                              <ListItemIcon>
                                   <PeopleAltIcon />
                              </ListItemIcon>
                         </div>
                         <ListItemText primary="Employees" />
                    </ListItemButton>
                    <ListItemButton>
                         <div style={{ paddingLeft: "40px" }}>
                              <ListItemIcon>
                                   <WorkIcon />
                              </ListItemIcon>
                         </div>
                         <ListItemText primary="Departments" />
                    </ListItemButton>
                    <ListItemButton>
                         <div style={{ paddingLeft: "40px" }}>
                              <ListItemIcon>
                                   <PaidIcon />
                              </ListItemIcon>
                         </div>
                         <ListItemText primary="Salary" />
                    </ListItemButton>
                    <ListItemButton>
                         <div style={{ paddingLeft: "40px" }}>
                              <ListItemIcon>
                                   <NoAccountsIcon />
                              </ListItemIcon>
                         </div>
                         <ListItemText primary="Leaves" />
                    </ListItemButton>
                    <ListItemButton>
                         <div style={{ paddingLeft: "40px" }}>
                              <ListItemIcon>
                                   <PasswordIcon />
                              </ListItemIcon>
                         </div>
                         <ListItemText primary="Credentials" />
                    </ListItemButton>
               </List>
          </Container>












          // <header>
          //      <Container>
          //           <Logo>HR System</Logo>
          //           <NavContainer>
          //                <NavList>
          //                     <Link to='/'>  
          //                          <h1>Employees</h1>
          //                     </Link>
          //                </NavList>
          //                <NavList>
          //                     <Link to='/'>
          //                          <h1>Departments</h1>
          //                     </Link>
          //                </NavList>
          //                <NavList>
          //                     <Link to='/'>
          //                          <h1>Salary</h1>
          //                     </Link>
          //                </NavList>
          //                <NavList>
          //                     <Link to='/'>
          //                          <h1>Leaves</h1>
          //                     </Link>
          //                </NavList>
          //                <NavList>
          //                     <Link to='/'>
          //                          <h1>Credentials</h1>
          //                     </Link>
          //                </NavList>





          //           </NavContainer>

          //      </Container>
          // </header>
     )
}

export default Navbar