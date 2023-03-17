import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home_Services from './Assets/Home_Services.png'
import Home_Contactus from './Assets/Home_Contactus.png'
import './Home.css'
import Badge9 from './Assets/Badge9.png'
import Badge10 from './Assets/Badge10.png'
import Badge11 from './Assets/Badge11.png'
import Badge12 from './Assets/Badge12.png'
import DownloadBox from './DownloadBox'
import './ContactUs.css'
import Vector from './Assets/Vector.png'
import social1 from './Assets/social1.png';
import social2 from './Assets/social2.png';
import social3 from './Assets/social3.png';
import social4 from './Assets/social4.png';
import Icon1 from './Assets/Icon1.png'
import Icon2 from './Assets/Icon2.png'
import Icon3 from './Assets/Icon3.png'
import Icon4 from './Assets/Icon4.png'
import Icon5 from './Assets/Icon5.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const ContactUs = () => {
  const inputField1={
    backgroundImage: `url(${Icon1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "200px center"
  }
  const inputField2={
    backgroundImage: `url(${Icon2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "200px center"
  }
  const inputField3={
    backgroundImage: `url(${Icon3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "450px center"
  }
  const inputField4={
    backgroundImage: `url(${Icon4})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "450px center"
  }
  const inputField5={
    backgroundImage: `url(${Icon5})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "450px center"
  }
  return (
    <div>
      <div style={{height: "400px", background: "radial-gradient(92.92% 241.58% at 30.21% -65.01%, rgba(247, 247, 247, 0.2) 32%, rgba(244, 246, 246, 0.2) 41%, rgba(234, 243, 245, 0.2) 47%, rgba(218, 238, 242, 0.2) 54%, rgba(194, 230, 237, 0.2) 59%, rgba(164, 221, 232, 0.2) 65%, rgba(128, 209, 225, 0.2) 70%, rgba(99, 200, 220, 0.2) 74%, rgba(212, 235, 240, 0.2) 100%)"}}>
        <Navbar/>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "284px"}}>
        <div className='direction' style={{display: "flex", flexDirection: "row", width: "150px", justifyContent: "space-between", height: "25px", alignItems: "center", margin: "25px 0px", cursor: "pointer"}}>
          <Link className='nav-link' to="/"><div className='homeAnchor'>Home</div></Link> 
          <i style={{color: "#00B49E"}} class="fa-sharp fa-solid fa-angle-right"></i>
          <div className='profileAnchor'>Contact Us</div>
        </div>
          <div className='subHead' style={{color: "#345369"}}>Get in Touch</div>
        </div>
      </div>

      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "450px", alignItems: "center", paddingLeft: "150px", paddingRight: "150px"}}>
        <div style={{display: "flex", flexDirection: "column", width: "247px", justifyContent: "start"}}>
          <div>
            <img src={Badge9} alt='Badge9'/>
          </div>
          <div className='docSer' style={{marginTop: "20px"}}>Office Address</div>
          <div className='text1'>
            Sed ut perspiciatis unde omnis iste natus error sitable for voluptatem accusantium doloremque laudantium,
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "247px"}}>
          <div>
            <img src={Badge10} alt='Badge9'/>
          </div>
          <div className='docSer' style={{marginTop: "20px"}}>Phone Number</div>
          <div className='text1'>
          +88028 3839 4782<br/>+88012 2390 3829
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "247px"}}>
          <div>
            <img src={Badge11} alt='Badge9'/>
          </div>
          <div className='docSer' style={{marginTop: "20px"}}>Email Address</div>
          <div className='text1'>
          yourmailaddress@gmail.com<br/>yourmailaddress@gmail.com
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "247px"}}>
          <div>
            <img src={Badge12} alt='Badge9'/>
          </div>
          <div className='docSer' style={{marginTop: "20px"}}>Blogs</div>
          <Link className="nav-link"  aria-current="page" to="/Blogs">
            <div className='ReadMore'>Read More</div>
            </Link>
        </div>
      </div>




      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingLeft: "150px", paddingRight: "150px", alignItems: "center", height: "750px"}}>
        <div  style={{display: "flex", flexDirection: "column", width: "465px"}}>
          <div className='heading'>
            Contact us
          </div>
          <div className='subHead' style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{color: "#345369"}}>Let’s Discuss </div>
            <div style={{color: "#00B49E"}}>With Us</div>
          </div>
          <div style={{display: "flex", justifyContent: "end"}}>
            <img src={Vector} alt= 'Vector' style={{width: "157px", height: "32px"}}/>
          </div>
          <div className='text1'>
          Sed ut perspiciatis unde omnis iste natus error sitable for voluptatem accusantium doloremque laudantium, totam rem aperiam varius enim in eros Whether you have a question about treatments.
          </div>
          <div style={{display: "flex", flexDirection: "row", width: "300px", justifyContent: "space-between", marginTop: "40px"}}>
          <img src= {social1} alt= 'social1'/>
          <img src= {social2} alt= 'social2'/>
          <img src= {social3} alt= 'social3'/>
          <img src= {social4} alt= 'social4'/>
        </div>
        </div>
        <div className='contactBox'>
          <form>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <input style={inputField1} className= 'inputField1' type="text" placeholder="Name*" aria-label="Service"/>
            <input style={inputField2} className= 'inputField1' type="text" placeholder="Phone Number*" aria-label="Service"/>
          </div>
          <input style={inputField3} className= 'inputField2' type="text" placeholder="Email address*" aria-label="Service"/>
          <input style={inputField4} className= 'inputField2' type="text" placeholder="Location" aria-label="Service"/>
          <input style={inputField5} className= 'inputField3' type="text" placeholder="Subject of message*" aria-label="Service"/>
          <button className='button1'>Submitt</button>
          </form>
        </div>
      </div>


      
      <DownloadBox/>
      <Footer/>
    </div>
  )
}

export default ContactUs
