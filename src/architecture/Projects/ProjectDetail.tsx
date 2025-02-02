import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectFormData } from "../../types/Teacher/Project";
import {
  deleteResearchProject,
  getProjectGetById,
  updateResearchProject,
} from "../../services/Teacher/ResearchProject";
import Loader from "../../common/Loader";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../validation/validateFormProject";
import { ToastContainer, Bounce, toast } from "react-toastify";
import Modal from "../../pages/Modal";
import FileUpload from "./File/FileUpload";
import ConfirmModal from "../../components/ModalConfirm/ConfirmModal";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const userData = sessionStorage.getItem("userData");
  const user = userData ? JSON.parse(userData) : null;

  const [deleteId, setDeleteId] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [project, setProject] = useState<ProjectFormData | null>(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (id) {
          const data = await getProjectGetById(id);
          setProject(data);
          setFormData(data);
        }
      } catch (error) {
        console.error("Error al obtener detalles del proyecto:", error);
      }
    };
    fetchProject();
  }, [id]);

  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    authors: "",
    description: "",
    summary: "",
    year: "",
    doi: "",
    editor: "",
    file: null,
    idTeacher: user.id,
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    title: "",
    authors: "",
    description: "",
    summary: "",
    year: "",
    doi: "",
    editor: "",
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
        const response = await updateResearchProject("1", formData);
        if (response.success) {
          toast.success(response.message, {
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
          setFormData({
            title: "",
            authors: "",
            description: "",
            summary: "",
            year: "",
            doi: "",
            editor: "",
            file: null,
            idTeacher: user.id,
          });
          setErrors({
            title: "",
            authors: "",
            description: "",
            summary: "",
            year: "",
            doi: "",
            editor: "",
            file: "",
          });
        } else {
          toast.error(response.message, {
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

  const handleConfirmDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await deleteResearchProject(deleteId);
      if (response.success) {
        setShowModal(false);
        toast.success(response.message, {
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
        setTimeout(() => {
          navigate("/teacher/projects");
        }, 1000);
      } else {
        toast.error(response.message, {
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
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  if (!project) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb pageName="Detales del proyecto" />

      <div className=" py-4 px-6.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex items-center justify-between border-b">
          <div className="w-48 h-48 mr-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJ1D7HGqBUMobz1Nb6UP4ZeDaA5JqNmHlmA&s"
              alt="Proyecto"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          <div className="flex-1 py-3">
            <p className=" text-black dark:text-white-700 mt-4 mb-2">
              <strong className=" text-black dark:text-white">
                Descripción:
              </strong>{" "}
              <span className=" text-black dark:text-gray-400">
                {project.description}
              </span>
            </p>
            <p className=" text-black dark:text-white-700 mb-2">
              <strong className=" text-black dark:text-white">Resumen:</strong>{" "}
              <span className=" text-black dark:text-gray-400">
                {project.summary}
              </span>
            </p>
            <p className=" text-black dark:text-white-700 mb-2">
              <strong className=" text-black dark:text-white">DOI:</strong>
              <span className=" text-black dark:text-gray-400">
                {project.doi}
              </span>
            </p>
            <p className=" text-black dark:text-white-700 mb-2">
              <strong className=" text-black dark:text-white">Autores:</strong>{" "}
              <span className=" text-black dark:text-gray-400">
                {project.authors}
              </span>
            </p>
            <p className=" text-black dark:text-white-700 mb-2">
              <strong className=" text-black dark:text-white">Editor:</strong>{" "}
              <span className=" text-black dark:text-gray-400">
                {project.editor}
              </span>
            </p>

            <div className="flex justify-end items-center mt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600"
              >
                Editar
              </button>
              <button
                onClick={() => {
                  setShowModal(true);
                  setDeleteId(id);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
          <div className="p-4 relative">
            <button
              className="absolute top-2 right-2 text-black dark:text-white hover:text-opacity-70"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <h3 className="pb-2 text-xl font-bold text-black sm:text-2xl">
              Editar Artículo
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="row flex gap-4">
                  <div className="w-full mb-4.5">
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
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-4.5">
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
                  </div>{" "}
                </div>
                <div className="row flex gap-4">
                  <div className="w-full mb-4.5">
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
                        <p className="text-red-500 text-sm mt-1">
                          {errors.year}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Doi
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="doi"
                        placeholder="000000"
                        className={`form-datepicker w-full rounded border-[1.5px] ${
                          errors.doi
                            ? "border-red-500 dark:border-red-500"
                            : "border-stroke dark:border-form-strokedark"
                        } bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                        value={formData.doi}
                        onChange={handleInputChange}
                      />
                      {errors.doi && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.doi}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Editor
                    </label>
                    <input
                      type="text"
                      name="editor"
                      placeholder="Ingrese el editor"
                      className={`w-full rounded border-[1.5px] ${
                        errors.editor
                          ? "border-red-500 dark:border-red-500"
                          : "border-stroke dark:border-form-strokedark"
                      } bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white dark:focus:border-primary`}
                      value={formData.editor}
                      onChange={handleInputChange}
                    />

                    {errors.editor && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.editor}
                      </p>
                    )}
                  </div>
                </div>
                <div className="row flex gap-4">
                  <div className="w-full mb-6">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Resumen
                    </label>
                    <textarea
                      rows={4}
                      name="summary"
                      placeholder="Ingrese un pequeño resumen"
                      className={`w-full rounded border-[1.5px] ${
                        errors.summary
                          ? "border-red-500 dark:border-red-500"
                          : "border-stroke dark:border-form-strokedark"
                      } bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
                      value={formData.summary}
                      onChange={handleInputChange}
                    ></textarea>
                    {errors.summary && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.summary}
                      </p>
                    )}
                  </div>

                  <div className="w-full mb-6">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Descripción
                    </label>
                    <textarea
                      rows={4}
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
                  <div className="w-full">
                    {" "}
                    <label className="mb-2.5 block text-black dark:text-white">
                      Cambiar documento
                    </label>
                    <FileUpload
                      allowedFormats={["pdf", "docx", "txt"]}
                      maxSizeMB={12}
                      onFileUpload={handleFileUpload}
                      error={errors.file}
                    />
                    {errors.file && (
                      <p className="text-red-500 text-sm mb-3">{errors.file}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Crear Proyecto
                </button>
              </div>
            </form>
          </div>
        </Modal>
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
          className="z-9999"
          transition={Bounce}
        />{" "}
        <ConfirmModal
          isOpen={showModal}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </div>
    </>
  );
}
