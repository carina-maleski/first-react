import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { nome, setNome } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <h2 className="text-slate-900 text-5xl m-4">Logar</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Nome</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            className="border-2 border-slate-700 rounded p-2"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="my-4 rounded bg-cyan-400 hover:bg-cyan-900 text-stone-100 w-1/2 py-2 flex justify-center"
        >
          <span>Entrar</span>
        </button>
      </form>
    </div>
  );
}

// const Login = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h2 className="text-slate-900 text-5xl m-4">Login</h2>
//       <div>
//         <button
//           type="submit"
//           onClick={() => {
//             navigate("/home");
//           }}
//           className="hover:underline mx-4"
//         >
//           Login useNavigate
//         </button>
//         <Link to="/home" className="hover:underline mx-4">
//           Login por Link
//         </Link>
//       </div>
//     </div>
//   );
// };

export default Login;
