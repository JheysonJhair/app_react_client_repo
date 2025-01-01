import React from "react";
import { useParams } from "react-router-dom";
import { FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";

export const TeacherDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <section className="sm:mt-14  px-4  max-w-6xl mx-auto pt-16 pb-4 flex flex-col sm:flex-row  gap-8">
        <div className="bg-[#F8F8F8] p-6 w-full sm:w-1/3 text-center flex flex-col items-center">
          <div className="w-40 h-40 bg-[#ffffff] rounded-md overflow-hidden flex items-center justify-center mb-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/007/421/470/small/handsome-cheerful-bearded-man-smiles-gladfully-dressed-in-casual-white-t-shirt-being-in-good-mood-poses-against-blue-background-with-copy-space-glad-european-guy-with-stubble-stands-indoor-free-photo.jpg"
              alt="Foto del Profesor"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="text-gray-700 space-y-2 text-left w-full">
            <li className="flex justify-between">
              <span className="font-bold">Género:</span>
              <span>Masculino</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold">Nacionalidad:</span>
              <span>Perú</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold">Código de Registro:</span>
              <span>001232</span>
            </li>
          </ul>
          <div className="flex justify-center space-x-4 mt-4">
            <FaFacebook className="text-secondary_light text-xl cursor-pointer" />
            <FaEnvelope className="text-secondary_light text-xl cursor-pointer" />
            <FaLinkedin className="text-secondary_light text-xl cursor-pointer" />
          </div>
        </div>

        <div className="bg-[#F8F8F8] p-6  w-full sm:w-2/3">
          <h2 className="text-secondary_light text-xl font-bold mb-4">
            IBARRA CABRERA MANUEL JESUS
          </h2>
          <p className="text-black leading-7 text-justify">
            Profesor Ordinario en la categoría de Principal en la Universidad
            Nacional Micaela Batidas de Apurímac - Perú. Ingeniero Informático y
            de Sistemas, con Magister en Ciencias mención Computación en la
            Universidad de Chile, y doctorado en Ciencias de la Computación UNA
            Perú, pasantía en el Departamento de Diseño Industrial en la
            Universidad de Tecnología de Eindhoven - Holanda. Area de
            investigación: de Ingeniería de software, informática educativa,
            juegos educativos, computación movil y sistemas colaborativos.
          </p>
        </div>

        <div className="fixed bottom-8 right-8 bg-black p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer">
          <span className="text-teal-400 font-bold text-xl">V</span>
        </div>
      </section>
      <section className="mt-8 px-4 max-w-6xl mx-auto mb-12">
        <div className="mb-8">
          <h3 className="text-secondary_light text-lg font-bold mb-4 text-center sm:text-left">
            EXPERIENCIA LABORAL
          </h3>
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border border-gray-300 p-2">Institución</th>
                <th className="border border-gray-300 p-2">Cargo</th>
                <th className="border border-gray-300 p-2">
                  Descripción del cargo
                </th>
                <th className="border border-gray-300 p-2">Cargo en I+D+I</th>
                <th className="border border-gray-300 p-2">Fecha Inicio</th>
                <th className="border border-gray-300 p-2">Fecha Fin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURÍMAC
                </td>
                <td className="border border-gray-300 p-2">DOCENTE</td>
                <td className="border border-gray-300 p-2">Docente</td>
                <td className="border border-gray-300 p-2">
                  Docente Investigador
                </td>
                <td className="border border-gray-300 p-2">Marzo 2004</td>
                <td className="border border-gray-300 p-2">A la actualidad</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  UNIVERSIDAD TECNOLÓGICA DE LOS ANDES
                </td>
                <td className="border border-gray-300 p-2">PROFESOR</td>
                <td className="border border-gray-300 p-2">
                  CONTRATADO A TIEMPO PARCIAL
                </td>
                <td className="border border-gray-300 p-2">---</td>
                <td className="border border-gray-300 p-2">Abril 2002</td>
                <td className="border border-gray-300 p-2">Junio 2019</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h3 className="text-secondary_light text-lg font-bold mb-4 text-center sm:text-left">
            EXPERIENCIA LABORAL COMO DOCENTE
          </h3>
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border border-gray-300 p-2">Institución</th>
                <th className="border border-gray-300 p-2">Tipo Institución</th>
                <th className="border border-gray-300 p-2">Tipo Docente</th>
                <th className="border border-gray-300 p-2">
                  Descripción del cargo
                </th>
                <th className="border border-gray-300 p-2">Fecha Inicio</th>
                <th className="border border-gray-300 p-2">Fecha Fin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURÍMAC
                </td>
                <td className="border border-gray-300 p-2">Universidad</td>
                <td className="border border-gray-300 p-2">
                  Ordinario-Principal
                </td>
                <td className="border border-gray-300 p-2">Docente</td>
                <td className="border border-gray-300 p-2">Marzo 2004</td>
                <td className="border border-gray-300 p-2">A la actualidad</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-secondary_light text-lg font-bold mb-4 text-center sm:text-left">
            EXPERIENCIA COMO ASESOR DE TESIS
          </h3>
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border border-gray-300 p-2">Universidad</th>
                <th className="border border-gray-300 p-2">Tesis</th>
                <th className="border border-gray-300 p-2">Tesista(s)</th>
                <th className="border border-gray-300 p-2">Repositorio</th>
                <th className="border border-gray-300 p-2">
                  Fecha Aceptación de Tesis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURÍMAC
                </td>
                <td className="border border-gray-300 p-2">
                  Licenciado / Título
                </td>
                <td className="border border-gray-300 p-2">
                  Mamani Coaquira Yonatán
                </td>
                <td className="border border-gray-300 p-2 text-center">🔍</td>
                <td className="border border-gray-300 p-2">Mayo 2014</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURÍMAC
                </td>
                <td className="border border-gray-300 p-2">
                  Licenciado / Título
                </td>
                <td className="border border-gray-300 p-2">
                  LÓPEZ OTERO MARISELA KATHERINE
                </td>
                <td className="border border-gray-300 p-2 text-center">🔍</td>
                <td className="border border-gray-300 p-2">Agosto 2016</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURÍMAC
                </td>
                <td className="border border-gray-300 p-2">
                  Licenciado / Título
                </td>
                <td className="border border-gray-300 p-2">
                  TAPIA SUELDO BIXBI
                </td>
                <td className="border border-gray-300 p-2 text-center">🔍</td>
                <td className="border border-gray-300 p-2">Diciembre 2017</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
