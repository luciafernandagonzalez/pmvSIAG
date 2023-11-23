

export const HomePage = () => {
  return (
    <>
     <div className="container mt-5">
      {/* Banner */}
      <div className="text-center">
        <h1>Bienvenido al Sistema de Adopción de Animales</h1>
        <p>Encuentra a tu nuevo compañero </p>
      </div>

      {/* Sección de Adopciones Recientes */}
      <div className="row mt-4">
        <div className="col">
          <h2>Adopciones Recientes</h2>
        </div>
      </div>
      <div className="row">
        {/* Ejemplo de Card para Adopciones Recientes */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="src\assets\animales-redimensionados\perro2.jpg" className="card-img-top img-thumbnail" alt="Animal para adopción" />
            <div className="card-body">
              <h5 className="card-title">Nombre del Animal</h5>
              <p className="card-text">Breve descripción del animal y su historia.</p>
              <button className="btn btn-primary">Leer</button>
            </div>
          </div>
        </div>

        {/* Agrega más tarjetas según sea necesario */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="src\assets\animales-redimensionados\perro3.jpg" className="card-img-top" alt="Animal para adopción" />
            <div className="card-body">
              <h5 className="card-title">Nombre del Animal</h5>
              <p className="card-text">Breve descripción del animal y su historia.</p>
              <button className="btn btn-primary">Leer</button>
            </div>
          </div>
        </div>
        {/**/}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="src\assets\animales-redimensionados\gato3.jpg" className="card-img-top" alt="Animal para adopción" />
            <div className="card-body">
              <h5 className="card-title">Nombre del Animal</h5>
              <p className="card-text">Breve descripción del animal y su historia.</p>
              <button className="btn btn-primary">Leer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Información sobre la Adopción */}
      <div className="row mt-4">
        <div className="col">
          <h2>¿Cómo Funciona?</h2>
          <p>
            Nuestro proceso de adopción es simple y diseñado para asegurar el bienestar de los animales. Explora los animales disponibles, elige a tu favorito y comienza el proceso de adopción.
          </p>
          <button className="btn btn-info">Ver Más</button>
        </div>
        <div className="col">
          <h2>Control de Adopcion</h2>
          <p>
            Una vez que adoptes a tu mascota realizaremos controles periodicos para comprobar el estado de las mismas para asegurarnos que todo marcha bien. Recorda siempre prestar atencion a las notificaciones.
          </p>
          <button className="btn btn-info">Ver Más</button>
        </div>
      </div>

      {/* Sección de Voluntariado */}
      <div className="row mt-4">
        <div className="col">
          <h2>¡Ayudanos a mejorar!</h2>
          <p>
            Dejanos tu feedback sobre mejoras que podrian ser utiles y nos darian una mejor perfomance de la aplicacion.
          </p>
          <button className="btn btn-success">Llenar formulario</button>
        </div>
      </div>

      {/* Otros elementos según sea necesario */}
    </div>
    </>
  
  )
}
