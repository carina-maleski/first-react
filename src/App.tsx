import React from "react";
import "./App.css";
import Home from "./paginas/home/Home";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <NavBar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
