import Day from "./Day";
function Stage(props) {
  return (
    <div className="Stage">
      {Object.values(props.schedule[props.day]).map((timeSlot, index) => (
        <Day key={index + props.stageName} day={props.day} timeSlot={timeSlot} schedule={props.schedule[props.day]} />
      ))}
    </div>
  );
}

export default Stage;
