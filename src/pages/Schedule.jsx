import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import ScheduleTable from '@/components/ScheduleTable'; // Adjust the import path as needed
import useScheduleData from '@/hooks/useScheduleData'; // Adjust the import path as needed
import '@/assets/index.css';
import '@/assets/schedule.css';
import useViewPortMetaTag from '@/hooks/useViewPortMetaTag'
import VideoPopup from "../components/VideoPopup"

function Schedule() {
  useViewPortMetaTag(1200);
  const scheduleData = useScheduleData();
  const tableRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);

  const downloadTableAsImage = () => {
    if (tableRef.current) {
      
      const elementsToHide = document.querySelectorAll('.edit');
      elementsToHide.forEach(element => element.style.visibility = 'hidden');
      
      html2canvas(tableRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'schedule.png';
        link.click();
        
        elementsToHide.forEach(element => element.style.visibility = '');
      });
    }
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!scheduleData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="acm-title">
        <div className="title-text">Time Table</div>
        <img src="https://acm-thapar.github.io/img/logo.png" alt="Logo" width="600" height="300" />
      </nav>
      <div className="schedule-container">
        <button className="pict" onClick={downloadTableAsImage}>Download as PNG</button>
        <button className="pict" onClick={handleOpenPopup}>Show Tutorial</button>
        </div>
        <div>
        <article className="table" ref={tableRef}>
          <ScheduleTable scheduleData={scheduleData} />
        </article>
      </div>
      <VideoPopup
        show={showPopup}
        handleClose={handleClosePopup}
      />
    </div>
  );
}

export default Schedule;
