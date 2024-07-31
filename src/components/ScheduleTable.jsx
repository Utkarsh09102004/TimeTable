import React, { useState, useEffect } from 'react';

const timeSlots = [
  "08:00 AM",
  "08:50 AM",
  "09:40 AM",
  "10:30 AM",
  "11:20 AM",
  "12:10 PM",
  "01:00 PM",
  "01:50 PM",
  "02:40 PM",
  "03:30 PM",
  "04:20 PM",
  "05:10 PM",
  "06:00 PM"
];

const ScheduleTable = ({ scheduleData }) => {
  const [editingCells, setEditingCells] = useState({});

  useEffect(() => {
    const initialEditingCells = {};
    for (const day in scheduleData) {
      for (const time in scheduleData[day]) {
        if (scheduleData[day][time]) {
          const cellKey = `${day}-${time}`;
          initialEditingCells[cellKey] = true;
        }
      }
    }
    setEditingCells(initialEditingCells);
  }, [scheduleData]);

  const toggleEditMode = (day, time) => {
    const cellKey = `${day}-${time}`;
    setEditingCells(prev => {
      const newEditingCells = { ...prev };
      if (newEditingCells[cellKey]) {
        delete newEditingCells[cellKey];
      } else {
        newEditingCells[cellKey] = true;
      }
      return newEditingCells;
    });
  };

  const renderCell = (day, time) => {
    const cellKey = `${day}-${time}`;
    const entry = scheduleData[day] && scheduleData[day][time];
    const isEditing = editingCells[cellKey];

    const cellClassName = isEditing ? "cell cell-with-value" : "cell cell-no-value";

    const getColorName = (value) => {
      switch (value) {
        case "Lecture":
          return "green";
        case "Tutorial":
          return "purple";
        case "Practical":
          return "yellow";
        default:
          return "";
      }
    };

    const divClassName = isEditing ? "" : "displaying";

    return (
      <td key={cellKey} className={cellClassName}>
        {entry ? entry.slice().reverse().map((value, index) => (
          <div
            key={`${day}-${time}-${index}`}
            contentEditable={isEditing}
            className={`schedule-input schedule-input-${index} ${divClassName} ${index === 0 ? getColorName(value) : ""}`}
          >
            {value}
          </div>
        ))  : (
                  // Fallback for cases where there's no entry
                  <>
                       <div contentEditable={isEditing} className={`${divClassName} schedule-input-0 pink`}></div>
                        <div contentEditable={isEditing} className={`${divClassName} schedule-input-1`}>Edit Here</div>
                        <div contentEditable={isEditing} className={`${divClassName} schedule-input-2`}>Edit Here</div>
                        <div contentEditable={isEditing} className={`${divClassName} schedule-input-3`}></div>
                      
                  </>
              )}
              <button className ="edit" onClick={() => toggleEditMode(day, time)}>
                        {isEditing ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                      </svg>

                         : 
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg>
                        }
                      
                      </button>
              
          </td>
      );
  };



  return (
    <table className="all" align="center">
      <thead>
        <tr>
          <th className="time-specific">Time</th>
          <th className="days">Monday</th>
          <th className="days">Tuesday</th>
          <th className="days">Wednesday</th>
          <th className="days">Thursday</th>
          <th className="days">Friday</th>
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((time) => (
          <tr key={time}>
            <th className="time">{time}</th>
            {renderCell('Monday', time)}
            {renderCell('Tuesday', time)}
            {renderCell('Wednesday', time)}
            {renderCell('Thursday', time)}
            {renderCell('Friday', time)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
