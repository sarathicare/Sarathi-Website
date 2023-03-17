import React, {useState} from 'react'
import Navbar from './Navbar'
import './Profile.css'
import DownloadBox from './DownloadBox'
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Profile = () => {

  const MyProfile = () =>{
    return(
      <div>
        <form>
          <input type= 'text'></input>
          <input type= 'text'></input>
        </form>
      </div>
    )
  }

  const Pass = () =>{
    return(
      <div>
        Hey there!
      </div>
    )
  }

  const changeProfile = (e) =>{
    newCompo(e)
    console.log("1");
  }

  const [compo, newCompo]= useState(MyProfile) ;

  return (
    <div>
      <Navbar/>
      <div style={{paddingLeft: "150px"}}>
        <div className='direction' style={{display: "flex", flexDirection: "row", width: "150px", justifyContent: "space-between", height: "25px", alignItems: "center", margin: "25px 0px", cursor: "pointer"}}>
          <Link className='nav-link' to="/"><div className='homeAnchor'>Home</div></Link> 
          <i style={{color: "#00B49E"}} class="fa-sharp fa-solid fa-angle-right"></i>
          <div className='profileAnchor'>Profile</div>
        </div>
        <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
          <div className='welcomeBox'>
            <div>Welcome</div>
            <div>Raj Kumar</div>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <div className='headMP'>My Profile</div>
            <div style={{display: "flex", flexDirection: "row"}}>
              <div className='profileTop' onClick={()=>changeProfile(MyProfile)}>Profile Settings</div>
              <div className='profileTop' onClick={()=>changeProfile(Pass)}>Password</div>
              <div className='profileTop'>Other Settings</div>
            </div>
            <div className='profileBox'>
            <form style={{display: "flex", flexDirection: "column", gap: "15px"}}>
              <div style={{display: "flex", flexDirection: "row", gap: "12px"}}>
                <div className='inputField5'><label for='name'>First Name*</label>
                  <input type='text' name='Name' placeholder='abc'></input></div>
                <div className='inputField5'><label for='name'>Last Name*</label>
                  <input  type='text' name='Name' placeholder='abc'></input></div>
              </div>
              <div style={{display: "flex", flexDirection: "row", gap: "12px"}}>
                <div className='inputField5'><label for='name'>Phone number*</label>
                  <input type='text' name='Name' placeholder='123'></input></div>
                <div className='inputField5'><label for='name'>Email address*</label>
                  <input  type='text' name='Name' placeholder='@gmail.com'></input></div>
              </div>
              <div style={{display: "flex", flexDirection: "row", gap: "12px"}}>
                <div className='inputField5'><label for='name'>Full Name*</label>
                  <input type='date' name='Name' placeholder='Type your name'></input></div>
                <div className='inputField5'><label for='name'>Full Name*</label>
                  <input  type='text' name='Name' placeholder='Type your name'></input></div>
              </div>
              <div style={{display: "flex", flexDirection: "row", gap: "12px"}}>
                <div className='inputField5'><label for='name'>Full Name*</label>
                  <input type='text' name='Name' placeholder='Type your name'></input></div>
                <div className='inputField5'><label for='name'>Full Name*</label>
                  <input  type='text' name='Name' placeholder='Type your name'></input></div>
              </div>
              <div style={{display: "flex", flexDirection: "row", gap: "12px"}}>
                <div className='inputField5'><label for='name'>Full Name*</label>
                  <input type='text' name='Name' placeholder='Type your name'></input></div>
                <div className='inputField5'><label for='name'>Full Name*</label>
                  <input  type='text' name='Name' placeholder='Type your name'></input></div>
              </div>
            </form>
            </div>
          </div>
          <compo/>
        </div>
      </div>
      <DownloadBox/>
      <Footer/>
    </div>
  )
}

export default Profile
