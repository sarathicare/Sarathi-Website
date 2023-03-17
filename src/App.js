import './App.css';
import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import Blogs from './Blogs';
import Footer from './Footer.js'
import downloadBox from './DownloadBox.js';
import RegisterNow from './RegisterNow.js'
import Login from './Login.js'
import Profile from './Profile.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContactUs from './Contact Us';

function App() {
  return (
    <div style={{display: "block", margin: "0px", padding: "0px" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Blogs" element={<Blogs/>}/>
          <Route path="/Contact Us" element={<ContactUs/>}/>
          <Route path="/RegisterNow" element={<RegisterNow/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// , backgroundImage: "linear-gradient(to top, #cde3e8 , white)"
