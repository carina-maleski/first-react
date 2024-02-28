import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";
import capaPerfil from "../../assets/capa-de-fundo.jpg";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "erro"
      );
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">
      <img
        className="w-full h-72 object-cover border-b-8 border-stone-100"
        src={capaPerfil}
        alt="Capa do perfil"
      />
      <img
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="rounded-full w-56 h-56 object-cover mx-auto mt-[-8rem] border-8 border-stone-100 relative z-10"
      />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-stone-100 text-2xl items-center justify-center">
        <p>Nome: {usuario.nome}</p>
        <p>Email: {usuario.usuario}</p>
      </div>
    </div>
  );
}

export default Perfil;
