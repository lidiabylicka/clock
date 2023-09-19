import "./App.css";
import { useState } from "react";
import CurrentTime from "./CurrentTime";
import TimezoneSelector from "./TimezoneSelector";
// import { zonedTimeToUtc } from 'date-fns-tz';
// import { formatInTimeZone } from "date-fns-tz";
// import enGB from "date-fns/locale/en-GB";

function App() {
  const [selectedTimeZones, setSelectedTimeZones] = useState([]);
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
    </>
  );
}

export default App;
