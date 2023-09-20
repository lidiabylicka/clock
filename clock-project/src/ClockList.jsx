import TimezoneSelector from "./TimezoneSelector";

const ClockList = ({ selectedTimeZones }) => {
  return (
    <>
      <h5>List of all added UTC time zones:</h5>
      <div className="listUtc">
        {selectedTimeZones.map((clock, index) => (
          <p key={index}>{clock}</p>
        ))}
      </div>
    </>
  );
};

export default ClockList;

// unsure of this component
