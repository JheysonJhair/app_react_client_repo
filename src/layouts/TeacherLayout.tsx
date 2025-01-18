import { Link, Outlet, useNavigate } from "react-router-dom";

const TeacherLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    navigate("/teacher/login");
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/teacher/profile">Perfil</Link>
            </li>
            <li>
              <Link to="/teacher/scientific-articles">
                Artículos Científicos
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout}>Salir</button>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 Tu Plataforma</p>
      </footer>
    </div>
  );
};

export default TeacherLayout;
