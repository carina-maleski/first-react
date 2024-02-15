import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <>
          <h1>Bem-vindo de volta!</h1>
          <img src="../src/assets/dognho.png" className="img" />
        </>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )}
    </div>
  );
}

export default Home;
