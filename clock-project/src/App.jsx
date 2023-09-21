import "./App.css";
import { useState } from "react";
//import { utcToZonedTime, format } from "date-fns-tz";
import CurrentTime from "./CurrentTime";
import TimezoneSelector from "./TimezoneSelector";
import ClockList from "./ClockList";

function App() {
  const [selectedTimeZones, setSelectedTimeZones] = useState([]);
  console.log(selectedTimeZones);
  const mapUtcOffsetToTimeZone = (utcOffset) => {
    const offsetToTimeZoneMap = {
      "-12": "Etc/GMT+12",
      "-11": "Etc/GMT+11",
      "-10": "Etc/GMT+10",
      "-9": "Etc/GMT+9",
      "-8": "Etc/GMT+8",
      "-7": "Etc/GMT+7",
      "-6": "Etc/GMT+6",
      "-5": "Etc/GMT+5",
      "-4": "Etc/GMT+4",
      "-3": "Etc/GMT+3",
      "-2": "Etc/GMT+2",
      "-1": "Etc/GMT+1",
      " 0": "Etc/GMT0",
      1: "Etc/GMT-1",
      2: "Etc/GMT-2",
      3: "Etc/GMT-3",
      4: "Etc/GMT-4",
      5: "Etc/GMT-5",
      6: "Etc/GMT-6",
      7: "Etc/GMT-7",
      8: "Etc/GMT-8",
      9: "Etc/GMT-9",
      10: "Etc/GMT-10",
      11: "Etc/GMT-11",
      12: "Etc/GMT-12",
      13: "Etc/GMT-13",
      14: "Etc/GMT-14",
    };
    return offsetToTimeZoneMap[utcOffset] || "Etc/GMT";
  };
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
        mapUtcOffsetToTimeZone={mapUtcOffsetToTimeZone}
      />
      <ClockList
        selectedTimeZones={selectedTimeZones}
        handleDeleteTimeZone={handleDeleteTimeZone}
        mapUtcOffsetToTimeZone={mapUtcOffsetToTimeZone}
      />
    </>
  );
}

export default App;
