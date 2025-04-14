import React from "react";
import { useState, useEffect } from "react";
const TimerApp = () => {
  const [time, settime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        console.log("time incremented by", time);
        settime(time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    // const timer = setTimeout(()=> settime(time + 1),1000)
  }, [running, time]);

  function handelchange() {
    setRunning(true)
  }
  function handelreset() {
    setRunning(false)
    settime(0);
  }
  return (
    <div>
      <h1>Timer App</h1>
      <h2>Time = {time}</h2>
      <button onClick={handelchange}>Start</button>
      <button onClick={handelreset}>Stop</button>
    </div>
  );
};

export default TimerApp;
