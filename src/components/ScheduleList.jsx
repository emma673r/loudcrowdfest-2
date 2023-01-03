// import Schedule from "./Schedule";
import Stage from "./Stage";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

function ScheduleList(props) {
  let weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const [days, setDays] = useState("mon");

  let dailySchedule = [];

  Object.values(props.stagesSchedule).map((days, index) => {
    dailySchedule.push(days);
  });

  return (
    <main className="ScheduleList">
      <div className="week-days">
        {weekDays.map((day, index) => {
          return (
            <PrimaryButton key={index} desc={day} clickAction={() => setDays(day)}>
              {day}
            </PrimaryButton>
          );
        })}
      </div>
      <div className="stages">
        <ul className="hours">
          <li id="show_line" className="line_hor mobile-hidden"></li>
          <li>00:00</li>
          <li className="line_hor"></li>
          <li>02:00</li>
          <li className="line_hor"></li>
          <li>04:00</li>
          <li className="line_hor"></li>
          <li>06:00</li>
          <li className="line_hor"></li>
          <li>08:00</li>
          <li className="line_hor"></li>
          <li>10:00</li>
          <li className="line_hor"></li>
          <li>12:00</li>
          <li className="line_hor"></li>
          <li>14:00</li>
          <li className="line_hor"></li>
          <li>16:00</li>
          <li className="line_hor"></li>
          <li>18:00</li>
          <li className="line_hor"></li>
          <li>20:00</li>
          <li className="line_hor"></li>
          <li>22:00</li>
          <li className="line_hor transparent"></li>
        </ul>
        <div className="line"></div>
        {Object.keys(props.stagesSchedule).map((stage, index) => (
          <div key={index}>
            <h3 className="stages-names" key={index}>
              {stage[0]}
              {stage[1]}
              {stage[2]}
            </h3>
            <Stage key={stage} stageName={stage} day={days} schedule={dailySchedule[index]} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default ScheduleList;
