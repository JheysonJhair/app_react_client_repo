import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "teacher@example.com" && password === "password123") {
      sessionStorage.setItem("isAuthenticated", "true");
      navigate("/teacher");
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <div>
      <h2>Login Docente</h2>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default TeacherLogin;
