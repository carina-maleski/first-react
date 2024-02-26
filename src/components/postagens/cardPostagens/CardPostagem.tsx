import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagemProps {
  post: Postagem;
}

function CardPostagem({ post }: CardPostagemProps) {
  return (
    <div>
      <div>
        <div>
          <img />
          <h3>{post.usuario?.nome}</h3>
        </div>
        <div>
          <h4>{post.titulo}</h4>
          <p>{post.texto}</p>
          <p>Tema: {post.tema?.descricao}</p>
          <p>
            Data:{" "}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(post.data))}
          </p>
        </div>
      </div>
      <div>
        <Link>
          <button>Editar</button>
        </Link>
        <Link>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
