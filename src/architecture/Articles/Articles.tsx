import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { Trash2, UserRoundPen } from "lucide-react";
import Modal from "../../pages/Modal";
import { Article } from "../../types/Teacher/Article";
import { validateForm } from "../../validation/validateFormArticle";
import { ToastContainer, Bounce, toast } from "react-toastify";

const Articles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [data, setData] = useState<Article>({
    title: "",
    link: "",
    doi: "",
    articleType: 0,
    date: "",
    status: 0,
    description: "",
    summary: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    title: "",
    link: "",
    doi: "",
    articleType: "",
    date: "",
    status: "",
    description: "",
    summary: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const { tempErrors } = validateForm({ ...data, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: tempErrors[name],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { tempErrors, isValid } = validateForm(data);
    setErrors(tempErrors);
    if (isValid) {
      console.log(data);
      try {
        const response = await fetch("https://api.ejemplo.com/proyecto", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          toast.success("Se creo correctamente", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          toast.error("Erro de backend", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } catch (error) {
        toast.error("Opps, Algo salio mal!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
  };

  const handleEditClickarticle = (newData: Article) => {
    console.log(newData);
    setData((prevData) => ({
      ...prevData, 
      ...newData, 
    }));
    setIsModalOpen(true);
  };

  const articles = [
    {
      title: "La inteligencia artificial en la educación superior",
      date: "2023",
      doi: "345453",
      link: "https://example.com/ai_education_2023",
      articleType: 0,
      status: 1,
      description: "aaaaaaaaaaaaaa",
      summary: "aaaaaaaaaaa",
    },
    {
      title: "El impacto de la tecnología en la salud",
      date: "2022",
      doi: "345453",
      link: "https://example.com/tech_health_2022",
      status: 1,
      articleType: 0,
      description: "aaaaaaaaaaaaaa",
      summary: "aaaaaaaaaaa",
    },
    {
      title: "Nuevas tendencias en la educación a distancia",
      date: "2021",
      doi: "1345453",
      link: "https://example.com/education_distance_2021",
      articleType: 0,
      status: 1,
      description: "aaaaaaaaaaaaaa",
      summary: "aaaaaaaaaaa",
    },
    {
      title: "Desarrollo de software para sistemas inteligentes",
      date: "2023",
      doi: "345453",
      link: "https://example.com/software_smart_systems_2023",
      articleType: 0,
      status: 1,
      description: "aaaaaaaaaaaaaa",
      summary: "aaaaaaaaaaa",
    },
    {
      title: "Innovaciones en la biotecnología aplicada",
      date: "2020",
      doi: "3454530",
      link: "https://example.com/biotech_innovations_2020",
      status: 1,
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
                    <p className="text-black dark:text-white">{article.date}</p>
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
                        article.status === 1
                          ? "bg-success text-success"
                          : article.status === 2
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                      }`}
                    >
                      {article.status === 1
                        ? "Activo"
                        : article.status === 2
                        ? "Inactivo"
                        : "Pendiente"}
                    </p>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                        <UserRoundPen
                          onClick={() => handleEditClickarticle(article)}
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
        {data && (
          <Modal isOpen={isModalOpen} onClose={closeModal} size="lg">
            {data && (
              <div className="p-4 relative">
                <button
                  className="absolute top-2 right-2 text-black dark:text-white  hover:text-opacity-70 "
                  onClick={closeModal}
                  aria-label="Cerrar"
                >
                  ✕
                </button>

                <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Editar Articulo
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Título
                    </label>
                    <input
                      id="title"
                      type="text"
                      name="title"
                      className={`w-full rounded border-[1.5px] ${
                        errors.title
                          ? "border-red-500 dark:border-red-500"
                          : "border-stroke dark:border-form-strokedark"
                      } bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white dark:focus:border-primary`}
                      value={data.title}
                      onChange={handleInputChange}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Año
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        className={`form-datepicker w-full rounded border-[1.5px] ${
                          errors.date
                            ? "border-red-500 dark:border-red-500"
                            : "border-stroke dark:border-form-strokedark"
                        } bg-transparent  px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                        placeholder="mm/dd/yyyy"
                        data-class="flatpickr-right"
                        value={data.date ? data.date.split("T")[0] : ""}
                        onChange={handleInputChange}
                      />
                      {errors.date && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.date}
                        </p>
                      )}
                      <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center  bg-white shadow-default  dark:bg-form-input  my-4 z-10">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                            fill="#64748B"
                          />
                        </svg>{" "}
                      </div>
                    </div>{" "}
                  </div>
                  <div className="flex gap-4">
                    <div className="mb-4 w-3/5">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        DOI
                      </label>
                      <input
                        id="doi"
                        type="text"
                        name="doi"
                        className={`w-full rounded border-[1.5px] ${
                          errors.doi
                            ? "border-red-500 dark:border-red-500"
                            : "border-stroke dark:border-form-strokedark"
                        } bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white dark:focus:border-primary`}
                        value={data.doi}
                        onChange={handleInputChange}
                      />
                      {errors.doi && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.doi}
                        </p>
                      )}
                    </div>
                    <div className="mb-4 w-2/5">
                      <label className="block text-sm font-medium text-black dark:text-white">
                        Estado
                      </label>
                      <select
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                        value={data.status ? "Activo" : "Inactivo"}
                        onChange={handleInputChange}
                      >
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                      </select>
                    </div>{" "}
                  </div>
                  <div className="mb-4">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Enlace
                    </label>
                    <input
                      id="link"
                      type="text"
                      name="link"
                      className={`w-full rounded border-[1.5px] ${
                        errors.link
                          ? "border-red-500 dark:border-red-500"
                          : "border-stroke dark:border-form-strokedark"
                      } bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white dark:focus:border-primary`}
                      value={data.link}
                      onChange={handleInputChange}
                    />
                    {errors.link && (
                      <p className="text-red-500 text-sm mt-1">{errors.link}</p>
                    )}
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-primary text-white px-4 py-2 rounded"
                      type="submit"
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Modal>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className={" z-9999"}
        transition={Bounce}
      />
    </>
  );
};

export default Articles;
