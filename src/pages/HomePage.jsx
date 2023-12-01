import { useState, useEffect } from "react";
import { db } from "../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const HomePage = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    //obtener imagenes de bd y almacenarlas en estado
    const fetchMascotas = async () => {
      try {
        // const mascotasSnapshot = await getDocs(collection(db, "mascotas"));
        const q = query(collection(db, "mascotas"), where("estado", "==", 2));
        const mascotasSnapshot = await getDocs(q);

        const mascotasData = mascotasSnapshot.docs.map((doc) => ({
          id: doc.id,
          nombre: doc.nombre,
          especie: doc.especie,
          raza: doc.raza,
          observacion: doc.observacion,
          historiaClinica: doc.historiaClinica,
          imagen: doc.imagen,
          estado: doc.estado,
          ...doc.data(),
        }));

        setMascotas(mascotasData);
      } catch (error) {
        console.error("Error fetching mascotas", error);
      }
    };

    fetchMascotas();
  }, []);

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
          {mascotas.map((mascota) => (
            <div className="col-md-4 mb-4" key={mascota.id}>
              <div className="card">
                <img
                  src={mascota.imagen}
                  className="card-img-top img-thumbnail"
                  alt="Animal para adopción"
                />
                <div className="card-body">
                  <h5 className="card-title">{mascota.nombre}</h5>
                  <p className="card-text">
                  {mascota.observacion}
                  </p>
                  {/* <button className="btn btn-primary">Leer</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Información sobre la Adopción */}
        <div className="row mt-4">
          <div className="col">
            <h2>¿Cómo Funciona?</h2>
            <p>
              Nuestro proceso de adopción es simple y diseñado para asegurar el
              bienestar de los animales. Explora los animales disponibles, elige
              a tu favorito y comienza el proceso de adopción.
            </p>
            <button className="btn btn-info">Ver Más</button>
          </div>
          <div className="col">
            <h2>Control de Adopcion</h2>
            <p>
              Una vez que adoptes a tu mascota realizaremos controles periodicos
              para comprobar el estado de las mismas para asegurarnos que todo
              marcha bien. Recorda siempre prestar atencion a las
              notificaciones.
            </p>
            <button className="btn btn-info">Ver Más</button>
          </div>
        </div>

        {/* Sección de Voluntariado */}
        <div className="row mt-4">
          <div className="col">
            <h2>¡Ayudanos a mejorar!</h2>
            <p>
              Dejanos tu feedback sobre mejoras que podrian ser utiles y nos
              darian una mejor perfomance de la aplicacion.
            </p>
            <button className="btn btn-success">Llenar formulario</button>
          </div>
        </div>

        {/* Otros elementos según sea necesario */}
      </div>
    </>
  );
};
