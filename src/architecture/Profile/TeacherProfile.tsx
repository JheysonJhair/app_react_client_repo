import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { Trash2, UserRoundPen } from "lucide-react";
import { useEffect, useState } from "react";
import { getTeacherById } from "../../services/Teacher";
import Loader from "../../common/Loader";
import { TeacherDto } from "../../types/Teacher";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

const TeacherProfile = () => {
  const [docente, setDocente] = useState<TeacherDto | null>(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const fetchedTeacher = await getTeacherById(1);
        setDocente(fetchedTeacher);
      } catch (error) {
        console.error("Error al obtener el docente:", error);
      }
    };
    fetchTeacher();
  }, [1]);

  if (!docente) {
    return <Loader />;
  }
  return (
    <>
      <Breadcrumb pageName="Perfil" />

      <div className="flex space-x-8">
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-1/3">
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative mt-4 z-30 mx-auto h-30 w-30 sm:h-40 sm:w-40 rounded-full bg-white/20 p-1 backdrop-blur">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src={docente.image}
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                {docente.firstName} {docente.lastName}
              </h3>
              <p className="font-medium">Ingenieria informatica y sistemas</p>
              <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    Peru
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    {docente.gender ? "Masculino" : "Femenino"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                    {docente.registrationCode}
                  </span>
                </div>
              </div>
              <div className="mx-auto max-w-180">
                <h4 className="font-semibold text-black dark:text-white">
                  Descripcion
                </h4>
                <p className="mt-4.5">{docente.description}</p>
              </div>
              <div className="mt-6.5">
                <div className="flex items-center justify-center gap-3.5">
                  <a
                    href={docente.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                    aria-label="social-icon"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={docente.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                    aria-label="social-icon"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={docente.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                    aria-label="social-icon"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-2/3">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Formación académica (Fuente: SUNEDU)
            </h3>
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="py-2 px-4 font-medium text-black dark:text-white xl:pl-11">
                      Grado
                    </th>
                    <th className=" py-2 px-4 font-medium text-black dark:text-white">
                      Título
                    </th>
                    <th className="py-2 px-4 font-medium text-black dark:text-white">
                      Centro de estudios
                    </th>
                    <th className=" py-2 px-4 font-medium text-black dark:text-white xl:pl-11">
                      País de Estudios
                    </th>
                    <th className=" py-2 px-4 font-medium text-black dark:text-white">
                      Fuente
                    </th>
                    <th className="py-2 px-4 font-medium text-black dark:text-white">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {docente.workExperiences.map((work, index) => (
                    <tr key={index}>
                      <td className="border-b border-[#eee] py-3 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <p className="text-black dark:text-white">
                          {work.companyName}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {work.position}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {work.jobDescription}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-3 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <p className="text-black dark:text-white">
                          {work.jobIdi}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {work.endDate
                            ? new Date(work.endDate).toLocaleDateString()
                            : "A la actualidad"}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
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
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
