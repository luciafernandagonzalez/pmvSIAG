

export const LoginPage = () => {

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
                  <label htmlFor="username" className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    
                   
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    
                   
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
              <div className="row mt-3 ">
              <div className="col-md-6 text-center">
              <p className="mb-0">
                  ¿No tienes una cuenta? <button className="btn btn-link" >Crear Cuenta</button>
                </p>
                </div>
              
                <div className="col-md-6 text-center">
                <p>
                  <button className="btn btn-link" >¿Olvidaste tu contraseña?</button>
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
