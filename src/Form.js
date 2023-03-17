import React from 'react'
import formImg from './Assets/formImg.png';
import './Forms.css'
import form1 from './Assets/form1.png'
import docBadge from './Assets/docBadge.png'
import gpBadge from './Assets/gpBadge.png'
import appleBadge from './Assets/appleBadge.png'
import callNow from './CallNow.js'
import CallNow from './CallNow.js';
import Vector from './Assets/Vector.png'

const Form = () => {
  return (
    <div style={{height: "900px" , backgroundImage: `url(${formImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "top right" , backgroundSize: "auto 677px", paddingLeft: "150px", paddingTop: "134px"}}>
            <div className='subHead' style={{width: "660px", height: "150px", display: "flex", flexDirection: "column"}}>
                <div  style={{color: "#00B49E"}}>
                  Your Health is our
                </div>
                <div  style={{color: "#0075C8"}}>
                  Responsibility
                </div>
                <img src={Vector} alt= 'Vector' style={{width: "180px", height: "32px", marginLeft: "90px"}} />
            </div>
            <div className='text'>
              Sarathi brings the best care to your home & stays with you in various journeys
            </div>
            <div style={{display: "flex", flexDirection: "row", marginTop: "30px", width: "350px", justifyContent: "space-between"}}>
                <img style= {{width: "168px", height: "50px"}} src= {gpBadge} alt= 'gpBadge'/>
                <img style= {{width: "168px", height: "50px"}} src= {appleBadge} alt= 'appleBadge'/>
            </div>
        <CallNow/>

    </div>

  )
}

export default Form
