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
    <div className="schedule-container">
      <button onClick={downloadTableAsImage}>Download as PNG</button>
      <article ref={tableRef}>
        <ScheduleTable scheduleData={scheduleData} />
      </article>
    </div>
  );
}

export default Schedule;
