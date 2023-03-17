import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home_Blogs from './Assets/Home_Blogs.png'
import blogsBox5 from './Assets/blogsBox5.png'
import blogsBox2 from './Assets/blogsBox2.png'
import blogsBox4 from './Assets/blogsBox4.png'
import './Blogs.css'
import Rectangle52 from './Assets/Rectangle52.png'
import Rectangle51 from './Assets/Rectangle51.png'
import Rectangle50 from './Assets/Rectangle50.png'
import Rectangle49 from './Assets/Rectangle49.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Blogs = () => {
  return (
    <div>
        <div style={{height: "400px", background: "radial-gradient(92.92% 241.58% at 30.21% -65.01%, rgba(247, 247, 247, 0.2) 32%, rgba(244, 246, 246, 0.2) 41%, rgba(234, 243, 245, 0.2) 47%, rgba(218, 238, 242, 0.2) 54%, rgba(194, 230, 237, 0.2) 59%, rgba(164, 221, 232, 0.2) 65%, rgba(128, 209, 225, 0.2) 70%, rgba(99, 200, 220, 0.2) 74%, rgba(212, 235, 240, 0.2) 100%)"}}>
        <Navbar/>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "284px"}}>
        <div className='direction' style={{display: "flex", flexDirection: "row", width: "150px", justifyContent: "space-between", height: "25px", alignItems: "center", margin: "25px 0px", cursor: "pointer"}}>
          <Link className='nav-link' to="/"><div className='homeAnchor'>Home</div></Link> 
          <i style={{color: "#00B49E"}} class="fa-sharp fa-solid fa-angle-right"></i>
          <div className='profileAnchor'>Blogs</div>
        </div>
          <div className='subHead' style={{color: "#345369"}}>Read top articles</div>
          <div style={{display: "flex", flexDirection: "row"}}>
            <div className='subHead' style={{color: "#345369", marginRight: "12px"}}>
              from
            </div>
            <div className='subHead' style={{color: "#00B49E"}}>health experts</div>
          </div>
        </div>
      </div>


      {/* End of section 1 */}

      <div style={{paddingLeft: "150px", paddingTop: "100px", height: "750px"}}>
        <div style={{display: "flex", flexDirection: "column", height: "550px", width: "1150px", gap: "10px"}}>
          <div className='subHead' style={{color: "#345369"}}>Latest Articles</div>
          <div style={{display: "flex", flexDirection: "row" , height: "460px", justifyContent: "space-between"}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", width: "563px"}}>
              <img src={blogsBox5} alt= 'blogsBox1' style={{width: "563px", height: "300px"}}/>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "420px"}}>
                <div className='category_btn'>
                  <div className='btn-text'>Category</div>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "290px"}}>
                  <div className='text2' style={{color:"#345369"}}>By</div>
                  <div className='text2' style={{color:"#0075C8"}}>Rahul Sharma</div>
                  <div className='text2' style={{color:"#345369"}}>March 12, 2023</div>
                </div>
              </div>
              <div>
                <div className='subHead1' style={{color: "#345369"}}>12 Coronavirus Myths and Facts </div>
                <div className='subHead1' style={{color: "#345369"}}>That You Should Be Aware Of</div>
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "column", width: "560px", gap: "5px"}}>
              <div style={{display: "flex", flexDirection: "row", height: "225px", justifyContent: "space-between"}}>
                <img src={blogsBox2} alt= 'blogsBox2' style={{width: "273px", borderRadius: "20px"}}/>
                <div style={{display: "flex", flexDirection: "column", width: "274px"}}>
                  <div className='category_btn' style={{marginBottom: "10px"}}>
                    <div className='btn-text'>Category</div>
                  </div>
                  <div className='subHead1' style={{color: "#345369"}}>12 Coronavirus</div>
                  <div className='subHead1' style={{color: "#345369"}}>Myths and Facts</div>
                  <div className='subHead1' style={{color: "#345369"}}>That You Should...</div>
                  <div style={{display: "flex", flexDirection: "row", marginTop: "25px"}}>
                    <div className='text2' style={{color:"#345369"}}>By</div>
                    <div className='text2' style={{color:"#0075C8"}}>Rahul Sharma</div>
                  </div>
                </div>
              </div>
              <div style={{display: "flex", flexDirection: "row", height: "225px", justifyContent: "space-between"}}>
                <img src={blogsBox4} alt= 'blogsBox4' style={{width: "273px", borderRadius: "20px"}}/>
                <div style={{display: "flex", flexDirection: "column", width: "274px"}}>
                  <div className='category_btn' style={{marginBottom: "10px"}}>
                    <div className='btn-text'>Category</div>
                  </div>
                  <div className='subHead1' style={{color: "#345369"}}>12 Coronavirus</div>
                  <div className='subHead1' style={{color: "#345369"}}>Myths and Facts</div>
                  <div className='subHead1' style={{color: "#345369"}}>That You Should...</div>
                  <div style={{display: "flex", flexDirection: "row", marginTop: "25px"}}>
                    <div className='text2' style={{color:"#345369"}}>By</div>
                    <div className='text2' style={{color:"#0075C8"}}>Rahul Sharma</div>
                  </div>
                </div>
              </div>
          </div>
          
            
          </div>
        </div>
      </div>


      {/* End of section 2 */}


      <div style={{ paddingLeft: "150px", height: "1050px"}}>
        <div style={{display: "flex", flexDirection: "column", width: "1140px", gap: "20px"}}>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <div className='subHead' style={{color: "#345369"}}>Explore</div>
            <div style={{width: "475px", display: "flex", flexDirection: "row", justifyContent :"space-between"}}>
              <div className='links'>Link 1</div>
              <div className='links'>Link 2</div>
              <div className='links'>Link 3</div>
            </div>
          </div>


          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{width: "563px", display: "flex", flexDirection: "column", gap: "10px"}}>
              
              <img src={Rectangle49} alt= 'blogsBox1' style={{width: "563px", height: "300px"}}/>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "420px"}}>
                  <div className='category_btn'>
                    <div className='btn-text'>Category</div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "290px"}}>
                    <div className='text2' style={{color:"#345369"}}>By</div>
                    <div className='text2' style={{color:"#0075C8"}}>Rahul Sharma</div>
                    <div className='text2' style={{color:"#345369"}}>March 12, 2023</div>
                  </div>
                </div>
                <div>
                  <div className='subHead1' style={{color: "#345369"}}>12 Coronavirus Myths and Facts </div>
                  <div className='subHead1' style={{color: "#345369"}}>That You Should Be Aware Of</div>
                </div>
            </div>
            <div style={{width: "563px", display: "flex", flexDirection: "column", gap: "10px"}}>
              
              <img src={Rectangle50} alt= 'blogsBox1' style={{width: "563px", height: "300px"}}/>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "420px"}}>
                  <div className='category_btn'>
                    <div className='btn-text'>Category</div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "290px"}}>
                    <div className='text2' style={{color:"#345369"}}>By</div>
                    <div className='text2' style={{color:"#0075C8"}}>Rahul Sharma</div>
                    <div className='text2' style={{color:"#345369"}}>March 12, 2023</div>
                  </div>
                </div>
                <div>
                  <div className='subHead1' style={{color: "#345369"}}>12 Coronavirus Myths and Facts </div>
                  <div className='subHead1' style={{color: "#345369"}}>That You Should Be Aware Of</div>
                </div>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div style={{width: "563px", display: "flex", flexDirection: "column", gap: "10px"}}>
              
              <img src={Rectangle51} alt= 'blogsBox1' style={{width: "563px", height: "300px"}}/>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "420px"}}>
                  <div className='category_btn'>
                    <div className='btn-text'>Category</div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "290px"}}>
                    <div className='text2' style={{color:"#345369"}}>By</div>
                    <div className='text2' style={{color:"#0075C8"}}>Rahul Sharma</div>
                    <div className='text2' style={{color:"#345369"}}>March 12, 2023</div>
                  </div>
                </div>
                <div>
                  <div className='subHead1' style={{color: "#345369"}}>12 Coronavirus Myths and Facts </div>
                  <div className='subHead1' style={{color: "#345369"}}>That You Should Be Aware Of</div>
                </div>
            </div>
            <div style={{width: "563px", display: "flex", flexDirection: "column", gap: "10px"}}>
              
              <img src={Rectangle52} alt= 'blogsBox1' style={{width: "563px", height: "300px"}}/>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "420px"}}>
                  <div className='category_btn'>
                    <div className='btn-text'>Category</div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "290px"}}>
                    <div className='text2' style={{color:"#345369"}}>By</div>
                    <div className='text2' style={{color:"#0075C8"}}>Rahul Sharma</div>
                    <div className='text2' style={{color:"#345369"}}>March 12, 2023</div>
                  </div>
                </div>
                <div>
                  <div className='subHead1' style={{color: "#345369"}}>12 Coronavirus Myths and Facts </div>
                  <div className='subHead1' style={{color: "#345369"}}>That You Should Be Aware Of</div>
                </div>
            </div>
          </div>
        </div>
        <div style={{display: "flex", width: "1140px", justifyContent: "center", marginTop: "10px"}}>
          <button className='btnShowMore'>Show More</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Blogs
