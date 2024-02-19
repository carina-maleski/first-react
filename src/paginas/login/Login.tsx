import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4">
          <h2 className="text-slate-900 text-4xl">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-cyan-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="☻☻☻☻"
              className="border-2 border-cyan-700 rounded p-2"
            />
          </div>
          <button
            type="submit"
            className="rounded text-stone-100 bg-cyan-500 hover:bg-cyan-800 w-1/2 py-2 flex justify-center"
          >
            <span>Entrar</span>
          </button>
          <hr className="border-slate-800 w-full" />
          <p>Ainda não tem uma conta? {""}</p>
        </form>
        <div className="bgLogin hidden lg:block"></div>
      </div>
    </>
  );
}
export default Login;
