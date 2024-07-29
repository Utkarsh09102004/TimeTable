import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import ScheduleTable from '@/components/ScheduleTable'; // Adjust the import path as needed
import useScheduleData from '@/hooks/useScheduleData'; // Adjust the import path as needed
import '@/assets/index.css';
import '@/assets/schedule.css';

function Schedule() {
  const scheduleData = useScheduleData();
  const tableRef = useRef(null);

  const downloadTableAsImage = () => {
    if (tableRef.current) {
      html2canvas(tableRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'schedule.png';
        link.click();
      });
    }
  };

  if (!scheduleData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <nav className="acm-title"> <div class="title-text">Time Table</div> <img src="https://acm-thapar.github.io/img/logo.png" alt="Logo" width="600" height="300"></img></nav>
    <div className="schedule-container">
      <button className="pict" onClick={downloadTableAsImage}>Download as PNG</button>
      <article className ="table" ref={tableRef}>
        <ScheduleTable scheduleData={scheduleData} />
      </article>
    </div>
    </div>
  );
}

export default Schedule;
