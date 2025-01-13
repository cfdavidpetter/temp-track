import React, { useState, useEffect } from 'react';
import DateTools from '@/shared/lib/DateTools';

type ClockProps = {
  offsetInSeconds: number;
}

const Clock: React.FC<ClockProps> = ({ offsetInSeconds }) => {
  const [time, setTime] = useState<string>(DateTools.getCurrentTimeForTimezone(offsetInSeconds));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTools.getCurrentTimeForTimezone(offsetInSeconds));
    }, 60000);

    return () => clearInterval(interval);
  }, [offsetInSeconds]);

  return <>{time}</>;
};

export default Clock;
