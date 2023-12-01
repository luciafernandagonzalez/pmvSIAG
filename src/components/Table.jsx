import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Modal, Button } from "react-bootstrap"; // Importa el componente Modal de react-bootstrap

export const Table = () => {
  const [adopciones, setAdopciones] = useState([]);
  const [selectedMascota, setSelectedMascota] = useState(null);
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    //funcion para obtener las solicitudes de adopcion
    const obtenerAdopciones = async () => {
      try {
        const adopcionesSnapshot = await getDocs(collection(db, "adopciones"));

        const adopcionesData = [];
        for (const docu of adopcionesSnapshot.docs) {
          const adopcion = docu.data();

          //obtener datos de mascotas utilizando el id almacenado en el array
          const mascotaSnapshot = await getDoc(
            doc(db, "mascotas", adopcion.idMascota.toString())
          );
          const mascotaData = mascotaSnapshot.data();

          //agregar datos de mascota a la solicitud
          if (mascotaData) {
            const adopcionconMascota = {
              id: docu.id,
              estadoAdopcion: adopcion.estado,
              ...adopcion,
              idMascota: adopcion.idMascota,
              nombreMascota: mascotaData.nombre,
              especieMascota: mascotaData.especie,
              imagenMascota: mascotaData.imagen,
              razaMascota: mascotaData.raza,
              observacionMascota: mascotaData.observacion,
            };
            adopcionesData.push(adopcionconMascota);
          }
        }

        setAdopciones(adopcionesData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las adopciones", error);
      }
    };

    obtenerAdopciones();
  }, []);

  const eliminarAdopcion = async (idMasc, idAdopcion) => {
    //Eliminar una adopcion en pantalla usuario: elimino instancia adopcion y cambio estado de mascota a 0
    // console.log("prieba id:", idMasc, idAdopcion);
    try {
      let mascotaActualizada = false;
      let adopcionEliminada = false;

      //Cambiar estado de la mascota a 0
      try {
        await updateDoc(doc(db, "mascotas", idMasc), {
          estado: 0,
        });
        mascotaActualizada = true;
        console.log("Estado de mascota actualizado correctamente");
      } catch (error) {
        console.log("Error al actualizar estado de mascota:", error);
      }

      //Eliminar la instancia de adopcion
      try {
        await deleteDoc(doc(db, "adopciones", idAdopcion));
        adopcionEliminada = true;
        const nuevasAdopciones = adopciones.filter(
          (adopcion) => adopcion.id !== idAdopcion
        );
        setAdopciones(nuevasAdopciones); //actualizar el estado local
        console.log("Adopcion eliminada correctamente");
      } catch (error) {
        console.error("Error al eliminar la adopcion", error);
      }

      //Verificar si ambas acciones se ejecutaron correctamente
      if (!mascotaActualizada || !adopcionEliminada) {
        //si alguna no se completo revertirla
        console.log("Error: no se pudieron completar ambas acciones");
        if (!mascotaActualizada) {
          try {
            await updateDoc(doc(db, "mascotas", idMasc), {
              estado: 1, //volver al estado anterior
            });
            console.log("Estado de mascota restaurado correctamente");
          } catch (error) {
            console.error("Error al restaurar estado de mascota:", error);
          }
        }

        //Volver a agregar la adopcion eliminada (revertir el cambio en el estado local)
        if (!adopcionEliminada) {
          setAdopciones([...adopciones]);
        }
      }
    } catch (error) {
      console.error("Error general:", error);
    }
  };
  // };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMascota?.nombreMascota}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <img
              src={selectedMascota?.imagenMascota}
              className="card-img-top img-thumbnail"
              alt="Mascota"
            />
            <div className="card-body">
              <h5 className="card-title">
                Especie: {selectedMascota?.especieMascota}
              </h5>
              <h5 className="card-text">
                Raza: {selectedMascota?.razaMascota}
              </h5>
              <h5 className="card-text">
                Observaciones: {selectedMascota?.observacionMascota}
              </h5>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container my-4">
        <h2> Estado de solicitudes</h2>
        <h4>Adoptante: </h4>
        <p>Facundo Gramajo</p>

        {loading ? (
          <p style={{ color: '#ff0000', fontWeight: 'bold' }}>Cargando adopciones...</p>
        ) : (
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre Mascota</th>
                <th scope="col">Especie Mascota</th>
                <th scope="col">Raza Mascota</th>
                <th scope="col">Estado</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              {adopciones.map((adopcion, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{adopcion.nombreMascota}</td>
                  <td>{adopcion.especieMascota}</td>
                  <td>{adopcion.razaMascota}</td>
                  <td>
                    {/* <span className="badge bg-success">Aprobado</span> */}
                    <span
                      className={`badge ${
                        adopcion.estado === 1
                          ? "bg-success"
                          : adopcion.estado === 0
                          ? "bg-danger"
                          : "bg-warning"
                      }`}
                    >
                      {adopcion.estado === 1
                        ? "Adopción aprobada"
                        : "Solicitud en curso"}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-info btn-sm m-2"
                      // onClick={() => setSelectedMascota(adopcion)}
                      onClick={() => {
                        setSelectedMascota(adopcion);
                        handleShow();
                      }}
                    >
                      Ver
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        eliminarAdopcion(adopcion.idMascota, adopcion.id)
                      }
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
