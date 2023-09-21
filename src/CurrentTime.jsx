import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <h1>Current Date & Time is {currentDate.toLocaleString()}</h1>
    </>
  );
};

export default CurrentTime;
