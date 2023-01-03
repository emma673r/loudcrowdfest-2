import React from "react";

import { useState } from "react";

function Ticket2({ setAmountVipTicket, ticket }) {
  const [countTicket2, setCountTicket2] = useState(0);

  setAmountVipTicket(countTicket2);

  return (
    <div className="ticket2-div">
      <h3>{ticket.name}</h3>
      <div className="ticket-2-svg"></div>
      <div className="ticket-2-desc center-p">{ticket.desc}</div>
      <fieldset className="ticket2">
        {countTicket2 !== 0 && (
          <label htmlFor="amount">
            <button onClick={() => setCountTicket2((prev) => prev - 1)}>-</button>
          </label>
        )}

        <input onChange={() => countTicket2} name="amount" type="text" value={countTicket2} />

        {countTicket2 < 5 && (
          <label htmlFor="amount">
            <button onClick={() => setCountTicket2((prev) => prev + 1)}>+</button>
          </label>
        )}
      </fieldset>
    </div>
  );
}

export default Ticket2;
