import React from 'react';
import './VideoPage.css';

function VideoPage({ videoId, title }) {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`; // Adjust video source based on ID
  
  return (
    <div className="video-page">
      <h1>{title}</h1>
      <iframe 
        width="560" 
        height="315" 
        src={videoSrc} 
        title={title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default VideoPage;
