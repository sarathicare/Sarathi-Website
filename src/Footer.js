import React from 'react'
import logo from './Assets/logo.png';
import social1 from './Assets/social1.png';
import social2 from './Assets/social2.png';
import social3 from './Assets/social3.png';
import social4 from './Assets/social4.png';
import './Footer.css'
import gpBadge from './Assets/gpBadge.png'
import appleBadge from './Assets/appleBadge.png'


const Footer = () => {
  
  return (
    <div style={{display: "flex", flexDirection: "row", height: "300px"}}>
      <div style={{display: "flex", flexDirection: "column" , marginLeft: "150px", width: "450px", paddingTop: "30px"}}>
        <img src={logo} alt= 'logo' style={{width: "177px", height: "53px"}}/>
        <div style={{width: "370px", height: "40px", fontFamily: "Daikon",fontStyle: "normal",fontWeight: "500",fontSize: "16px;",lineHeight: "24px",letterSpacing: "-0.02em",color: "#838383", marginTop: "20px"}}>Your Partner in journey towards Good Health</div>
        <div style={{display: "flex", flexDirection: "row", width: "300px", justifyContent: "space-between", marginTop: "40px"}}>
          <img src= {social1} alt= 'social1'/>
          <img src= {social2} alt= 'social2'/>
          <img src= {social3} alt= 'social3'/>
          <img src= {social4} alt= 'social4'/>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column" , margin: "30px"}}>
        <h2>Services</h2>
        <div style={{display: "flex", flexDirection: "column" , height: "150px", justifyContent: "space-between" , marginTop: "20px"}}>
          <h6>Doctors</h6>
          <h6>Nurses</h6>
          <h6>Counselors</h6>
          <h6>Japa</h6>
          <h6>More</h6>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column" , margin: "30px"}}>
        <h2>Information</h2>
        <div style={{display: "flex", flexDirection: "column", height: "150px", justifyContent: "space-between" , marginTop: "20px"}}>
          <h6>Sign Up</h6>
          <h6>Join Community</h6>
          <h6>Learning</h6>
          <h6>Newsletter</h6>
          <h6>Contact Us</h6>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column" , margin: "30px"}}>
        <h2>Links</h2>
        <div style={{display: "flex", flexDirection: "column" , height: "150px", justifyContent: "space-between" , marginTop: "20px"}}>
          <h6>Home</h6>
          <h6>Services</h6>
          <h6>About Us</h6>
          <h6>Blogs</h6>
          <h6>T&C</h6>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column" , margin: "30px"}}>
        <h2>Download App</h2>
        <div style={{display: "flex", flexDirection: "column" , height: "150px", justifyContent: "space-between", marginTop: "20px"}}>
          <img src={gpBadge} alt= 'gpBadge' style={{height: "54px", width: "180px"}}/>
          <img src= {appleBadge} alt= 'appleBadge' style={{height: "54px", width: "180px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
