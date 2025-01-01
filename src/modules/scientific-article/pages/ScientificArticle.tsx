import { useEffect } from "react";
import { AiFillBook, AiFillFilePdf, AiOutlineSearch } from "react-icons/ai";

export const ScientificArticle = () => {
  useEffect(() => {
    document.title = "Artículos científicos";
  }, []);

  return (
    <section className="mt-[120px] sm:mt-10 max-w-[1350px] mx-auto py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center min-h-screen p-4">
          <div className="w-full">
            <div className="w-full flex items-center space-x-3">
              <AiFillBook size={32} className="text-primary_light" />
              <h1 className="text-3xl font-bold text-primary_light">
                Artículos Científicos
              </h1>
            </div>

            <div className="mt-6 w-full flex items-center gap-2">
              <div className=" w-full flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-primary_light">
                <AiOutlineSearch size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="flex-grow text-lg focus:outline-none"
                />
              </div>

              <button className="bg-secondary_light hover:bg-primary text-white font-bold px-6 py-3 rounded-md">
                Buscar
              </button>
            </div>
          </div>

          <div className="w-full flex flex-row mt-4">
            <section className="w-3/4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <article
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 mb-4"
                >
                  <a
                    href="#"
                    className="text-blue-600 text-lg font-bold hover:underline"
                  >
                    Correlatos neurales de la despersonalización-desrealización
                  </a>
                  <p className="text-gray-400 text-sm">Año 2024 (xxxxxx)</p>
                  <p className="text-gray-900 text-sm">
                    Doi:{" "}
                    <a
                      href="#"
                      className="text-secondary_light hover:underline"
                    >
                      https://hdl.handle.net/20.500.12724/21796
                    </a>
                  </p>
                  <p className="text-gray-900 text-sm">
                    <p>
                      Autores:{" "}
                      <span className="text-secondary_light">
                        Palomino Torres, Ana Lucía; Pezan Dedios, María
                        Victoria; Risco Nuñez Encinas
                      </span>
                    </p>
                  </p>
                  <p className="text-gray-700 mt-2">
                    El síndrome de la despersonalización (DPD) y desrealización
                    (DR) es altamente prevalente a nivel global, así es el
                    segundo síndrome más común después de la ansiedad y la
                    depresión. Estudios demuestran una prevalencia del ...
                  </p>
                  <button className="flex items-center mt-2 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600">
                    <AiFillFilePdf size={20} className="mr-2" /> PDF
                  </button>
                </article>
              ))}
            </section>
            <aside className="w-1/4 h-[250px] bg-[#F8F8F8] p-4 rounded-lg ml-4">
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Listar a nivel:
              </h3>
              <ul className="space-y-2">
                {["Revistas", "Procidis", "Patentes", "Conferencia"].map(
                  (item) => (
                    <li
                      key={item}
                      className="text-gray-700 hover:text-blue-500 cursor-pointer"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </aside>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};
