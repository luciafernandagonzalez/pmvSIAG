import "../../src/App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { obtenerMascotas } from "../servicios/mascotaService";
import { MascotasGaleria } from "../components/mascotas/MascotasGaleria";
import { useParams, useNavigate } from "react-router-dom";
import { MascotaModal } from "../components/mascotas/MascotaModal";

export const MascotasGaleriaPage = () => {
  const [mascotas, setMascotas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  useEffect(() => {
    obtenerMascotas()
      .then(setMascotas)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (id && mascotas.length) {
      const m = mascotas.find(m => String(m.id_mascota) === id);
      setMascotaSeleccionada(m || null);
    } else {
      setMascotaSeleccionada(null);
    }
  }, [id, mascotas]);

  const filtradas = mascotas.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Mascotas en adopción</h2>
      </div>

      <input
        className="form-control mb-4"
        placeholder="Buscar mascota..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <MascotasGaleria mascotas={filtradas} />

      {/* Modal */}
      <MascotaModal
        mascota={mascotaSeleccionada}
        show={!!mascotaSeleccionada}
        onClose={() => navigate("/gallery")}
      />
    </div>
  );
};
