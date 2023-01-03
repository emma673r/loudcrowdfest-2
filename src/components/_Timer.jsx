import React, { useRef, useEffect, useMemo } from "react";
import Countdown from "react-countdown";

export default function Timer({ setStage }) {
  const timer = useRef(null);

  const time = useMemo(() => {
    return Date.now() + 300000;
  }, []);

  let timeLeft;
  console.log(time);

  const newTime = useMemo(() => {
    return Date.now() + timeLeft;
  }, [timeLeft]);

  console.log(timeLeft);

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      console.log("time out");
      setStage(1);
    }

    return (
      <div id="timeLeft">
        {minutes}:{seconds}
      </div>
    );
  };
  return <Countdown ref={timer} date={Date.now() + 10000} intervalDelay={0} precision={3} renderer={renderer} />;

  return <Countdown date={props.page === "ticket" ? time : newTime} renderer={renderer} autoStart={false} ref={myTimer} />;
}
