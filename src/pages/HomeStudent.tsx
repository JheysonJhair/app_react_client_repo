import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "./components/Hero";
import { TeacherDto } from "../types/Teacher";
import { getTeachers } from "../services/Student/Teacher";

export const HomeStudent = () => {
  const [docentes, setDocentes] = useState<TeacherDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  //---------------------------------------------------------------- GET TEACHERS
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const products = await getTeachers();
        console.log(products);

        if (products == null) {
          setDocentes([]);
        } else {
          setDocentes(products);
        }

        
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    loadProducts();
  }, []);

  const handleCardClick = (docente: TeacherDto) => {
    navigate(`/student/teacher/${docente.id}`, { state: docente });
  };

  return (
    <>
      <Hero />
      <section className="py-4 bg-[#fff]">
        <div className=" mx-auto px-14">
          <h3 className="mb-12 text-center text-xl text-primary">
            Aquí encontrarás una amplia colección de recursos académicos y
            científicos desarrollados por nuestra comunidad universitaria. Este
            espacio está diseñado para promover el acceso abierto al
            conocimiento, resguardar la producción intelectual de estudiantes,
            docentes e investigadores, y fomentar el intercambio de ideas y
            saberes.
          </h3>

          {loading ? (
            <div className="text-center">Cargando docentes...</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
              {docentes.map((docente) => (
                <div
                  key={docente.id}
                  className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 cursor-pointer"
                  style={{ height: "350px" }}
                  onClick={() => handleCardClick(docente)}
                >
                  <img
                    className="w-full h-48 object-contain"
                    src={docente.image}
                    alt={docente.firstName}
                  />

                  <div className="p-4 flex flex-col justify-between">
                    <h4 className="text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                      {docente.firstName} {docente.lastName}
                    </h4>
                    <p className="text-xl font-semibold text-gray-800">
                      Ingeniería en informática y sistemas
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
