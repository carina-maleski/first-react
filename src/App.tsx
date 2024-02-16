import React from "react";
import "./App.css";
import Home from "./paginas/home/Home";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
