import React from 'react';
import './VideoPopup.css';

const VideoPopup = ({ show, handleClose }) => {
  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>×</button>
        Tutorial
        <video width="100%" controls autoPlay muted>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPopup;
