import { React, useState } from "react";

function InputText(props) {
  const [isValid, setIsValid] = useState(true);

  // on input is not valid -- button disabled

  function handleBlur(event) {
    event.preventDefault();

    if (event.target.id === "birth") {
      props.isBirthdayValid ? setIsValid(true) : setIsValid(false);
    } else {
      setIsValid(event.target.checkValidity());
    }
  }

  function handleOnInvalid() {
    if (!isValid) {
      setIsValid(false);
    }
  }

  // if (!isValid) {
  //   props.setIsValidBig(false);
  // } else {
  //   props.setIsValidBig(true);
  // }

  return (
    <div className="mobilepay">
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        {!isValid ? <>{props.errormessage}</> : null}
      </div>
      <input
        autoFocus={props.autoFocus}
        onInvalid={handleOnInvalid}
        onBlur={handleBlur}
        // defaultValue={props.initialvalue}
        type={props.type ? props.type : "text"}
        name={props.name}
        id={props.id}
        pattern={props.pattern}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={true}
        min={2}
      ></input>
    </div>
  );
}

export default InputText;
