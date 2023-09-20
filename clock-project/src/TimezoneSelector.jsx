import { useState } from "react";
import Clock from "./Clock";
const mapUtcOffsetToTimeZone = (utcOffset) => {
  const timeZoneMap = {
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
    "+1": "Etc/GMT-1",
    "+2": "Etc/GMT-2",
    "+3": "Etc/GMT-3",
    "+4": "Etc/GMT-4",
    "+5": "Etc/GMT-5",
    "+6": "Etc/GMT-6",
    "+7": "Etc/GMT-7",
    "+8": "Etc/GMT-8",
    "+9": "Etc/GMT-9",
    "+10": "Etc/GMT-10",
    "+11": "Etc/GMT-11",
    "+12": "Etc/GMT-12",
    "+13": "Etc/GMT-13",
    "+14": "Etc/GMT-14",
  };
  return timeZoneMap[utcOffset] || "Etc/UTC";
};
const TimezoneSelector = () => {
  let timeZones = [];

  const getUTC = () => {
    const startZone = -12;
    const endZone = 14;

    for (let i = startZone; i <= endZone; i++) {
      timeZones.push(`UTC${i}`);
    }

    return timeZones;
  };

  const timeZonesArray = getUTC();
  const [selectedTimeZones, setSelectedTimeZones] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedValue = e.target.selector.value;
    if (selectedTimeZones.includes(selectedValue)) {
      alert("You have already added this UTC");
    } else {
      setSelectedTimeZones([...selectedTimeZones, selectedValue]);
    }
    e.target.reset();
  };
  const handleDeleteTimeZone = (timeZoneToDelete) => {
    setSelectedTimeZones((prevTimeZones) =>
      prevTimeZones.filter((zone) => zone !== timeZoneToDelete),
    );
  };
  return (
    <>
      <h3>Time Zone Selector</h3>
      <div className="selector-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="utc">Choose UTC to add on:</label>
          <select id="utc" name="selector">
            {timeZonesArray.map((utc) => (
              <option key={utc} value={utc}>
                {utc}
              </option>
            ))}
          </select>
          <input type="submit" value="CONFIRM" className="submit" />
        </form>
      </div>
      <div className="timezones-list">
        Selected UTC&rsquo;s
        <ul>
          {selectedTimeZones.map((zone, index) => (
            <li key={index}>
              {zone} <Clock timeZone={mapUtcOffsetToTimeZone(zone.slice(3))} />
              <button
                className="x-button"
                onClick={() => {
                  handleDeleteTimeZone(zone);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TimezoneSelector;
