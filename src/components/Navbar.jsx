import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header>
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

      <Outlet />
    </>
  );
};
