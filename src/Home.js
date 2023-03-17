import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import './Home.css'
import Aboutus1 from './Assets/Aboutus1.png'
import servicesBack from './Assets/servicesBack.png'
import docBadge from './Assets/docBadge.png'
import blogsBox1 from './Assets/blogsBox1.png'
import blogsBox2 from './Assets/blogsBox2.png'
import blogsBox3 from './Assets/blogsBox3.png'
import RahulParag from './Assets/RahulParag.png'
import Footer from './Footer'
import tickBox from './Assets/tickBox.png'
import Vector from './Assets/Vector.png'
import DownloadBox from './DownloadBox'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Form/>

      
      <div className= "About Us" style={{display: "flex", flexDirection: "row",height: "500px"}}>
        <div style={{marginRight: "45px"}}>
          <img src= {Aboutus1} alt= 'Aboutus1' style={{height : "500px"}}/>
        </div>
        <div style={{paddingRight: "5px", width: "545px", display: "flex", flexDirection: "column", gap: "10px"}}>
          <div className='heading'>About Us</div>
          <div className='subHead' style={{display: "flex", flexDirection: "column"}}>
            <div style={{color: "#345369"}}>We Exist Because </div>
            <div style={{color: "#345369"}}>We <span style={{color: "#00B49E"}}>Care For You</span></div>
            <img src={Vector} alt= 'Vector' style={{width: "180px", height: "32px", marginLeft: "120px"}}/>
          </div>
          <div className='text1'>Sarathi Care is the trusted and reliable partner for all your healthcare requirements.</div>
          
          <div style={{display: "flex", flexDirection: "column", height: "170px", gap: "15px"}}>
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
      </div>

      {/* End of About Us Section */}


      <div className='Services' style= {{height: "920px", marginTop: "20px", display: "flex", flexDirection: "column", paddingLeft: "145px", paddingTop: "100px", backgroundImage: `url(${servicesBack})`, backgroundRepeat: "no-repeat", backgroundPosition: "right bottom"}}>
        <div className='heading'>Our Services</div>
        <div className='subHead' style={{height: "45px"}}>
          <div style={{color: "#345369"}}>We Exist Because <span  style={{color: "#00B49E"}}>We Care</span></div>
        </div>
        <div className='text1' style={{width: "700px"}}>Sarathi Care exists to be your partner in your journey towards good health. We are making healthcare simple, affordable and accessible to everyone</div>
          <div style={{display: "flex", flexDirection: "column", height: "620px", justifyContent: "space-between"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "760px"}}>
              <div className='box' style= {{width: "370px" ,height: "291px"}}>
                <div className='boxTop' style={{display: "flex", flexDirection: "row", margin: "30px 0px", alignItems: "center", gap: "20px"}}>
                  <div className='styleBadge'>
                    <img src={docBadge} alt='docBadge' class= 'center'/>
                  </div>
                  <div className= 'docSer'>
                    Doctor
                  </div>
                </div>
                <div className='boxText'  style= {{marginBottom: "45px"}}>
                  Consult with the most experienced and qualified doctors.
                </div>
                <div className='learnMore'>
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>
              </div>
              <div className='box' style= {{width: "370px" ,height: "291px"}}>
                <div className='boxTop' style={{display: "flex", flexDirection: "row", margin: "30px 0px", alignItems: "center", gap: "20px"}}>
                  <div className='styleBadge'>
                    <img src={docBadge} alt='docBadge' class= 'center'/>
                  </div>
                  <div className= 'docSer'>
                    Counselor
                  </div>
                </div>
                <div className='boxText'  style= {{marginBottom: "45px"}}>
                  Want someone to hear you out? Our counselors are available for you
                </div>
                <div className='learnMore'>
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "760px"}}>
              <div className='box' style= {{width: "370px" ,height: "291px"}}>
                <div  className='boxTop' style={{display: "flex", flexDirection: "row", margin: "30px 0px", alignItems: "center", gap: "20px"}}>
                  <div className='styleBadge'>
                    <img src={docBadge} alt='docBadge' class= 'center'/>
                  </div>
                  <div className= 'docSer'>
                    Nurse
                  </div>
                </div>
                <div className='boxText'  style= {{marginBottom: "45px"}}>
                Want an experienced nurse to for your home care? We are there for you!
                </div>
                <div className='learnMore'>
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>
              </div>
              <div className='box' style= {{width: "370px" ,height: "291px"}}>
                <div className='boxTop' style={{display: "flex", flexDirection: "row", margin: "30px 0px", alignItems: "center", gap: "20px"}}>
                  <div className='styleBadge'>
                    <img src={docBadge} alt='docBadge' class= 'center'/>
                  </div>
                  <div className= 'docSer'>
                    Japa
                  </div>
                </div>
                <div className='boxText'  style= {{marginBottom: "45px"}}>
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

      </div>

      {/* End of Services Section */}

      <div className='blogsSection'>
        <div style={{display: "flex", flexDirection: "column", width: "480px"}}>
          <div className='heading'>
            Blogs
          </div>
          <div className='subHead'>
            <div style={{color: "#345369"}}>
              Read Popular Articles
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
              <div style={{color: "#345369" , marginRight:"12px"}}>
                by
              </div>
              <div style={{color: "#00B49E"}}>
                Qualified Professionals 
              </div>
            </div>
          </div>
          <div className='text1'>
            We have created a list of top content for you because we care for you.
          </div>
          <div>
            <Link to= "/Blogs"><button className='btnBlogs' type="button" >See all articles</button></Link>
          </div>
        </div>


        <div style= {{display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{display: "flex", flexDirection: "column", width: "277px", justifyContent: "space-between", margin: "10px"}}> 
            <img  className='imgBox' src={blogsBox1} alt= 'blogsBox1'/>
            <div className='blogsCat'>
              Category 1
            </div>
            <div className='catText'>
              12 Coronavirus Myths and Facts That You Should Be Aware Of
            </div>
            <div style={{display: "flex", flexDirection: "row", marginTop: "30px"}}>
              <img  className='RP' src={RahulParag} alt= 'RahulParag'/>
              <div style={{display: "flex", flexDirection: "column"}}>
                <div className='docName'>
                  Dr. Rahul Parag
                </div>
                <div className='docCat'>
                  Spcialist
                </div>
              </div>
            </div>
          </div>


          <div style={{display: "flex", flexDirection: "column", width: "277px", justifyContent: "space-between", margin: "10px"}}> 
            <img style= {{margin: "0px"}} className='imgBox' src={blogsBox2} alt= 'blogsBox2'/>
            <div className='blogsCat'>
              Category 1
            </div>
            <div className='catText'>
              12 Coronavirus Myths and Facts That You Should Be Aware Of
            </div>
            <div style={{display: "flex", flexDirection: "row", marginTop: "30px"}}>
              <img  className='RP' src={RahulParag} alt= 'RahulParag'/>
              <div style={{display: "flex", flexDirection: "column"}}>
                <div className='docName'>
                  Dr. Rahul Parag
                </div>
                <div className='docCat'>
                  Spcialist
                </div>
              </div>
            </div>
          </div>


          <div style={{display: "flex", flexDirection: "column", width: "277px", justifyContent: "space-between",
         margin: "10px", opacity: "0.5"}}> 
            <img style= {{margin: "0px"}} className='imgBox' src={blogsBox3} alt= 'blogsBox3'/>
            <div className='blogsCat'>
              Category 1
            </div>
            <div className='catText'>
              12 Coronavirus Myths and Facts That You Should Be Aware Of
            </div>
            <div style={{display: "flex", flexDirection: "row", marginTop: "30px"}}>
              <img  className='RP' src={RahulParag} alt= 'RahulParag'/>
              <div style={{display: "flex", flexDirection: "column"}}>
                <div className='docName'>
                  Dr. Rahul Parag
                </div>
                <div className='docCat'>
                  Spcialist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadBox/>
      <Footer/>
    </>
  )
}

export default Home
