import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
     {
      /*
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1>
          <Link to="/">Logo</Link>
        </h1>

        <nav>
          <Link to='/login'>Iniciar sesion</Link>
          <Link to='register'>Registrarse</Link>
        </nav>  

        <div className="user">
          <span className="username">Admin</span>
          <button className="btn-logout">Cerrar Sesion</button>
        </div>

      </header>

      
     */}

     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">SIAG</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/login">Iniciar Sesion</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/mascotasabm">Dar de Alta</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/galeria">Galeria</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/tabla">Tabla</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />


    </>
  );
};
