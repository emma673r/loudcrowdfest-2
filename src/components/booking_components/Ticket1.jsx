import React from "react";
import { useState } from "react";

function Ticket1({ setAmountRegTicket, ticket }) {
  const [countTicket1, setCountTicket1] = useState(0);

  setAmountRegTicket(countTicket1);

  return (
    <div className="ticket1-div">
      <h3>{ticket.name}</h3>
      <div className="ticket-1-svg"></div>
      <div className="ticket-1-desc center-p">{ticket.desc}</div>
      <fieldset className="ticket1">
        {countTicket1 !== 0 && (
          <label htmlFor="amount">
            <button onClick={() => setCountTicket1((prev) => prev - 1)}>-</button>
          </label>
        )}

        <input onChange={() => countTicket1} name="amount" type="text" value={countTicket1} />

        {countTicket1 < 5 && (
          <label htmlFor="amount">
            <button onClick={() => setCountTicket1((prev) => prev + 1)}>+</button>
          </label>
        )}
      </fieldset>
    </div>
  );
}

export default Ticket1;
