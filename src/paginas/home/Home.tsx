import homeLogo from "../../assets/dognho.png";
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-cyan-900 flex justify-center">
        <div className="container grid grid-cols-2 text-stone-100">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Boas-vindas!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className="rounded bg-stone-100 text-cyan-800 py-2 px-4 font-semibold hover:bg-cyan-950 hover:text-stone-100">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={homeLogo} alt="cachorrinho" className="w-100" />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
