import React from 'react';
import { Link } from "react-router-dom";


const Video4 = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/6">Next</Link>
        <Link to="/3">Previous</Link>
      </div>
      <div className="content">
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/pTfTgNxiaV0?si=unsdCFoxl1_kHCJ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>
    </>
  );
};

export default Video4;
