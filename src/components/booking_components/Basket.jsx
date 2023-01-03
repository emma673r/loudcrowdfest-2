import React from "react";
import { useState } from "react";

// TODO Calculate evrything here -- not in the individual components

function Basket({ vipAmount, regAmount, duoAmount, trioAmount, isGreen }) {
  return (
    <>
      {!isGreen && <div className="basket">Basket : {vipAmount * 1299 + regAmount * 799 + duoAmount * 299 + trioAmount * 399 + 99} ,-</div>}
      {isGreen && <div className="basket">Basket : {vipAmount * 1299 + regAmount * 799 + duoAmount * 299 + trioAmount * 399 + 249 + 99} ,-</div>}
    </>
  );
}

export default Basket;
