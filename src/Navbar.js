import React from 'react'
import logo from './Assets/logo.png';
import './Navbar.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const Navbar = () => {
    const styleLogo = {
        margin: "20px 100px 20px 100px"
    };
    const styleMain = {
        padding: "10px 20px 0px 20px"

    };
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to="/"><img style={styleLogo}  src={logo} alt="logo" to="/"/></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/" style={styleMain}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Services" style={styleMain}>Services</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/AboutUs" style={styleMain}>About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Blogs" style={styleMain}>Blogs</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Contact Us" style={styleMain}>Contact Us</Link>
                </li>
      </ul>
    </div>
    <Link className="nav-link active" aria-current="page" to="/Login" style={{margin: "10px 10px 10px 20px", color: "#2E93A1"}}>Login</Link>
    <Link to="/RegisterNow"><button type="button" className='btnRegister1' style={{margin: "10px 80px 10px 5px"}}>Register</button></Link>
  </div>
</nav>
</>
  );
}

export default Navbar
