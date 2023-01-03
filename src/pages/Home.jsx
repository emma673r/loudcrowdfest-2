import React from "react";
import Countdown from "react-countdown-simple";
import ArtistSamples from "../components/ArtistSamples";
import PrimaryButton from "../components/PrimaryButton";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import LineupSamples from "../components/LineupSamples";
import RedAssets from "../components/RedAssets";
import MerchSamples from "../components/MerchSamples";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

//The original package code - counts down form one hour
/* const newDate = new Date(
  new Date().setHours(new Date().getHours() + 1)
).toISOString(); */

//A version that works but not set up like the package code
/* const toLCF = new Date();
toLCF.setFullYear(2023, 5, 30); */

//A version that works and are set up like the package code but refreshes the hours, but that's a detail, the effect is there
const toLCF = new Date(new Date().setFullYear(2023, 5, 30)).toISOString();

function Home({ bands }) {
  const navigate = useNavigate();
  function goToBooking() {
    navigate("../booking");
  }
  function goToSchedule() {
    navigate("../schedule");
  }
  function goToLineup() {
    navigate("../lineup");
  }

  return (
    <>
      <Helmet>
        <title>LoudCrowdFest - Home</title>
      </Helmet>
      <Layout></Layout>
      <h1>LOUDCROWDFEST</h1>
      <main className="indexMain">
        <div className="countDown">
          <Countdown className={"countdown"} targetDate={toLCF} />
          <p>Until you meet the Gods</p>
        </div>
        <div className="flex-wrap">
          <ArtistSamples></ArtistSamples>
        </div>

        <div className="ctaIndexBtns">
          <PrimaryButton clickAction={goToBooking} desc={"BUY TICKETS"}></PrimaryButton>
          <PrimaryButton clickAction={goToSchedule} desc={"SEE SCHEDULE"}></PrimaryButton>
        </div>
        <h2>BadAss Lineup</h2>
        <div className="ctaIndexBtns">
          <PrimaryButton desc={"See lineup"} clickAction={goToLineup}></PrimaryButton>
        </div>

        {/* <LineupSamples bands={bands}></LineupSamples> */}
        <RedAssets></RedAssets>
        <MerchSamples></MerchSamples>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
