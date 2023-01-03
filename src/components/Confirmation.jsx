import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

function Confirmation({ reservationNumber, allPersoData }) {
  const [confirmation, setConfirmation] = useState(false);

  let reservationNumberFormatted = { id: reservationNumber };
  //   console.log(reservationNumberFormatted);
  const options = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservationNumberFormatted),
  };

  fetch("https://footrypleaseworkanddeletelateron.fly.dev/fullfill-reservation", options)
    .then((response) => response.json())
    .then((response) => setConfirmation(true))
    .catch((err) => console.error(err));

  //   console.log("The reservation number is : ", reservationNumber);

  const data = allPersoData[0];
  let firstNames = [];

  data.map((name) => {
    // console.log(name);
    firstNames.push(name.firstname);
  });
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }

  //   console.log(firstNames);
  return (
    <>
      <h2 className="conf-h2">Confirmation</h2>
      {confirmation && (
        <div className="confirmation">
          <h3>Your reservation is confirmed!</h3>
          <p className="center-p">
            Your reservation number is <em>{reservationNumber}</em>, keep it safe.
          </p>
          <p className="center-p">
            {firstNames.map((firstname, index) => (
              <span key={index}>{firstname}, </span>
            ))}
            we look forward to seeing you at LoudCrowdFest this year !!!
          </p>
        </div>
      )}
      {!confirmation && <div className="center-p">The reservation process failed. We're so sorry for the inconvenience, please try again.</div>}
      <div className="center-p">
        <PrimaryButton clickAction={goToHome} desc={"Go to index page"}></PrimaryButton>
      </div>
    </>
  );
}

export default Confirmation;
