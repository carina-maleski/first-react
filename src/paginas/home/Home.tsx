import React from "react";
import "./Home.css";
import homeLogo from "../../assets/dognho.png";

function Home() {
  return (
    <>
      <h1 className="titulo">Home</h1>
      <img src={homeLogo} className="img" alt="cachorrinho tela inicial" />
    </>
  );
}

export default Home;
