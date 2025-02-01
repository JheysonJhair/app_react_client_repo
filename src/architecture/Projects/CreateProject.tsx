import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import FileUpload from "./File/FileUpload";
import { validateForm } from "../../validation/validateFormProject";
import { ProjectFormData } from "../../types/Teacher/Project";
import { ToastContainer, Bounce, toast } from "react-toastify";

const CreateProject = () => {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    authors: "",
    year: "",
    description: "",
    file: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    title: "",
    authors: "",
    year: "",
    description: "",
    file: "",
  });

  const handleFileUpload = (file: File) => {
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      file: "",
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const { tempErrors } = validateForm({ ...formData, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: tempErrors[name],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { tempErrors, isValid } = validateForm(formData);
    setErrors(tempErrors);

    if (isValid) {
      try {
        const response = await fetch("https://api.ejemplo.com/proyecto", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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

  return (
    <>
      <Breadcrumb pageName="Crear proyecto" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Titulo
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Ingrese el título"
                    className={`w-full rounded border-[1.5px] ${
                      errors.title
                        ? "border-red-500 dark:border-red-500"
                        : "border-stroke dark:border-form-strokedark"
                    } bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white dark:focus:border-primary`}
                    value={formData.title}
                    onChange={handleInputChange}
                  />

                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                  )}
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Autores
                  </label>
                  <input
                    type="text"
                    name="authors"
                    placeholder="Ingrese los autores"
                    className={`w-full rounded border-[1.5px] ${
                      errors.authors
                        ? "border-red-500 dark:border-red-500"
                        : "border-stroke dark:border-form-strokedark"
                    } bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
                    value={formData.authors}
                    onChange={handleInputChange}
                  />
                  {errors.authors && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.authors}
                    </p>
                  )}
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Seleccione el año
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="year"
                      className={`form-datepicker w-full rounded border-[1.5px] ${
                        errors.year
                          ? "border-red-500 dark:border-red-500"
                          : "border-stroke dark:border-form-strokedark"
                      } bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                      value={formData.year}
                      onChange={handleInputChange}
                    />
                    {errors.year && (
                      <p className="text-red-500 text-sm mt-1">{errors.year}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Descripción
                  </label>
                  <textarea
                    rows={3}
                    name="description"
                    placeholder="Ingrese una pequeña descripcion"
                    className={`w-full rounded border-[1.5px] ${
                      errors.description
                        ? "border-red-500 dark:border-red-500"
                        : "border-stroke dark:border-form-strokedark"
                    } bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <FileUpload
                  allowedFormats={["pdf", "docx", "txt"]}
                  maxSizeMB={12}
                  onFileUpload={handleFileUpload}
                  error={errors.file}
                />
                {errors.file && (
                  <p className="text-red-500 text-sm mb-3">{errors.file}</p>
                )}
                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Crear Proyecto
                </button>
              </div>
            </form>
          </div>
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
      </div>
    </>
  );
};

export default CreateProject;
