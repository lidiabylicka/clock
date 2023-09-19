import "./App.css";
import { useState, useEffect } from "react";
import CurrentTime from "./CurrentTime";
import TimezoneSelector from "./TimezoneSelector";
// import { zonedTimeToUtc } from 'date-fns-tz';
// import { formatInTimeZone } from "date-fns-tz";
// import enGB from "date-fns/locale/en-GB";

const date = Date();

function App() {
  return (
    <>
      <CurrentTime />
      <TimezoneSelector />
    </>
  );
}

export default App;
