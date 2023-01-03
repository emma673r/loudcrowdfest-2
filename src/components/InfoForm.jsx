import React from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { StackedCarousel } from "react-stacked-carousel";
import { useNavigate } from "react-router-dom";
import "react-stacked-carousel/dist/index.css";
import PersonFormContainer from "./booking_components/PersonFormContainer";

function InfoForm({ camp, regAmount, vipAmount, setStage, setAllPersoData, allPersoData, stage }) {
  let personForms = createPersonForms();

  let personalData = [];

  const navigate = useNavigate();

  // const previousBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // Carousel consolelog
  // const onCardChange = (event) => {
  //   console.log("Card", event);
  // };

  function next() {
    nextBtnRef.current.click();
  }

  // function previous() {
  //   previousBtnRef.current.click();
  // }

  function submitAll() {
    setAllPersoData([personalData]);

    // console.log(personalData);
    // console.log(allPersoData);

    // navigate("../checkout");
    setStage(5);
  }

  function saveForm(ticketInfo) {
    personalData.push(ticketInfo);
    console.log("ticketInfo", ticketInfo);

    const options = {
      method: "POST",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ3FxZ2xjdWx0bnFldnVhZGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExOTEzODAsImV4cCI6MTk4Njc2NzM4MH0.QotyrBge_mfuF2-1RUGkCH7Z40JzfPk3W1cRVfXE9ow",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ3FxZ2xjdWx0bnFldnVhZGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExOTEzODAsImV4cCI6MTk4Njc2NzM4MH0.QotyrBge_mfuF2-1RUGkCH7Z40JzfPk3W1cRVfXE9ow",
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(ticketInfo),
    };

    fetch("https://jhgqqglcultnqevuadcy.supabase.co/rest/v1/Tickets", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  function createPersonForms() {
    let result = [];

    if (regAmount + vipAmount === 1) {
      result.push(
        <div key={1}>
          <PersonFormContainer
            id={Date.now()}
            first={true}
            last={true}
            type={vipAmount === 1 ? "VIP Ticket" : "Regular Pass"}
            title={`Ticket 1/1`}
            next={next}
            // previous={previous}
            submitAll={submitAll}
            saveForm={saveForm}
            stage={stage}
          ></PersonFormContainer>
        </div>
      );
    } else {
      for (let i = 1; i <= vipAmount; i++) {
        result.push(
          <div key={i}>
            <PersonFormContainer
              id={Date.now()}
              first={i === 1}
              last={i === regAmount + vipAmount}
              type="Regular Pass"
              title={`Ticket ${i}/${regAmount + vipAmount} (Regular Pass)`}
              next={next}
              // previous={previous}
              submitAll={submitAll}
              saveForm={saveForm}
              stage={stage}
            ></PersonFormContainer>
          </div>
        );
      }

      for (let i = vipAmount + 1; i <= vipAmount + regAmount; i++) {
        result.push(
          <div key={i}>
            <PersonFormContainer
              id={Date.now()}
              first={i === 1}
              last={i === regAmount + vipAmount}
              type="VIP ticket"
              title={`Ticket ${i}/${regAmount + vipAmount} (VIP Ticket)`}
              next={next}
              // previous={previous}
              submitAll={submitAll}
              saveForm={saveForm}
              stage={stage}
            ></PersonFormContainer>
          </div>
        );
      }
    }

    return result;
  }

  return (
    <>
      <h2 className="camp-h2">{camp} campsite</h2>
      <div className="carousel">
        {vipAmount + regAmount === 1 ? (
          personForms
        ) : (
          <StackedCarousel
            autoRotate={false}
            // carousel console.log
            // onCardChange={onCardChange}
            containerClassName=""
            cardClassName=""
            leftButton={<></>}
            // rightButton={<></>}
            //** Cheat buttons for dev phase (no form validation)
            // leftButton={<button ref={previousBtnRef}>Prev Ticket</button>}
            // rightButton={<button ref={nextBtnRef}></button>}
            // leftButton={<div ref={previousBtnRef}></div>}
            rightButton={<div ref={nextBtnRef}></div>}
          >
            {personForms}
          </StackedCarousel>
        )}
      </div>
    </>
  );
}

export default InfoForm;
