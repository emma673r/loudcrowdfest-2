import React, { useEffect } from "react";
import Basket from "./booking_components/Basket";
import CreditCardForm from "./booking_components/CreditCardForm";
import { useState } from "react";
import MobilePayForm from "./booking_components/MobilePayForm";
import PrimaryButton from "./PrimaryButton";

function CheckOut({ allPersoData, trioAmount, duoAmount, isGreen, ownTents, vipAmount, regAmount, setPaymementInformation, makeReservation }) {
  // console.log("allPersoData in checkout is", allPersoData);
  let myData = allPersoData[0];
  // console.log("my data in checkout is", myData);

  const [payementCard, setPayementCard] = useState(true);

  let payementInfo = [];

  function saveForm(info) {
    payementInfo.push(info);
    // console.log(payementInfo);
    setPaymementInformation(payementInfo);
  }

  return (
    <div className="checkoutComponent">
      <h2>CheckOut</h2>
      <table>
        <thead>
          <tr>
            <th>
              <h3>ITEMS</h3>
            </th>
            <th>
              <h3>QTY</h3>
            </th>
            <th>
              <h3>PRICE</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {regAmount > 0 && <div>Regular Pass</div>}
              {vipAmount > 0 && <div>VIP Ticket</div>}
              {duoAmount > 0 && <div>Duo Tent</div>}
              {trioAmount > 0 && <div>Trio Tent</div>}
              {isGreen && <div>Green Camping</div>}
              {ownTents && <div>Own tents</div>}
              <div>Booking Fee</div>
            </td>
            <td>
              {regAmount > 0 && <div>{regAmount}</div>}
              {vipAmount > 0 && <div>{vipAmount}</div>}
              {duoAmount > 0 && <div>{duoAmount}</div>}
              {trioAmount > 0 && <div>{trioAmount}</div>}
              {isGreen && <div>1</div>}
              {ownTents && <div>{regAmount + vipAmount} spots</div>}
              <div>1</div>
            </td>
            <td>
              {regAmount > 0 && <div>799 ,-</div>}
              {vipAmount > 0 && <div>1299 ,-</div>}
              {duoAmount > 0 && <div>299 ,-</div>}
              {trioAmount > 0 && <div>399 ,-</div>}
              {isGreen && <div>249 ,-</div>}
              {ownTents && <div>Free ,-</div>}
              <div>99 ,-</div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="basket-table">
            <td>
              <h3>TOTAL</h3>
            </td>
            <td></td>
            <td>
              {!isGreen && <div>Basket : {vipAmount * 1299 + regAmount * 799 + duoAmount * 299 + trioAmount * 399 + 99} ,-</div>}
              {isGreen && <div>Basket : {vipAmount * 1299 + regAmount * 799 + duoAmount * 299 + trioAmount * 399 + 249 + 99} ,-</div>}
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Payement</h2>
      <div className="pay-btn">
        <PrimaryButton desc={"Credit Card"} clickAction={() => setPayementCard(true)}></PrimaryButton>
        <PrimaryButton desc={"MobilePay"} clickAction={() => setPayementCard(false)}></PrimaryButton>
      </div>

      {payementCard && <CreditCardForm makeReservation={makeReservation} saveForm={saveForm} payementCard={payementCard} />}
      {!payementCard && <MobilePayForm makeReservation={makeReservation} saveForm={saveForm} payementCard={payementCard} />}
    </div>
  );
}

export default CheckOut;
