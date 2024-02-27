/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import Tema from "../../../models/Tema";
import { toastAlerta } from "../../../util/toastAlerta";

function DeletarTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`temas/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou. Por favor, logar novamente.", "info");
        handleLogout();
      } else if (error.toString().includes("401")) {
        toastAlerta("Usuário não autorizado", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado.", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/temas");
  }

  async function deletarTema() {
    try {
      await deletar(`/temas/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      toastAlerta("Tema apagado com sucesso.", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar o Tema.", "erro");
    }
    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-3xl text-center my-4">Deletar tema</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza que deseja apagar o tema a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-cyan-700 text-stone-100 font-bold text-xl">
          Tema
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>
        <div className="flex">
          <button
            className="w-full hover:text-stone-100 bg-cyan-500 hover:bg-cyan-800 py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full hover:text-stone-100 bg-red-300 hover:bg-red-800 py-2"
            onClick={deletarTema}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarTema;
