import React from 'react';
import { Link } from "react-router-dom";
const Video2 = () => {
  return (
    <>
   <div className="navigation">
    <Link to="/4">Next</Link>
    <Link to="/1">Previous</Link>
  </div>
    <div className="content">
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/g8Rz6AiWPqc?si=avJXd0hMgtJbDlbC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>     </div>
     </>
  );
};

export default Video2;
