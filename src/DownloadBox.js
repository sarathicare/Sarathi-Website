import React from 'react'
import './DownloadBox.css'
import gpBadge from './Assets/gpBadge.png'
import appleBadge from './Assets/appleBadge.png'
import bg from './Assets/bg.png'
import mobile from './Assets/mobile.png'

const DownloadBox = () => {
  return (
    <div style={{height: "450px",display: "flex", justifyContent: "center", alignItems: "center"}}>
      <img className='mobileImg' src={mobile} alt= 'mobile'/>
      <div className='downBox'>
        <img className='demo-bg' src={bg} alt='bg'/>
        <div className='downBox1'>
          Do you want to help patients in their healthcare journey?
        </div>
        <div className='downBox2'>
          Download Sarathi Care 
          <br/>
          App Now 
        </div>
        <div style={{display: "flex", flexDirection: "row",justifyContent: "space-between", width: "370px"}}>
          <img src={gpBadge} alt= 'gpBadge' style={{height: "54px", width: "180px"}}/>
          <img src= {appleBadge} alt= 'appleBadge' style={{height: "54px", width: "180px"}}/>
        </div>
      </div>
    </div>
  )
}

export default DownloadBox
