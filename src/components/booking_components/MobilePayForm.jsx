import React from "react";
import InputText from "./InputText";
import PrimaryButton from "../PrimaryButton";
import { useRef, useState } from "react";

function MobilePayForm({ saveForm, submitAll, payementCard, makeReservation }) {
  const Form = useRef(null);
  const [disableMe, setDisableMe] = useState(true);

  function createObjectFromMobileForm() {
    return {
      mobile: Form.current.elements["mobile"].value,
    };
  }

  function handleChange(e) {
    if (Form.current.elements["mobile"].value.length > 6) {
      setDisableMe(false);
    } else {
      setDisableMe(true);
    }
  }

  function submit(e) {
    e.preventDefault();
    if (Form.current.reportValidity()) {
      saveForm(createObjectFromMobileForm());
      makeReservation();
    }
  }

  if (payementCard) {
    Form.current = "";
  }

  return (
    <form className="mobilepay-form" onChange={handleChange} onSubmit={submit} ref={Form}>
      <h3>MobilePay Info</h3>
      <InputText
        type="text"
        label="mobile"
        id="mobile"
        name="mobile"
        errormessage="  - Enter a valid mobile number"
        placeholder={"42 06 66 69"}
        pattern="(\+?\d*\s*)*"
        required={true}
      ></InputText>
      <PrimaryButton disabled={disableMe} desc={"PAY NOW"} clickAction={submit}></PrimaryButton>
    </form>
  );
}

export default MobilePayForm;
