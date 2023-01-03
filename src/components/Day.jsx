import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Day(props) {
  console.log(props.timeSlot.cancelled);
  console.log(props.timeSlot);

  const [isBreak, setIsBreak] = useState(false);

  const navigate = useNavigate();

  function goToSoloAct(e) {
    console.log(e.target.parentElement.id);
    let name = e.target.parentElement.id;
    navigate("../soloAct", { state: { name: name } });
  }

  useEffect(() => {
    function isBreak() {
      if (props.timeSlot.act === "break") {
        setIsBreak(true);
      }
    }

    isBreak();
  }, []);
  console.log(isBreak);

  return (
    <div className="Day">
      <div className="has-before">
        {!isBreak && (
          <div id={props.timeSlot.act} onClick={goToSoloAct}>
            <p className="act">{props.timeSlot.act}</p>
            <p>
              {props.timeSlot.start} - {props.timeSlot.end}
            </p>
            {props.timeSlot.cancelled && <p className="cancelled">CANCELLED</p>}
          </div>
        )}
        {isBreak && (
          <div className="break-act">
            <p className="act">{props.timeSlot.act}</p>
            <p>
              {props.timeSlot.start} - {props.timeSlot.end}
            </p>
            <p>{props.timeSlot.cancelled && <p className="cancelled">CANCELLED</p>}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Day;
