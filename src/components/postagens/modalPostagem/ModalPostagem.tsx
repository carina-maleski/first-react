import Popup from "reactjs-popup";
import FormularioPostagem from "../formularioPostagem/FormularioPostagem";
import "./ModalPostagem.css";
import "reactjs-popup/dist/index.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 hover:bg-slate-100 hover:text-cyan-800">
            Nova postagem
          </button>
        }
        modal
      >
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;
