import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { fontWeight } from '@mui/system';
import SampleLogo from '../images/logo.JPG'



const Container = styled.div`
     background-color: white;
     height: 100vh;
     width: 400px;
     padding: 25px;
`
const LogoContainer = styled.div`
     display: flex;
     justify-content: left;
     align-items: center;
`
const Logo = styled.div`
     width: 200px;
     margin: 30px 0 50px 0;
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
     const [open, setOpen] = React.useState(false);

     const handleClick = () => {
          setOpen(!open);
     };

     return (
          <Container>
               <LogoContainer>
                     <SampleLogoContainer src={SampleLogo}></SampleLogoContainer>
                     <Logo style={{color: "purple", fontSize: "30px", fontWeight: "600"}}>HHH HR</Logo>
               </LogoContainer>
                  
          <List
              
               sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper'}}
               component="nav"
               aria-labelledby="nested-list-subheader"
             >
               <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                         <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Employees" />
                    {open ? <ExpandLess /> : <ExpandMore />}
               </ListItemButton>
               <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                         <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                   <StarBorder />
                              </ListItemIcon>
                              <ListItemText primary="Add New" />
                         </ListItemButton>
                    </List>
               </Collapse>
               <ListItemButton>
                    <ListItemIcon>
                         <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Departments" />
               </ListItemButton>
               <ListItemButton>
                    <ListItemIcon>
                         <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Salary" />
               </ListItemButton>
               <ListItemButton>
                    <ListItemIcon>
                         <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Leaves" />
               </ListItemButton>
               <ListItemButton>
                    <ListItemIcon>
                         <DraftsIcon />
                    </ListItemIcon>
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