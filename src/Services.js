import React from 'react'
import Navbar from './Navbar'
import Form from './Form.js'
import './Forms.css'
import Home_Services from './Assets/Home_Services.png'
import './Home.css'
import Vector from './Assets/Vector.png'
import docBadge from './Assets/docBadge.png'
import Aboutus1 from './Assets/Aboutus1.png'
import CallNow from './CallNow'
import Footer from './Footer'
import DownloadBox from './DownloadBox'
import './Services.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const Services = () => {
  return (
    <div>
      <div style={{height: "400px", background: "radial-gradient(92.92% 241.58% at 30.21% -65.01%, rgba(247, 247, 247, 0.2) 32%, rgba(244, 246, 246, 0.2) 41%, rgba(234, 243, 245, 0.2) 47%, rgba(218, 238, 242, 0.2) 54%, rgba(194, 230, 237, 0.2) 59%, rgba(164, 221, 232, 0.2) 65%, rgba(128, 209, 225, 0.2) 70%, rgba(99, 200, 220, 0.2) 74%, rgba(212, 235, 240, 0.2) 100%)"}}>
        <Navbar/>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "284px"}}>
        <div className='direction' style={{display: "flex", flexDirection: "row", width: "150px", justifyContent: "space-between", height: "25px", alignItems: "center", margin: "25px 0px", cursor: "pointer"}}>
          <Link className='nav-link' to="/"><div className='homeAnchor'>Home</div></Link> 
          <i style={{color: "#00B49E"}} class="fa-sharp fa-solid fa-angle-right"></i>
          <div className='profileAnchor'>Services</div>
        </div>
          <div className='subHead' style={{color: "#345369"}}>Service we provide to you</div>
        </div>
      </div>

      {/* End of part 1 */}

      <div style={{height: "700px", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px"}}>
        <div className='heading'>
          Our services
        </div>
        <div className='subHead' style={{display: "flex", flexDirection: "row"}}>
          <div style={{color: "#345369", marginRight: "10px"}}>Sarathi - Har Kadam<span style={{color: "#00B49E"}}> pe Aapka Sahara</span></div> 
        </div>
        <div>
          <img src={Vector} alt= 'Vector'/>
        </div>


        <div style={{display: "flex", flexDirection: "row", justifyContent: "centre", marginTop: "80px", height: "400px"}}>
          <div className='box' style= {{width: "274px" ,height: "340px" , margin: "10px"}}>
              <div className='boxTop' style={{display: "flex", flexDirection: "row",margin: "30px", alignItems: "center", gap: "20px"}}>
                <div className='styleBadge'>
                  <img src={docBadge} alt='docBadge' class= 'center'/>
                </div>
                <div className= 'docSer'>
                  Doctor
                </div>
              </div>
              <div className='boxText'  style= {{marginBottom: "60px"}}>
                Consult with the most experienced and qualified doctors 
              </div>
              <div className='learnMore'>
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
            <div className='box' style= {{width: "274px" ,height: "340px" , margin: "10px"}}>
              <div className='boxTop' style={{display: "flex", flexDirection: "row",marginTop: "30px", alignItems: "center", gap: "10px"}}>
                <div className='styleBadge'>
                  <img src={docBadge} alt='docBadge' class= 'center'/>
                </div>
                <div className= 'docSer'>
                  Counselor
                </div>
              </div>
              <div className='boxText'  style= {{marginBottom: "60px"}}>
                Want someone to hear you out? Our counselors are available for you
              </div>
              <div className='learnMore'>
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
          
            <div className='box' style= {{width: "274px" ,height: "340px" , margin: "10px"}}>
              <div className='boxTop' style={{display: "flex", flexDirection: "row",margin: "30px", alignItems: "center", gap: "10px"}}>
                <div className='styleBadge'>
                  <img src={docBadge} alt='docBadge' class= 'center'/>
                </div>
                <div className= 'docSer'>
                  Nurse
                </div>
              </div>
              <div className='boxText'  style= {{marginBottom: "60px"}}>
                Want an experienced nurse to for your home care? We are there for you!
              </div>
              <div className='learnMore'>
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
            <div className='box' style= {{width: "274px" ,height: "340px" , margin: "10px"}}>
              <div className='boxTop'style={{display: "flex", flexDirection: "row",margin: "30px", alignItems: "center", gap: "10px"}}>
                <div className='styleBadge'>
                  <img src={docBadge} alt='docBadge' class= 'center'/>
                </div>
                <div className= 'docSer'>
                  Japa
                </div>
              </div>
              <div className='boxText'  style= {{marginBottom: "60px"}}>
                Want a caretaker to provide best care to your child? Get a trained Japa now!
              </div>
              <div className='learnMore'>
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
          </div>
      </div>
      {/* End of Part 2 */}

    <div>
    <div className= "Emergency" style={{display: "flex", flexDirection: "row",flex: "1 1 0px",height: "500px"}}>
        <div style={{marginRight: "45px"}}>
          <img src= {Aboutus1} alt= 'Aboutus1' style={{height : "500px"}}/>
        </div>
        <div style={{paddingRight: "5px", width: "545px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <div className='heading'>Need Help?</div>
          <div className='subHead'>
            <div style={{color: "#345369"}}>We Exist Because We Care. </div>
            <div style={{color: "#00B49E"}}>Call Us Now</div>
          </div>
          <button className='btnEmergency'>
            Call Us: +039 2899 3897
          </button>
        </div>
      </div>

    </div>

    {/* End of PArt 3 */}

    <Form/>

    <DownloadBox/>

    <Footer/>
    </div>
  )
}

export default Services
