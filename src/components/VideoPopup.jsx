import React from 'react';
import './VideoPopup.css';

const VideoPopup = ({ show, handleClose }) => {
  
  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>×</button>    
        <p className="popup-text">We have made every effort to ensure the accuracy of the data. However, due to the diverse nature of the information in the Excel file, some discrepancies may occur. Please feel free to use the edit option to make any necessary adjustments. We apologize for any inconvenience this may cause.</p>
        <video width="100%" controls autoPlay muted>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPopup;
