import { useState } from "react";

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
              {zone}{" "}
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
