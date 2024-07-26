import React from 'react';
import { Link } from "react-router-dom";


const Video3 = () => {
  return (
    <>
     <div className="navigation">
    
    <Link to="/5">Next</Link>
    <Link to="/2">Previous</Link>
  </div>
    <div className="content">
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/BmQJcfh8Aw8?si=5h3r0M34f7lAXwkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>     </div>  
     </>
  );
};

export default Video3;
