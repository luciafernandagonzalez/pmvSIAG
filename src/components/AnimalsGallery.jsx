import "../../src/App.css";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "bootstrap";
import { Sidebar } from "../components/SideBarGallery";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc
} from "firebase/firestore";

const AnimalCard = ({
  image,
  name,
  description,
  historiaClinicaMascota,
  id,
}) => {
  // Declara el modal y la referencia a su elemento
  const modalRef = React.useRef(null);
  const navigate = useNavigate();

  // Función para mostrar el modal y redirigir al home
  const adoptAnimal = async () => {
    // Puedes realizar alguna lógica adicional aquí antes de redirigir
    const modal = new Modal(modalRef.current);
    modal.show();

    try {
      const nuevaAdopcion = {
        estado: 0,
        idMascota: id,
      };

      //Agregar la nueva instancia a la coleccion adopciones
      const docRef = await addDoc(collection(db, "adopciones"), nuevaAdopcion);
      console.log("nueva adopcion registrada con id: ", docRef.id);

      try {
        // console.log("id de prueba: ", id);
        //cambiar estado de mascota adoptada
        await updateDoc(doc(db, "mascotas", id), {
          estado: 2,
        });
        console.log("Estado de mascota actualizado correctamente");
      } catch (error) {
        console.log("Error al actualizar el estado de la mascota:", error);
        //si ocurre un error al actualizar el estado de la mascota, eliminar la adopcion
        await deleteDoc(docRef);
        console.log(
          "La adopcion se elimino debido a un error en la actualizacion del estado de la mascota"
        );
      }

      setTimeout(() => {
        navigate("/tabla");
      }, 3000);
    } catch (error) {
      console.error("Error al adoptar el animal", error);
    }

    // Redirige al home después de cierto tiempo (por ejemplo, 3 segundos)
  };

  const downloadHistoriaClinica = () => {
    const historiaClinicaData = historiaClinicaMascota.split(",")[1]; // Obtén la parte de datos base64
    const blob = b64toBlob(historiaClinicaData);
    const url = window.URL.createObjectURL(blob);

    // Crea un enlace temporal y haz clic en él para iniciar la descarga
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "historia_clinica.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Función para convertir cadena base64 en Blob
  const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  return (
    <div
      className="card mb-3"
      style={{ boxShadow: "0 7px 11px rgba(0, 0, 0, 0.1)" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex">
          {historiaClinicaMascota && (
            <button
              className="btn btn-primary me-2"
              onClick={downloadHistoriaClinica}
            >
              Historia Clínica
            </button>
          )}
          <button className="btn btn-success" onClick={adoptAnimal}>
            Adóptalo
          </button>
        </div>

        {/* Modal */}
        <div className="modal" tabIndex="-1" ref={modalRef}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Solicitud en Proceso de Revisión
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Su solicitud está en proceso de revisión. Le informaremos una
                vez se haya completado.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AnimalsGallery = () => {
  const [animals, setAnimals] = useState([]);

  const navigate = useNavigate();
  const modalRef = React.useRef(null);

  const obtenerMascotas = async () => {
    try {
      const mascotasSnapshot = await getDocs(collection(db, "mascotas"));
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
      const mascotasNoAdoptadas = mascotasData.filter(
        (mascota) => mascota.estado === 0
      );
      setAnimals(mascotasNoAdoptadas);
    } catch (error) {
      console.error("Error al obtener mascotas", error);
    }
  };

  useEffect(() => {
    obtenerMascotas();
  }, []);

  console.log(animals);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Animales en adopción</h2>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {animals.map((animal) => (
              <div key={animal.id} className="col">
                <AnimalCard
                  image={animal.imagen}
                  name={animal.nombre}
                  description={animal.observacion}
                  historiaClinicaMascota={animal.historiaClinica}
                  id={animal.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
