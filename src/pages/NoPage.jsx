import React from "react";
import Layout from "./Layout";
import Footer from "../components/Footer";

function NoPage() {
  return (
    <>
      <Layout></Layout>
      <h1>Huh..?</h1>
      <article className="noPage">
        <p>It seems this page is not available.</p>
        <p>Maybe it is under construction, or maybe you found a wormhole in our app.</p>
        <p>We're sorry about that, go back to main and enjoy the rest.</p>
      </article>
      <Footer></Footer>
    </>
  );
}

export default NoPage;
