import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="flex items-center gap-9 font-medium text-primary">
      <Link
        className={`${
          pathname === "/" ? "text-primary font-semibold" : "text-black"
        } hover:text-primary transition`}
        to={"/"}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Inicio
      </Link>
      <Link
        className={`${
          pathname === "/scientific-article"
            ? "text-primary font-semibold"
            : "text-black"
        } hover:text-primary transition`}
        to={"/scientific-article"}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("/scientific-article");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Artículos Científicos
      </Link>
      <Link
        className={`${
          pathname === "/research-project"
            ? "text-primary font-semibold"
            : "text-black"
        } hover:text-primary transition`}
        to={"/research-project"}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("/research-project");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Proyectos de Investigacion
      </Link>
      <Link
        className={`${
          pathname === "/contact" ? "text-primary font-semibold" : "text-black"
        } hover:text-primary transition`}
        to={"/contact"}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation("/contact");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Soporte
      </Link>
    </nav>
  );
};
