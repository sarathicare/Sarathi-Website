import React, {useState} from 'react'
import formImg from './Assets/formImg.png';
import './Forms.css'
import form1 from './Assets/form1.png'
import docBadge from './Assets/docBadge.png'
import gpBadge from './Assets/gpBadge.png'
import appleBadge from './Assets/appleBadge.png'
import India from './Assets/India.png'

var docArr=['a', 'b', 'c', 'd'];
var counArr=['a', 'b', 'd'];
var NurseArr=['a', 'b', 'e'];


const CallNow = () => {

const updateArray = (newAry) => {
  newArr(newAry);
}

const [arr, newArr] = useState([]);

    const mystyle2={
        boxSizing: "border-box",
        position: "absolute",
        height: "280px",
        left: "170px",
        width: "1140px",
        background: "rgba(255, 255, 255, 0.8)",
        marginTop: "80px",
      
        border: "4px solid #FFFFFF",
        boxShadow: "0px 14px 34px rgba(0, 117, 200, 0.07)",
        backdropFilter: "blur(18px)",
        borderRadius: "30px"
      };
      const PhNo={
        backgroundImage: `url(${India})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "20px center"
      }
      
  return (
    <div>
      <div style= {mystyle2}>
            <div style= {{display: "flex", flexDirection: "row", width: "500px", height: "40px", marginLeft: "40px", marginTop: "20px", justifyContent: "space-between"}}>
              <div className='categoryAnchor' style={{width: "96px", gap: "10px"}}>
                <img style= {{height: "22px", width: "21px"}} src={docBadge} alt= 'docBadge'/>
                <div className='category2' onClick={()=>updateArray(docArr)}>Doctor</div>
              </div>
              <div className='categoryAnchor' style={{width: "110px", gap: "10px"}}>
                <img style= {{height: "22px", width: "21px"}} src={docBadge} alt= 'docBadge'/>
                <div className='category2' onClick={()=>updateArray(counArr)}>Counselor</div>
              </div>
              <div className='categoryAnchor' style={{width: "96px", gap: "10px"}}>
                <img style= {{height: "22px", width: "21px"}} src={docBadge} alt= 'docBadge'/>
                <div className='category2' onClick={()=>updateArray(NurseArr)}>Nurse</div>
              </div>
            </div>
            <div style= {{display: "flex", justifyContent: "space-between", marginLeft: "40px", flexDirection: "row", alignItems: "center", height: "120px", marginRight: "40px"}}>
              <div className='inputField'>
                <label for='Service'>Service*</label>
                {/* <input type='text' name='Service' placeholder='Service we provide'></input></div> */}
                <select className='callNowSelect'><option selected>Services we Provide</option>{arr.map(fbb =><option>{fbb}</option>)}</select>
              </div>
              <div className='inputField'><label for='name'>Full Name*</label>
                <input className='callNowInput' type='text' name='Name' placeholder='Type your name'></input></div>
              <div className='inputField' id='PhNo'><label for='Ph no.'>Phone number*</label>
                <input className='callNowInput' type='text' name='Ph no.' placeholder='         +91 98 7654 3210' style={PhNo}></input></div>
                    <button className= "inputButton">Call Now</button>
            </div>
        </div>
    </div>
  )
}

export default CallNow
