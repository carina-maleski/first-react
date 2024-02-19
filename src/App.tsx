import React from "react";
import "./App.css";
import Home from "./paginas/home/Home";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
