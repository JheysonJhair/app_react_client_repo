import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { Trash2, UserRoundPen } from "lucide-react";

const Articles = () => {
  // Datos simulados para los artículos
  const articles = [
    {
      title: "La inteligencia artificial en la educación superior",
      year: "2023",
      doi: "345453",
      link: "https://example.com/ai_education_2023",
      status: true,
    },
    {
      title: "El impacto de la tecnología en la salud",
      year: "2022",
      doi: "345453",
      link: "https://example.com/tech_health_2022",
      status: true,
    },
    {
      title: "Nuevas tendencias en la educación a distancia",
      year: "2021",
      doi: "1345453",
      link: "https://example.com/education_distance_2021",
      status: false,
    },
    {
      title: "Desarrollo de software para sistemas inteligentes",
      year: "2023",
      doi: "345453",
      link: "https://example.com/software_smart_systems_2023",
      status: false,
    },
    {
      title: "Innovaciones en la biotecnología aplicada",
      year: "2020",
      doi: "3454530",
      link: "https://example.com/biotech_innovations_2020",
      status: true,
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Artículos" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[280px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Titulo
                </th>
                <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white">
                  Año
                </th>
                <th className="min-w-[60px] py-4 px-4 font-medium text-black dark:text-white">
                  DOI
                </th>
                <th className="min-w-[20px] py-4 px-4 font-medium text-black dark:text-white">
                  Enlace
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Estado
                </th>
                <th className="min-w-[60px] py-4 px-4 font-medium text-black dark:text-white">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <p className="text-black dark:text-white">
                      {article.title}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{article.year}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{article.doi}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{article.link}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                        article.status === true
                          ? "bg-success text-success"
                          : article.status === false
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                      }`}
                    >
                      {article.status === true
                        ? "Activo"
                        : article.status === false
                        ? "Inactivo"
                        : "Pendiente"}
                    </p>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                        <UserRoundPen
                          className="text-primary dark:text-white"
                          size={21}
                        />
                      </button>
                      <button className="hover:text-primary">
                        <Trash2
                          className="text-primary dark:text-white"
                          size={21}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Articles;
