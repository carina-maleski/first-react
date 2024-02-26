/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import Postagem from "../../../models/Postagem";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";

function DeletarPostagem() {
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou. Por favor, logar novamente.");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/postagens");
  }

  async function deletarPostagem() {
    try {
      await deletar(`/postagens/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Postagem apagada com sucesso.");
    } catch (error) {
      alert("Erro ao apagar a Postagem.");
    }
    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-3xl text-center my-4">Deletar postagem</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza que deseja apagar a postagem a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-4 px-8 bg-cyan-700 text-stone-100 font-bold text-2xl">
          Postagem
        </header>
        <div className="p-4">
          <p className="text-xl h-full">{postagem.titulo}</p>
          <p>{postagem.texto}</p>
        </div>
        <div className="flex">
          <button
            className="w-full hover:text-stone-100 bg-cyan-500 hover:bg-cyan-800 py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full hover:text-stone-100 bg-red-300 hover:bg-red-800 py-2"
            onClick={deletarPostagem}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarPostagem;
