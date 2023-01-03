import React, { useState } from "react";
import { useRef } from "react";
import InputText from "./InputText";
import PrimaryButton from "../PrimaryButton";

function PersonForm(props) {
  const persoData = useRef();
  const [isBirthdayValid, setIsBirthdayValid] = useState(true);
  const [errorBirthMessage, setErrorBirthMessage] = useState("");
  let specErr = "";
  const [isValidBig, setIsValidBig] = useState(false);

  // let allTicketsInfo = [];

  // function previous(event) {
  //   event.preventDefault();
  //   props.previous();
  // }

  function next(event) {
    event.preventDefault();
    if (persoData.current.reportValidity()) {
      props.saveForm(createObjectFromForm());
      props.next();
    }
  }

  function submit(event) {
    event.preventDefault();
    console.log(persoData.current.checkValidity());
    if (persoData.current.reportValidity()) {
      props.saveForm(createObjectFromForm());

      props.submitAll();
    }
  }

  function handleChange(e) {
    console.log(persoData.current.elements["country"].checkValidity());
    e.preventDefault();
    persoData.current.elements["country"].checkValidity() ? setIsValidBig(true) : setIsValidBig(false);
  }

  // console.log(allTicketsInfo);
  function getAgeFromBirthday() {
    let Bdate = persoData.current.elements["birth"].value;
    let Bday = +new Date(Bdate);
    let age = ~~((Date.now() - Bday) / 31557600000);

    // console.log(age);
    // console.log(persoData.current.elements["birth"].errormessage);

    if (age > 108) {
      specErr = " - Come on now, you aren't over 108 yo.";

      setIsBirthdayValid(false);
    } else if (age < 16) {
      specErr = " - We're sorry but you have to be at least 16.";
      setIsBirthdayValid(false);
    } else {
      specErr = " - Enter a birthday.";
      setIsBirthdayValid(true);
    }
    setErrorBirthMessage(specErr);
  }

  let newId = Date.now();
  // console.log(specErr);
  function createObjectFromForm() {
    return {
      id: newId,
      type: props.type,
      firstname: persoData.current.elements["firstname"].value,
      lastname: persoData.current.elements["lastname"].value,
      birth: persoData.current.elements["birth"].value,
      address: persoData.current.elements["address"].value,
      zip: persoData.current.elements["zip"].value,
      city: persoData.current.elements["city"].value,
      country: persoData.current.elements["country"].value,
      email: persoData.current.elements["email"].value,
      countryCode: persoData.current.elements["countryCode"].value,
      phone: persoData.current.elements["phone"].value,
    };
  }
  return (
    <form className="infoForm" onChange={handleChange} ref={persoData} onSubmit={submit}>
      <fieldset className="field-name">
        <InputText
          autofocus="true"
          type="text"
          label="First Name"
          id="firstname"
          name="firstname"
          errormessage="  - Enter your firstname"
          placeholder={"Jane"}
        ></InputText>
        <InputText type="text" label="Last Name" id="lastname" name="lastname" errormessage="  - Enter your lastname" placeholder={"Doe"}></InputText>

        <InputText
          isBirthdayValid={isBirthdayValid}
          onChange={getAgeFromBirthday}
          type="date"
          label="Birthday"
          id="birth"
          name="birth"
          errormessage={errorBirthMessage}
        ></InputText>
      </fieldset>
      <fieldset className="field-info">
        <InputText
          type="email"
          label="E-Mail"
          id="email"
          name="email"
          errormessage="  - Enter a valid e-mail"
          placeholder={"jane@doe.com"}
        ></InputText>
        <div className="phone-code">
          <span>Phone : </span>
          <div className="phonenumber">
            <div>
              <label htmlFor="countryCode"></label>
              <select name="countryCode" id="countryCode" required={true}>
                <option name="code" value="33">
                  Fr (+33)
                </option>
                <option name="code" value="45">
                  Dk (+45)
                </option>
                <option name="code" value="46">
                  Se (+46)
                </option>
                <option name="code" value="47">
                  No (+47)
                </option>
                <option name="code" value="49">
                  De (+49)
                </option>
              </select>
            </div>
            <InputText
              type="tel"
              label=""
              id="phone"
              name="phone"
              errormessage="  - Enter a valid phone number"
              pattern="(\+?\d*\s*)*"
              placeholder={"42 06 66 69"}
            ></InputText>
          </div>
        </div>
        <InputText
          type="text"
          label="Address"
          id="address"
          name="address"
          errormessage="  - Enter your address (street and number)"
          placeholder={"Hundekoldt gade 6"}
        ></InputText>
        <div>
          <InputText
            type="tel"
            label="Zip Code"
            id="zip"
            name="zip"
            errormessage="  - Enter a valid zip-code"
            // regex 1 to 5 numbers
            pattern="(\d){1,5}"
            placeholder={"2300"}
          ></InputText>
          <InputText type="text" label="City" id="city" name="city" errormessage="  - Enter your city" placeholder={"København"}></InputText>
        </div>
        <InputText type="text" label="Country" id="country" name="country" errormessage="  - Enter your country" placeholder={"Danmark"}></InputText>
      </fieldset>

      <div className="info-btn">
        {/* {!props.first && <PrimaryButton ref={previous} clickAction={previous} desc={"Prev"}></PrimaryButton>} */}
        {isValidBig && (
          <>
            {!props.last && <PrimaryButton ref={next} clickAction={next} desc={"Next"}></PrimaryButton>}
            {props.last && <PrimaryButton clickAction={submit} desc={"Submit"}></PrimaryButton>}
          </>
        )}
        {!isValidBig && (
          <>
            {!props.last && <PrimaryButton disabled={true} ref={next} clickAction={next} desc={"Next"}></PrimaryButton>}
            {props.last && <PrimaryButton disabled={true} clickAction={submit} desc={"Submit"}></PrimaryButton>}
          </>
        )}
      </div>
    </form>
  );
}

export default PersonForm;
