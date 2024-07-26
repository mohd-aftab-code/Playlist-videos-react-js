import React from 'react';
import { Link } from "react-router-dom";
const VideoStart = () => {
  return (
    <>
    <div className="navigation">
    <Link to="/2">Next</Link>
    <Link to="/1">Previous</Link>
  </div>
    <div className="content">
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/ccnVk-HAZ0Y?si=kLdHNh_m_pbm0Lm1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>
     </>
  );
};
export default VideoStart;
