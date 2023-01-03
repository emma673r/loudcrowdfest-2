import React from "react";
import { useState, useEffect, useRef } from "react";
import Availability from "../components/Availability";
import InfoForm from "../components/InfoForm";
import Tents from "../components/Tents";
import Tickets from "../components/Tickets";
import CheckOut from "../components/CheckOut";
import Confirmation from "../components/Confirmation";
import Basket from "../components/booking_components/Basket";
import Timer from "../components/Timer";
import Stepper from "../components/booking_components/Stepper";
import Layout from "./Layout";
import Footer from "../components/Footer";
import PrimaryButton from "../components/PrimaryButton";
import { Helmet } from "react-helmet";

function Booking() {
  const [availability, setavailability] = useState([]);
  const [stage, setStage] = useState(1);

  const [vipAmount, setVipAmount] = useState(0);
  const [regAmount, setRegAmount] = useState(0);

  const [duoAmount, setDuoAmount] = useState(0);
  const [trioAmount, setTrioAmount] = useState(0);

  const [ownTents, setOwnTents] = useState(false);
  const [isGreen, setIsGreen] = useState(false);

  let totalAmountSpots = vipAmount + regAmount;
  let totalTents = duoAmount + trioAmount;
  const [totalSpots, setTotalSpots] = useState(0);

  console.log("totalAmountSpots", totalAmountSpots);
  console.log("totalTents", totalTents);
  console.log("totalSpots", totalSpots);

  const [camp, setCamp] = useState("");
  const [payementInformation, setPaymementInformation] = useState([]);

  const [allPersoData, setAllPersoData] = useState([]);
  //   console.log("allPersoData in booking is", allPersoData);
  //   console.log(allPersoData);

  const [reservationNumber, setReservationNumber] = useState("");

  useEffect(() => {
    async function getAvailability() {
      const res = await fetch("https://footrypleaseworkanddeletelateron.fly.dev/available-spots");
      const availability = await res.json();
      setavailability(availability);
    }
    getAvailability();
  }, []);

  let reserveSpotInfo = { area: camp, amount: totalAmountSpots };

  function reserveSpot(payload) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetch("https://footrypleaseworkanddeletelateron.fly.dev/reserve-spot", options)
      .then((response) => response.json())
      .then((response) => setReservationNumber(response.id))
      .catch((err) => console.error(err));

    // console.log("reserveSpotInfo", reserveSpotInfo);
    setStage(6);
  }

  //   console.log(reservationNumber);

  function makeReservation() {
    reserveSpot(reserveSpotInfo);
    console.log("payload is ", reserveSpotInfo);
  }

  function nextButtonValidation() {
    if ((stage === 1 && totalAmountSpots != 0) || (stage === 2 && (totalSpots >= totalAmountSpots || ownTents)) || (stage === 3 && camp.length)) {
      return <PrimaryButton clickAction={() => setStage((prev) => prev + 1)} desc={"Next"}></PrimaryButton>;
    } else if ((stage === 1 && totalAmountSpots === 0) || (stage === 2 && totalSpots < totalAmountSpots) || (stage === 3 && !camp.length)) {
      return <PrimaryButton desc={"Next"} disabled={true}></PrimaryButton>;
    }
  }

  return (
    <>
      <Helmet>
        <title>LoudCrowdFest - Booking</title>
      </Helmet>
      <Layout></Layout>
      <h1>Booking</h1>
      <Stepper stage={stage} />
      {/* 15 minutes is 900 seconds */}
      <Timer setStage={setStage} seconds={900} stage={stage} />

      {stage === 1 && <Tickets setRegAmount={setRegAmount} setVipAmount={setVipAmount} />}
      {stage === 2 && (
        <Tents
          setDuoAmount={setDuoAmount}
          duoAmount={duoAmount}
          setTrioAmount={setTrioAmount}
          trioAmount={trioAmount}
          regAmount={regAmount}
          vipAmount={vipAmount}
          setIsGreen={setIsGreen}
          setOwnTents={setOwnTents}
          ownTents={ownTents}
          setTotalSpots={setTotalSpots}
          totalSpots={totalSpots}
        />
      )}
      {stage === 3 && <Availability availability={availability} totalAmountSpots={totalAmountSpots} setCamp={setCamp} camp={camp} />}
      {stage === 4 && (
        <InfoForm camp={camp} regAmount={regAmount} vipAmount={vipAmount} stage={stage} setStage={setStage} setAllPersoData={setAllPersoData} />
      )}
      {stage === 5 && (
        <CheckOut
          allPersoData={allPersoData}
          trioAmount={trioAmount}
          duoAmount={duoAmount}
          vipAmount={vipAmount}
          regAmount={regAmount}
          isGreen={isGreen}
          ownTents={ownTents}
          setPaymementInformation={setPaymementInformation}
          makeReservation={makeReservation}
        />
      )}
      {stage === 6 && <Confirmation reservationNumber={reservationNumber} allPersoData={allPersoData} />}
      <Basket vipAmount={vipAmount} regAmount={regAmount} duoAmount={duoAmount} trioAmount={trioAmount} isGreen={isGreen} />
      <div className="next-btn">{nextButtonValidation()}</div>

      <Footer></Footer>
    </>
  );
}

export default Booking;
