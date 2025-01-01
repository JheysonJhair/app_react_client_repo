import React from "react";
import { useParams } from "react-router-dom";
import caratula from "../../../assets/img/caratula.png";
export const ScientificArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="mt-[130px] sm:mt-12 max-w-[1000px] mx-auto py-16">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Efectos de la ceniza de cascara de arroz sobre las propiedades mecánicas
        y durabilidad de un concreto convencional, Lambayeque-2024
      </h1>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
            <div className="w-62 h-70  flex items-center justify-center rounded-md mb-4 border-2 border-gray-400">
              <img
                src={caratula}
                alt="Default Thumbnail"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
              Descargar PDF
            </button>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-600">
                <span className="font-bold">Fecha:</span> <p>2024</p>
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Autor(es):</span>{" "}
                <p className="text-primary">Vilcabana Manayay, Jesus Alberto</p>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <p className="text-gray-400">Resumen:</p>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm text-justify">
              La presente indagación tuvo como intención principal proponer la
              implementación de un modelo de gestión de fomento del presupuesto
              participativo orientado a las brechas de servicios básicos
              públicos de la Provincia de Condorcanqui, todo ello, por medio de
              un esquema metodológico no experimental, cuantitativo, tipología
              aplicada y descriptivo – correlacional, asimismo, se manejó como
              técnica de compilación de averiguación a la encuesta y como
              instrumental al cuestionario. Las derivaciones mostraron que según
              la clarividencia de los trabajadores del municipio la gestión del
              presupuesto participativo mantiene un nivel moderado de manejo,
              pues las dimensiones de la variable superan ligeramente el
              promedio, específicamente, cerca del 50% observa que el proceso de
              preparación (43.6%), concertación (46.2%) y formulación de
              acuerdos (30.8%) se encuentra en un nivel bajo a medio. Ante ello,
              con el fin de fomentar el presupuesto participativo para la
              reducción de brechas de servicios básicos públicos de la Provincia
              de Condorcanqui, se plantearon tres estrategias a) Promover una
              interacción horizontal con la población de Condorcanqui, b)
              Concertar proyectos en función a los programas presupuestales
              dirigidos al sector saneamiento y energía, y c) Elaborar acuerdos
              a corto plazo segúnlas percepciones de la ciudadanía. Por lo
              mencionado, se concluyó que los factores críticos para comprobar
              si la ejecución del plan de mejora ha repercutido en la reducción
              de las principales brechas será la capacitación de los agentes
              participantes, el listado de proyectos y el logro de acuerdos.
              Finalmente, es preciso mencionar que, la investigación estuvo
              asociada con el ODS 17, pues al fomentar la participación
              ciudadana en la gestión de presupuestos, se promoverá una mayor
              equidad en la distribución de recursos, reduciendo las
              desigualdades dentro de la comunidad.
            </p>
            <div className="space-y-4 text-sm">
              <p className="text-gray-600 mb-4">
                <p className="font-bold">URI:</p>
                <a
                  href="https://hdl.handle.net/20.500.12724/21796"
                  className="text-secondary_light underline"
                >
                  https://hdl.handle.net/20.500.12724/21796
                </a>
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Cómo citar:</span>
                <p>
                  Observatorio Tecnológico. (2024, diciembre). Boletín del
                  Observatorio Tecnológico, año 2 (4). Carrera de Ingeniería de
                  Sistemas. Universidad de Lima.{" "}
                  https://hdl.handle.net/20.500.12724/21796
                </p>
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Editor:</span>{" "}
                <p>Carrera de Ingeniería de Sistemas. Universidad de Lima</p>
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Temas:</span>{" "}
                <p className="text-gray-600 mb-4">
                  <span className="font-bold">Temas:</span>
                  <br />
                  <a
                    href="#"
                    className="text-secondary_light block hover:underline"
                  >
                    Inteligencia artificial
                  </a>
                  <a
                    href="#"
                    className="text-secondary_light block hover:underline"
                  >
                    Educación superior
                  </a>
                  <a
                    href="#"
                    className="text-secondary_light block hover:underline"
                  >
                    Tecnología educativa
                  </a>
                  <a
                    href="#"
                    className="text-secondary_light block hover:underline"
                  >
                    Artificial intelligence
                  </a>
                  <a
                    href="#"
                    className="text-secondary_light block hover:underline"
                  >
                    Higher education
                  </a>
                  <a
                    href="#"
                    className="text-secondary_light block hover:underline"
                  >
                    Educational Technology
                  </a>
                </p>
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Colección(es):</span>
                <p> Boletín del Observatorio Tecnológico ULima [8]</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
