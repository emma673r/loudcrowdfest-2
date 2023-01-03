import React from "react";
import { useState, useEffect } from "react";
import BandList from "../components/BandList";
import Footer from "../components/Footer";
import Layout from "./Layout";

function LineUp({ bands }) {
  return (
    <>
      <Layout></Layout>
      <h2>OUR BAD ASS 23' LINEUP</h2>
      <div className="lineupSamples">
        {bands.map((band, index) => (
          <BandList key={index} band={band}></BandList>
        ))}
        {/* <BandList bands={bands} /> */}
      </div>
      <Footer />
    </>
  );
}

export default LineUp;
