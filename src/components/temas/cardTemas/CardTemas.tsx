import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";

interface CardTemaProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-cyan-700 text-stone-100 font-bold justify-between">
        Tema
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>
      <div className="flex">
        <Link
          to={`/editarTema/${tema.id}`}
          className=" w-full hover:text-stone-100 bg-cyan-500 hover:bg-cyan-800 flex item-center justify-center py-2"
        >
          Editar
        </Link>
        <Link
          to={`/deletarTema/${tema.id}`}
          className="w-full hover:text-stone-100 bg-red-300 hover:bg-red-800 flex items-center justify-center py-2"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
