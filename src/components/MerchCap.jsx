import React from "react";
import CapMerch from "./img-components/CapMerch";
import CartIconWhite from "./img-components/CartIconWhite";
function MerchCap() {
  return (
    <div className="merchWrapper">
      <CapMerch></CapMerch>
      <div className="merchDesc">
        <p>Harley Poe cap</p>
      </div>
      <div className="priceAndCart">
        <p>200,-</p>
        <CartIconWhite></CartIconWhite>
      </div>
    </div>
  );
}

export default MerchCap;
