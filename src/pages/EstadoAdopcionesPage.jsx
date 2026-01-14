import { useEffect, useState } from "react";
import { AdopcionesTable } from "../components/adopciones/AdopcionesTable";
import { AdopcionDetalleModal } from "../components/adopciones/AdopcionDetalleModal";
import {
  obtenerAdopciones,
  aprobarAdopcion,
  rechazarAdopcion,
  cancelarAdopcion,
} from "../servicios/adopcionService";
import { useUser } from "../context/userContext";
import { enumEstadoAdopcion } from "../models/enums/enumEstadoAdopcion";

export const EstadoAdopcionesPage = () => {
  const { user } = useUser();
  const isAdmin = user.tipoId === 1;
  const isAdopter = user.tipoId === 2;

  const [adopciones, setAdopciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMascota, setSelectedMascota] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cargar = async () => {
    setLoading(true);
    const data = await obtenerAdopciones(user.id_usuario, isAdmin);
    setAdopciones(data);
    setLoading(false);
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Estado de solicitudes</h2>
      </div>

      <AdopcionesTable
        adopciones={adopciones}
        loading={loading}
        enumEstadoAdopcion={enumEstadoAdopcion}
        onVer={(a) => {
          setSelectedMascota(a);
          setShowModal(true);
        }}
      />

      {showModal && selectedMascota && (
        <AdopcionDetalleModal
          adopcion={selectedMascota}
          isAdmin={isAdmin}
          isAdopter={isAdopter}
          enumEstadoAdopcion={enumEstadoAdopcion}
          onClose={() => setShowModal(false)}
          onAprobar={async (idMascota, idAdopcion) => {
            await aprobarAdopcion(idMascota, idAdopcion);
            setShowModal(false);
            cargar();
          }}
          onRechazar={async (idMascota, idAdopcion) => {
            await rechazarAdopcion(idMascota, idAdopcion);
            setShowModal(false);
            cargar();
          }}
          onCancelar={async (idMascota, idAdopcion) => {
            await cancelarAdopcion(idMascota, idAdopcion);
            setShowModal(false);
            cargar();
          }}
        />
      )}
    </div>
  );
};