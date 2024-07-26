import React from 'react';
import { Link } from "react-router-dom";


const Video1 = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/3">Next</Link>
        <Link to="/2">Previous</Link>
      </div>
      <div className="content">
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/QDoVBupoKw8?si=l2j4nFh0Pvsi3j63" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>
    </>
  );
};

export default Video1;
