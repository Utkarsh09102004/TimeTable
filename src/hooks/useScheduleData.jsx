import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import result from '@/assets/result.json';

const useScheduleData = () => {
  const { sub } = useParams();
  const [scheduleData, setScheduleData] = useState(null);

  useEffect(() => {
    if (sub && result[sub]) {
      setScheduleData(result[sub]);
    }
  }, [sub]);

  return scheduleData;
};

export default useScheduleData;
