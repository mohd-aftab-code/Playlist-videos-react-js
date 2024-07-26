import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar';
import Sidebar1 from './Components/Sidebar1';
import Video1 from './Components/Video1';
import Video2 from './Components/Video2';
import VideoStart from './Components/VideoStart';
import Video3 from './Components/Video3';
import Video4 from './Components/Video4';
import Video5 from './Components/Video5';
import Video6 from './Components/Video6';
import Video7 from './Components/Video7';
import Video8 from './Components/Video8';
import Video9 from './Components/Video9';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-container">
          <Sidebar1/>
          <div className="content-container">
            <Routes>
              <Route path='/1' element={<VideoStart/>} />
              <Route path="/2" element={<Video1/>} />
              <Route path="/3" element={<Video2/>}/>
              <Route path="/4" element={<Video3/>}/>
              <Route path="/5" element={<Video4/>}/>
              <Route path="/6" element={<Video5/>}/>
              <Route path="/7" element={<Video6/>}/>
              <Route path="/8" element={<Video7/>}/>
              <Route path="/9" element={<Video8/>}/>
              <Route path="/10" element={<Video9/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
