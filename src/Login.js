import React from 'react'
// import './Login.css'
import LoginBack from './Assets/LoginBack.png'
import logo from './Assets/logo.png'
import './RegisterNow.css'

const Login = () => {
  return (
    <div style={{backgroundImage: `url(${LoginBack})`, backgroundRepeat: "no-repeat", backgroundPosition: "right bottom"}}>
      <div style={{display: "flex", flexDirection: "row", marginTop: "75px"}}>
        <div className='RegisterBox'>
            <img src={logo} alt= 'logo'  style={{width: "177px", height: "52px"}}/>
            <div className='subHead1' style={{marginTop: "35px"}}>
                Let's Begin
            </div>
            <div className='text3'>
                Sed ut perspiciatis unde omnis iste natus error sitable
            </div>
            <div style={{width: "350px", height: "200px", marginTop: "20px"}}>
                <form style={{display: "flex", flexDirection: "column",  gap: "10px"}}>
                    <input className='inputField4' style={{width: "350px", height: "60px"}}  type="text" placeholder="Name*" aria-label="Service"/>
                    <input className='inputField5' style={{width: "350px", height: "60px"}}  type="text" placeholder="Name*" aria-label="Service"/>
                    <input className='inputField6' style={{width: "350px", height: "60px"}}  type="text" placeholder="Name*" aria-label="Service"/>
                </form>
                <div style={{display: "flex", flexDirection :"row", justifyContent: "space-between", marginTop: "15px"}}>
                  <div style={{display: "flex", flexDirection: "row", width: "115px", justifyContent: "space-between"}}>
                    <input type="checkbox" style={{width: "20px", height: "20px", borderRadius: "4px"}}/>
                    <div className='RememberME'>Remember me</div>
                  </div>
                  <div className='Forgot'>Login via otp</div>
                </div>
                <div style={{marginTop: "15px"}}>
                  <button className='btnRegister'>Login</button>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "20px"}} className='LoginBottom'>
                  <div>Don't have an account? </div>

                  <div style={{color: "#0075C8"}}>Sign up for free</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
