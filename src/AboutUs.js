import React from 'react'
import Navbar from './Navbar'
import './AboutUs.css'
import DownloadBox from './DownloadBox'
import Footer from './Footer'
import Home_Aboutus from './Assets/Home_Aboutus.png'
import Aboutus2 from './Assets/Aboutus2.png'
import './Home.css'
import Aboutus1 from './Assets/Aboutus1.png'
import Badge6 from './Assets/Badge6.png'
import Badge1 from './Assets/Badge1.png'
import Badge2 from './Assets/Badge2.png'
import Badge3 from './Assets/Badge3.png'
import Rectangle1 from './Assets/Rectangle1.png'
import Vector from './Assets/Vector.png'
import tickBox from './Assets/tickBox.png'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
        <div style={{height: "400px", background: "radial-gradient(92.92% 241.58% at 30.21% -65.01%, rgba(247, 247, 247, 0.2) 32%, rgba(244, 246, 246, 0.2) 41%, rgba(234, 243, 245, 0.2) 47%, rgba(218, 238, 242, 0.2) 54%, rgba(194, 230, 237, 0.2) 59%, rgba(164, 221, 232, 0.2) 65%, rgba(128, 209, 225, 0.2) 70%, rgba(99, 200, 220, 0.2) 74%, rgba(212, 235, 240, 0.2) 100%)"}}>
          <Navbar/>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "284px"}}>
          <div className='direction' style={{display: "flex", flexDirection: "row", width: "150px", justifyContent: "space-between", height: "25px", alignItems: "center", margin: "25px 0px", cursor: "pointer"}}>
          <Link className='nav-link' to="/"><div className='homeAnchor'>Home</div></Link> 
          <i style={{color: "#00B49E"}} class="fa-sharp fa-solid fa-angle-right"></i>
          <div className='profileAnchor'>About Us</div>
        </div>
            <div className='subHead' style={{color: "#345369"}}>Who we are?</div>
          </div>
        </div>
        <div className='AboutUs_Emergency' style={{backgroundImage: `url(${Aboutus2})`}}>
          <div className='Emergency_Box'>
            <div className='heading'>
              Sarathi Care
            </div>
            <div className='subHead'style={{color: "#345369"}}>
              Har Kadam pe  <br/> Aapka Sahara
            </div>
            <div className='text1'>
            At Sarathi Care we aim to become your partner in your journey to good health.
            </div>
            <div className='middle'>
              <div className='middle1'>
                <div className= 'docSer'>Our Mission</div>
                <div className='boxText'>Sarathi Care is on a mission to be the trusted and reliable healthcare partner for every Indian</div>
              </div>
              <div className='middle1'>
                <div className= 'docSer'>Our Vision</div>
                <div className='boxText'>To make affordable and reliable healthcare accessible to everyone</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{display: "flex", flexDirection: "row",height: "500px", paddingLeft:"150px"}}>
          <div style={{display: "flex", flexDirection: "column" , width: "550px"}}>
            <div className='heading'>About Us</div>
            <div className='subHead' style={{display: "flex", flexDirection: "column"}}>
              <div style={{color: "#345369"}}>We Exist Because </div>
              <div style={{color: "#345369"}}>We <span style={{color: "#00B49E"}}>Care For You</span></div>
              <img src={Vector} alt= 'Vector' style={{width: "180px", height: "32px", marginLeft: "120px"}}/>
          </div>
          <div className='text1'>Sarathi Care is the trusted and reliable partner for all your healthcare requirements.</div>
          <div style={{display: "flex", flexDirection: "column", height: "170px", gap: "15px", marginTop: "10px"}}>
            <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
              <img src={tickBox} alt= 'tickBox' style={{width: "20px", height: "20px"}}/>
              <div className='tickNext'>Experienced Doctors</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
              <img src={tickBox} alt= 'tickBox'style={{width: "20px", height: "20px"}}/>
              <div className='tickNext'>Caring Nurses</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
              <img src={tickBox} alt= 'tickBox'style={{width: "20px", height: "20px"}}/>
              <div className='tickNext'>Understanding Counselors</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
              <img src={tickBox} alt= 'tickBox'style={{width: "20px", height: "20px"}}/>
              <div className='tickNext'>Affordable Pricing</div>
            </div>
          </div>
            <Link to="/AboutUs"><button type="button" class="btn btn-primary btn-lg" style={{margin: "10px 80px 10px 5px", boxShadow: "0px 11px 31px rgba(0, 140, 238, 0.4)",borderRadius: "10px", backgroundColor: "#0075C8", border: "none"}}>More About Us</button></Link>
          </div>
          <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <div className='box1'>
                <div className='styleBadge' style={{width: "90px", height: "90px"}}>
                  <img src={Badge1} alt='Badge6' style={{margin: "auto"}}/>
                </div>
                <div className='box2'>
                  <div>8900+</div>
                </div>
              </div>
              <div className='box1'>
                <div className='styleBadge' style={{width: "90px", height: "90px"}}>
                  <img src={Badge6} alt='Badge6' style={{margin: "auto"}}/>
                </div>
                <div className='box2'>
                  <div>8900+</div>
                </div>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <div className='box1' style={{backgroundImage: `url(${Rectangle1})`}}>
                <div className='styleBadge' style={{width: "90px", height: "90px"}}>
                  <img src={Badge2} alt='Badge6' style={{margin: "auto"}}/>
                </div>
                <div className='box2'>
                  <div>8900+</div>
                </div>
              </div>
              <div className='box1'>
                <div className='styleBadge' style={{width: "90px", height: "90px"}}>
                  <img src={Badge3} alt='Badge6' style={{margin: "auto"}}/>
                </div>
                <div className='box2'>
                  <div>8900+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DownloadBox/>
        <Footer/>
    </div>
  )
}

export default AboutUs
