import React from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

function InfoForm({ camp, regAmount, vipAmount }) {
  const [regTicketsInfo, setRegTicketsInfo] = useState([]);
  const [vipTickets, setVipTickets] = useState([]);

  const [whichRegTicket, setWhichRegTicket] = useState(0);
  let regTicketsAllInfo = [];

  const persoData = useRef(null);

  for (let i = 0; i < regAmount; i++) {
    regTicketsAllInfo.push({ name: `Regular ticket ${i + 1}`, id: i, firstName: "", lastName: "" });
  }

  //   for (let i = 0; i < regAmount; i++) {
  //     // setRegTicketsInfo({
  //     //   id: i + 1,
  //     //   name: `Regular pass ${i + 1}`,
  //     //   firstName: "",
  //     //   lastName: "",
  //     // });
  //     regTicketsAllInfo.push({
  //       id: i + 1,
  //       name: `Regular pass ${i + 1}`,
  //       firstName: "",
  //       lastName: "",
  //     });
  //     console.log("i is ", i);
  //     // setRegTicketsInfo(regTicketsAllInfo);
  //   }

  //   console.log("regTicketsAllInfo is ", regTicketsAllInfo);

  //   setRegTicketsInfo(regTicketsAllInfo);
  //   console.log("regTicketsInfo is", regTicketsInfo);
  //   console.log("regAmount is ", regAmount);

  //   console.log(allReg);

  //   function createEachPersonFromForm() {
  //     return {
  //       id: persoData.current.id,
  //       name: persoData.current.name,
  //       firstname: persoData.current.firstName.value,
  //       lastname: persoData.current.lastName.value,
  //     };
  //   }

  //   function submitInfo(e) {
  //     e.preventDefault();
  //     // regTicketsAllInfo.push({ id: persoData.current.id, name: persoData.current.name, firstName: persoData.current.firstName.value, lastName: "" });
  //     // allReg.map((regTicket, index) => {
  //     //   console.log("regTicketsInfo is : ", regTicket);
  //     // });
  //     // console.log(regTicketsAllInfo);
  //     // setRegTicketsInfo(regTicketsAllInfo);

  //     //****/
  //     regTicketsAllInfo.map((currentTicket, index) => {
  //       console.log(currentTicket);
  //       currentTicket.firstName = persoData.current.firstName.value;
  //     });
  //     console.log(regTicketsAllInfo);

  //     //****/

  //     // if (e.target.checkValidity()) {
  //     //   console.log(e.target.firstName.value);
  //     //   regTicketsAllInfo.map((currentTicket) => {
  //     //     console.log(currentTicket);
  //     //     currentTicket.firstName = persoData.current.firstName.value;
  //     //   });
  //     // createEachPersonFromForm(e.target);
  //     // console.log(regTicketsAllInfo);
  //   }

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const handleRegistration = (data) => {
  //     console.log(data);
  //     regTicketsAllInfo.forEach((eachTicket) => {
  //       eachTicket.name = eachTicket.name;
  //       eachTicket.firstName = data.firstName;
  //       eachTicket.lastName = data.lastName;
  //     });

  //     persoData.current.querySelectorAll("input").forEach((input) => {
  //       input.value = "";
  //     });

  //     console.log(regTicketsAllInfo);
  //   };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");

    Object.values(regTicketsAllInfo).map((eachTicket) => {
      eachTicket.name = eachTicket.name;
      eachTicket.firstName = persoData.current.firstName.value;
      eachTicket.lastName = persoData.current.lastName.value;
    });

    // console.log(persoData.current.id);

    // for (let i = 0; i <= regTicketsAllInfo.length; i++) {
    //   console.log(i);
    //   console.log(regTicketsAllInfo[0]);
    //   regTicketsAllInfo[`${i}`].id = regTicketsAllInfo[`${i}`].id;
    //   regTicketsAllInfo[`${i}`].name = regTicketsAllInfo[`${i}`].name;
    //   regTicketsAllInfo[`${i}`].firstName = persoData.current.firstName.value;
    //   regTicketsAllInfo[`${i}`].lastName = persoData.current.lastName.value;
    // }

    console.log(regTicketsAllInfo);

    persoData.current.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  }

  return (
    <>
      <h2>{camp} campsite</h2>
      {regTicketsAllInfo.map(
        (regTicket, index) =>
          whichRegTicket === index && (
            <div key={index + 1}>
              <div>
                {index + 1} / {regTicketsAllInfo.length} tickets
              </div>
              <h3>{`${regTicket.name}`}</h3>

              <form id={index} name={`${regTicket.name}`} onSubmit={handleSubmit} ref={persoData}>
                <fieldset>
                  <label htmlFor="firstName">
                    FirstName
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      //   {...register("firstName", { required: "Your firstName is required" })}
                      placeholder="Jane"
                    />
                    {/* {errors?.firstName && errors.firstName.message} */}
                  </label>
                  <label htmlFor="lastName">
                    LastName
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      //   {...register("lastName", { required: "Your last Name is required" })}
                      placeholder="Doe"
                    />
                    {/* {errors?.lastName && errors.lastName.message} */}
                  </label>
                </fieldset>
                <button>Submit {regTicket.name}</button>
              </form>
            </div>
          )
      )}
      {whichRegTicket !== 0 && <button onClick={() => setWhichRegTicket((old) => old - 1)}>Prev Ticket</button>}
      {/* TODO ADD VIPAMOUNT JUST UNDER HERE  */}
      {whichRegTicket <= regAmount - 2 && <button onClick={() => setWhichRegTicket((old) => old + 1)}>Next Ticket</button>}

      {/* {allVip.map((vipTicket, index) => (
        <div key={index} id={`${vipTicket.name}`}>
          <h3>{vipTicket}</h3>
        </div>
      ))} */}
      {/* <button onClick={submitInfo}>Prev Ticket</button>
      <button onClick={submitInfo}>Next Ticket</button> */}
    </>
  );
}

export default InfoForm;
