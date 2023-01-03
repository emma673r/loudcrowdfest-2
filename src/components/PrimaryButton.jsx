import React from "react";

function PrimaryButton({ clickAction, desc, disabled }) {
  return (
    <>
      {/* {stage != 4 && ( */}
      <button disabled={disabled} onClick={clickAction}>
        {desc}
      </button>
      {/* )} */}
      {/* {stage === 4 && (
        <>
          {isValidBig && <button onClick={clickAction}>{desc}</button>}
          {!isValidBig && <button disabled={true}>{desc}</button>}
        </>
      )} */}
    </>
  );
}

export default PrimaryButton;
