import homeLogo from "../../assets/dognho.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-cyan-900 flex justify-center">
        <div className="container grid grid-cols-2 text-stone-100">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-around gap-4">
              <button className="rounded bg-stone-100 text-cyan-800 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={homeLogo} alt="" className="w-2/6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
