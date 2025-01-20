// import { Link, Outlet, useNavigate } from "react-router-dom";

// const TeacherLayout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     sessionStorage.removeItem("isAuthenticated");
//     navigate("/teacher/login");
//   };

//   return (
//     <div>
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/teacher/profile">Perfil</Link>
//             </li>
//             <li>
//               <Link to="/teacher/scientific-articles">
//                 Artículos Científicos
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <button onClick={handleLogout}>Salir</button>
//       </header>

//       <main>
//         <Outlet />
//       </main>

//       <footer>
//         <p>© 2025 Tu Plataforma</p>
//       </footer>
//     </div>
//   );
// };

// export default TeacherLayout;
import { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./app.css";
import "./bootstrap-extended.css";
import "./dark-theme.css";
import "./header-colors.css";
import "./icons.css";
import "./pace.min.css";
import "./semi-dark.css";

import "../assets/plugins/simplebar/css/simplebar.css";
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/css/metisMenu.min.css";

import "../assets/js/bootstrap.bundle.min.js";
import "../assets/js/jquery.min.js";
import "../assets/plugins/simplebar/js/simplebar.min.js";
import "../assets/plugins/metismenu/js/metisMenu.min.js";

import "../assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js";
import "../assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js";
import "../assets/js/app.js";
import Logo from "../assets/img/logo_universidad.png";
import User from "../assets/img/avatar-1.png";
const TeacherLayout = () => {
  const navigate = useNavigate();

  // ---------------------------------------------------------------- SCRIPTS
  useEffect(() => {
    const bootstrapLink = document.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href =
      "https:cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapLink);

    const bootstrapScript = document.createElement("script");
    bootstrapScript.src =
      "https:cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js";
    bootstrapScript.defer = true;
    document.body.appendChild(bootstrapScript);

    return () => {
      document.head.removeChild(bootstrapLink);
      document.body.removeChild(bootstrapScript);
    };
  }, []);

  //---------------------------------------------------------------- HANDLE LOGOUT
  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    navigate("/teacher/login");
  };

  return (
    <>
      <div className="wrapper">
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div>
              <img src={Logo} className="w-32" alt="logo icon" />
            </div>

            <div className="toggle-icon ms-auto">
              <i className="bx bx-arrow-back red-text" />
            </div>
          </div>
          <ul className="metismenu" id="menu">
            <li className="">
              <NavLink to="/">
                <div className="parent-icon">
                  <i className="bx bx-home-alt" />
                </div>
                <div className="menu-title">PANEL PRINCIPAL</div>
              </NavLink>
            </li>

            <li className="menu-label">GESTIÓN DE EVENTOS</li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-calendar-event" />
                </div>
                <div className="menu-title">Eventos</div>
              </a>

              <ul>
                <li>
                  <NavLink to="/new-event/">
                    <i className="bx bx-radio-circle" />
                    Crear Evento
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/attendance-event">
                    <i className="bx bx-radio-circle" />
                    Asistencias
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-label">Gestion de Usuarios</li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-user-voice" />
                </div>
                <div className="menu-title">Docentes</div>
              </a>

              <ul>
                <li>
                  <NavLink to="/new-teacher/">
                    <i className="bx bx-radio-circle" />
                    Crear Docente
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/teacher/">
                    <i className="bx bx-radio-circle" />
                    Docentes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/teachers-assistance/">
                    <i className="bx bx-radio-circle" />
                    Asistencias
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/teachers-assistance/">
                    <i className="bx bx-radio-circle" />
                    Tomar Asistencia
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-user-circle" />
                </div>
                <div className="menu-title">Estudiantes</div>
              </a>

              <ul>
                <li>
                  <NavLink to="/new-student/">
                    <i className="bx bx-radio-circle" />
                    Crear Estudiante
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student/">
                    <i className="bx bx-radio-circle" />
                    Estudiantes
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-user" />
                </div>
                <div className="menu-title">Invitados</div>
              </a>

              <ul>
                <li>
                  <NavLink to="/new-student/">
                    <i className="bx bx-radio-circle" />
                    Crear Invitado
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student/">
                    <i className="bx bx-radio-circle" />
                    Invitados
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="menu-label">Informes &amp; Gráficos</li>
            <li>
              <NavLink to="/reports/">
                <div className="parent-icon">
                  <i className="bx bx-table" />
                </div>
                <div className="menu-title">Inventario</div>
              </NavLink>
            </li>

            <li>
              <a
                href="https:www.linkedin.com/in/jheysonjhairpro/"
                target="_blank"
              >
                <div className="parent-icon">
                  <i className="bx bx-support" />
                </div>
                <div className="menu-title">Ayuda</div>
              </a>
            </li>
          </ul>
        </div>
        <header>
          <div className="topbar d-flex align-items-center">
            <nav className="navbar navbar-expand gap-3">
              <div className="mobile-toggle-menu">
                <i className="bx bx-menu" />
              </div>

              <div className="top-menu ms-auto">
                <ul className="navbar-nav align-items-center gap-1"></ul>
              </div>
              <div className="user-box dropdown px-3">
                <a
                  className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={User} className="user-img" alt="user avatar" />
                  <div className="user-info">
                    <p className="user-name mb-0">EBERT GOMEZ</p>
                    <p className="designattion mb-0">ADMINISTRADOR</p>
                  </div>
                </a>
                <button onClick={handleLogout}>Salir</button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="/"
                      onClick={handleLogout}
                    >
                      <i className="bx bx-log-out-circle" />
                      <span>Cerrar sesión</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <div className="page-wrapper">
          <div className="page-content">
           {/* <Outlet /> */}
          </div>
        </div>
        <div className="overlay toggle-icon" />
        <a href="#" className="back-to-top">
          <i className="bx bxs-up-arrow-alt" />
        </a>
        <footer className="page-footer">
          <p className="mb-0">
            Copyright © UNAMBA 2024. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </>
  );
};

export default TeacherLayout;
