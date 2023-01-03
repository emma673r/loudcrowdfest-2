import React from "react";
import { useState, useEffect } from "react";

function Tents({
  regAmount,
  vipAmount,
  setDuoAmount,
  duoAmount,
  setTrioAmount,
  trioAmount,
  setIsGreen,
  setOwnTents,
  ownTents,
  totalSpots,
  setTotalSpots,
}) {
  let numberOfTicketsTotal = regAmount + vipAmount;

  const tentDuo = {
    name: "2 man tent",
    price: 299,
    currency: ",-",
    desc: "2 man tent is perfect for you guys who want to chill and have deep conversations.",
  };

  const tentTrio = {
    name: "3 man tent",
    price: 399,
    currency: ",-",
    desc: "3 man tent is perfect for you guys who party all day and sleep never !",
  };

  const greenCamp = {
    name: "Green camp",
    price: 249,
    currency: ",-",
    desc: " all proceedings will go to hire staff to clean up the area after the fest is over. We want to protect our planet <3 and you can help us do it !",
  };

  let duoSpots = duoAmount * 2;
  let trioSpots = trioAmount * 3;
  setTotalSpots(duoSpots + trioSpots);

  function isSpotsUnder() {
    if (numberOfTicketsTotal <= totalSpots) {
      return true;
    }
  }

  //   TODO : Next button only valid when appropriate number of tents is selected OR radio own tents checked (make a form around everything)

  function makeOwnTents() {
    setOwnTents((prev) => !prev);
    setDuoAmount(0);
    setTrioAmount(0);
  }
  return (
    <>
      <h2>Tents</h2>
      <div className="center-p">
        You have to get as many tents spots as you have tickets. Everybody in Loudcrowdfest needs a defined spot to sleep.
      </div>
      <div className="center-p">
        You NEED <em>{numberOfTicketsTotal}</em> tent spots minimum. <br /> You have now selected {totalSpots} spots
      </div>
      <fieldset>
        <h3>
          <label className="center-p" htmlFor="own">
            No thanks, I/We have my/our own tents ! <input onChange={makeOwnTents} name="own" type="checkbox" />
          </label>
        </h3>
      </fieldset>

      {!ownTents && (
        <>
          {isSpotsUnder() && <div className="center-p">You have enough spots for your party !!</div>}
          {!isSpotsUnder() && <div className="center-p">You need more spots</div>}
          <div className="tent-wrap">
            <div className="tents">
              <h3>{tentDuo.name}</h3>
              <div className="tent-svg"></div>
              <p className="center-p">{tentDuo.desc}</p>
              <p className="center-p">
                {tentDuo.price} {tentDuo.currency}
              </p>
              <fieldset className="tent">
                {duoAmount !== 0 && (
                  <label htmlFor="amountDuo">
                    <button onClick={() => setDuoAmount((prev) => prev - 1)}>-</button>
                  </label>
                )}
                <input disabled={true} name="amountDuo" type="text" value={duoAmount} />
                {duoAmount < 5 && (
                  <label htmlFor="amountDuo">
                    <button onClick={() => setDuoAmount((prev) => prev + 1)}>+</button>
                  </label>
                )}
              </fieldset>
            </div>
            <div className="tents">
              <h3>{tentTrio.name}</h3>
              <div className="tent-svg"></div>
              <p className="center-p">{tentTrio.desc}</p>
              <p className="center-p">
                {tentTrio.price} {tentTrio.currency}
              </p>
              <fieldset className="tent">
                {trioAmount !== 0 && (
                  <label htmlFor="amountDuo">
                    <button onClick={() => setTrioAmount((prev) => prev - 1)}>-</button>
                  </label>
                )}

                <input disabled={true} name="amountDuo" type="text" value={trioAmount} />

                {trioAmount < 5 && (
                  <label htmlFor="amountDuo">
                    <button onClick={() => setTrioAmount((prev) => prev + 1)}>+</button>
                  </label>
                )}
              </fieldset>
            </div>
          </div>{" "}
        </>
      )}

      <fieldset className="center-p green-flex">
        <input onChange={() => setIsGreen((prev) => !prev)} name="green" type="checkbox" />
        <label htmlFor="green">Green Camping, {greenCamp.desc}.</label>
      </fieldset>
    </>
  );
}

export default Tents;
