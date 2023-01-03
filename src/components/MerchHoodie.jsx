import React from "react";
import HoodieMerch from "./img-components/HoodieMerch";
import CartIconWhite from "./img-components/CartIconWhite";
function MerchHoodie() {
  return (
    <div className="merchWrapper">
      <HoodieMerch></HoodieMerch>
      <p>Harley Poe hoodie</p>
      <div className="priceAndCart">
        <p>350,-</p>
        <CartIconWhite></CartIconWhite>
      </div>
    </div>
  );
}

export default MerchHoodie;
