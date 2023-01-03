import PersonForm from "./PersonForm";
function PersonFormContainer(props) {
  return (
    <div>
      <h3 className="info-h3">{props.title}</h3>
      <PersonForm {...props}></PersonForm>
    </div>
  );
}

export default PersonFormContainer;
