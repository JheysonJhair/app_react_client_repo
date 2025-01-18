import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    if (role === "student") {
      navigate("/student");
    } else {
      navigate("/teacher");
    }
  };

  return (
    <div>
      <h1>Bienvenido a la Aplicación</h1>
      <button onClick={() => handleRoleSelection("student")}>Estudiante</button>
      <button onClick={() => handleRoleSelection("teacher")}>Docente</button>
    </div>
  );
};

export default Home;
