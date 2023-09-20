import { useEffect, useState } from "react";
import { utcToZonedTime, format } from "date-fns-tz";

const Clock = ({ timeZone }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const zonedTime = utcToZonedTime(new Date(), timeZone);
      const formattedTime = format(zonedTime, "HH:mm:ss", {
        timeZone,
      });
      setCurrentTime(formattedTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeZone]);

  return (
    <>
      <div className="clock">
        Time in {timeZone}: {currentTime}
      </div>
      <h3>Clock.jsx has to display time for each UTC</h3>
    </>
  );
};

export default Clock;
