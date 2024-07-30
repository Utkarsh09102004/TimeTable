import React, { useState, useEffect } from 'react';
import './VideoPopup.css';

const VideoPopup = ({ show, handleClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`popup ${show ? 'show' : ''}`}>
      <div className="popup-content" style={{ maxWidth: isMobile ? 'none' : '600px' }}>
        <button className="close-btn" onClick={handleClose}>×</button>
        <video width="100%" controls autoPlay muted>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPopup;
