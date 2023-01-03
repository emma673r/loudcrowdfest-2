import React from "react";
import { useState, useRef, useEffect } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

function Timer({ seconds, setStage, stage }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();

  if (stage === 6) {
    clearInterval(timerId.current);
  }
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      setStage(1);
      alert("Time out ! Your session has expired. You will have to start over.");
      window.location.reload(false);
    }
  });

  return (
    <>
      <div className="timeLeft">
        You have
        <em className="red"> {formatTime(countdown)} </em>
        min left to order.
      </div>
    </>
  );
}

export default Timer;
