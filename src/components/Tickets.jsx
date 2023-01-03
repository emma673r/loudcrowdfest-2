import React, { Children } from "react";
import Ticket1 from "./booking_components/Ticket1";
import Ticket2 from "./booking_components/Ticket2";

import { useState } from "react";

function Tickets({ setVipAmount, setRegAmount }) {
  const [amountRegTicket, setAmountRegTicket] = useState();
  const [amountVipTicket, setAmountVipTicket] = useState();

  setVipAmount(amountVipTicket);
  setRegAmount(amountRegTicket);

  const vipTicket = {
    name: "VIP Ticket",
    price: 1299,
    currency: ",-",
    desc: "Vip ticket is for you who wants the chance to meet our lineup in the VIP lounge area. With exclusiv cocktails and photoshoots, you'll be full of experiences. ;)",
  };
  const regTicket = {
    name: "Regular Pass",
    price: 799,
    currency: ",-",
    desc: "Regular pass is for you who just want to enjoy music and hang out with your friends (maybe make new crowd friends?). You have acces to everything except the VIP lounge area. :P",
  };

  return (
    <>
      <h2 id="ticket-h2">Tickets</h2>
      <p className="center-p">You can max buy 5 of each kind of tickets per order.</p>
      <div className="ticket-wrap">
        <Ticket1 setAmountRegTicket={setAmountRegTicket} ticket={regTicket} />
        <Ticket2 setAmountVipTicket={setAmountVipTicket} ticket={vipTicket} />
      </div>
    </>
  );
}

export default Tickets;
