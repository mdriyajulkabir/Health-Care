import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><i className="fas fa-hand-holding-medical text-end ps-5">Support Life</i> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  className='justify-text-end fw-normal'>
                <Nav className="me-auto ">
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/home'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/ourservices'>Services</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/ourdoctors'>Doctors</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/contactus'>Contact Us</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/aboutus'>About Us</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/signup'>Sign Up</Link> 
                </Nav.Link>
                {
                    user.email ?<Nav.Link style={{color:'white', textDecoration:'none'}} onClick={logOut}>Sign Out
                     </Nav.Link>:<Nav.Link>
                    <Link style={{color:'white', textDecoration:'none'}} to='/login'>Sign In</Link> 
                </Nav.Link>}
                {
                    user.email && <Nav.Link style={{color:'white', textDecoration:'none'}}>{user.displayName}</Nav.Link>
                }
                
                
               
                </Nav>
                <Navbar.Brand href="#home" style={{color:'#E12454'}}> <i className="fas fa-ambulance"></i>        <i className="fas fa-phone-alt">+1 234 567 8989</i></Navbar.Brand>
                </Navbar.Collapse>

                
            </Container>
            </Navbar>
            {/* {
                    user.email ?
                     <button onClick={logOut}>Sign Out</button>:
                    <Link style={{color:'', textDecoration:'none'}} to='/signin'>Sign In</Link> 
                } */}
        </>
    );
};

export default Header;