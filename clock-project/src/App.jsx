import "./App.css";
import { useState } from "react";
import CurrentTime from "./CurrentTime";
import TimezoneSelector from "./TimezoneSelector";
import ClockList from "./ClockList";

function App() {
  const [selectedTimeZones, setSelectedTimeZones] = useState([]);
  console.log(selectedTimeZones);

  const handleDeleteTimeZone = (timeZoneToDelete) => {
    setSelectedTimeZones((prevTimeZones) =>
      prevTimeZones.filter((zone) => zone !== timeZoneToDelete),
    );
  };

  return (
    <>
      <CurrentTime />
      <TimezoneSelector
        selectedTimeZones={selectedTimeZones}
        handleDeleteTimeZone={handleDeleteTimeZone}
      />
      <ClockList selectedTimeZones={selectedTimeZones} />
    </>
  );
}

export default App;
