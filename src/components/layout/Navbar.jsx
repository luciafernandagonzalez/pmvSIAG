import { Link, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

export const Navbar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            SIAG
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Iniciar Sesion
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Galería
                </Link>
              </li>

              {user && user.tipoId === 1 && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mascotasabm">
                      Gestión
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/application">
                      Peticiones
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/users">
                      Usuarios
                    </Link>
                  </li>
                </>
              )}
              {user && (
                <li className="nav-item">
                  <>
                    <span>
                      {" "}
                      {user.nombre} ({user.tipo})
                    </span>
                    <button
                      onClick={handleLogout}
                      className="nav-link btn btn-link text-danger"
                      style={{ textDecoration: "none" }}
                    >
                      Cerrar Sesión
                    </button>
                  </>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
