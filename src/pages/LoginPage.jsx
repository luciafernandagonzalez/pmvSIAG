import { supabase } from "../db/supabase";
import { useUser } from "../context/userContext.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const {data: usuario, error } = await supabase
    .from("usuario")
    .select(
      `id_usuario, 
      nombre, 
      nombre_usuario,
      apellido,
      tipo_usuario:tipo_usuario_id (id_tipo_usuario, descripcion)`)
    .eq("nombre_usuario", username)
    .single();

    if (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión. Por favor, verifica tus credenciales.");
      return;
    }

    const userContext = {
    id: usuario.id_usuario,
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    tipo: usuario.tipo_usuario.descripcion,
    tipoId: usuario.tipo_usuario.id_tipo_usuario,
  };

  setUser(userContext);
  localStorage.setItem("user", JSON.stringify(userContext));

  navigate("/application");
  };

  return (
    <>
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLogin}
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
              <div className="row mt-3 ">
              <div className="col-md-6 text-center">
              <p className="mb-0">
                  ¿No tienes una cuenta? <button className="btn btn-link" >Crear Cuenta</button>
                  {/* TODO: agregar funcion */}
                </p>
                </div>
              
                <div className="col-md-6 text-center">
                <p>
                  <button className="btn btn-link" >¿Olvidaste tu contraseña?</button> 
                  {/* TODO: agregar funcion */}
                </p>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
   
  );
};
