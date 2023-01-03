import React from "react";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import ScheduleList from "../components/ScheduleList";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

function Schedule() {
  const [stagesSchedule, setStagesSchedule] = useState([]);
  useEffect(() => {
    async function getStagesSchedule() {
      const res = await fetch("https://footrypleaseworkanddeletelateron.fly.dev/schedule");
      const theStagesSchedule = await res.json();
      setStagesSchedule(theStagesSchedule);
    }
    getStagesSchedule();
  }, []);
  return (
    <>
      <Helmet>
        <title>LoudCrowdFest - Schedule</title>
      </Helmet>
      <Layout />
      <h1>Schedule</h1>
      <div className="scheduleComp">
        <ScheduleList stagesSchedule={stagesSchedule} />
      </div>
      <Footer />
    </>
  );
}

export default Schedule;
