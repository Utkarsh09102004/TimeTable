import React from 'react';

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
  "05:10 PM"
];

const ScheduleTable = ({ scheduleData }) => {
  const renderCell = (day, time) => {
    // Retrieve the entry for the given day and time
    const entry = scheduleData[day] && scheduleData[day][time];
    console.log(`Rendering cell for ${day}, ${time}:`, entry); // Debugging line

    // Determine the cell class name
    const cellClassName = entry ? "cell cell-with-value" : "cell cell-no-value";

    // Function to get the color class name based on the value
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

    return (
       <td key={`${day}-${time}`} className={cellClassName}>
    {entry ? entry.slice().reverse().map((value, index) => (
        <textarea
            key={`${day}-${time}-${index}`} 
            defaultValue={value}
            className={`schedule-input schedule-input-${index} ${index === 0 ? getColorName(value) : ""}`}
        />
    )) : (
        // Fallback for cases where there's no entry
        <>
            <input type="text" defaultValue="" className="schedule-input schedule-input-0" />
            <input type="text" defaultValue="" className="schedule-input schedule-input-1" />
            <input type="text" defaultValue="" className="schedule-input schedule-input-2" />
            <input type="text" defaultValue="" className="schedule-input schedule-input-3" />
        </>
    )}
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
