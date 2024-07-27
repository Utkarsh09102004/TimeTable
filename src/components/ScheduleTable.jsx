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
    const entry = scheduleData[day] && scheduleData[day][time];
    const value = entry ? entry.join(', ') : '';
    return (
      <td key={`${day}-${time}`}>
        <input 
          type="text" 
          defaultValue={value}
        />
      </td>
    );
  };

  return (
    <table className="all" align="center">
      <thead>
        <tr>
          <th className="days t">Time</th>
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
