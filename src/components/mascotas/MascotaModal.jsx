import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { supabase } from "../../db/supabase";
import { enumEstadoAdopcion } from "../../models/enums/enumEstadoAdopcion";
import { enumEstadoMascota } from "../../models/enums/enumEstadoMascota";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

export const MascotaModal = ({ mascota, show, onClose }) => {
//   const [showMsg, setShowMsg] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  if (!mascota) return null;

  const adoptAnimal = async () => {
    try {
      await supabase.from("adopcion").insert({
        estado: enumEstadoAdopcion.PENDIENTE,
        mascota_id: mascota.id_mascota,
        usuario_id: user.id_usuario,
      });

      await supabase
        .from("mascota")
        .update({ estado: enumEstadoMascota.PENDIENTE })
        .eq("id_mascota", mascota.id_mascota);

    //   setShowMsg(true);
      setTimeout(() => navigate("/application"), 3000);
    } catch (e) {
      console.error("Error al adoptar", e);
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{mascota.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={mascota.imagen}
          alt={mascota.nombre}
          className="img-fluid rounded mb-3"
        />
        <p>{mascota.observacion}</p>

        <button className="btn btn-outline-secondary" onClick={adoptAnimal}>
          Adoptar
        </button>
      </Modal.Body>
    </Modal>
  );
};

MascotaModal.propTypes = {
  mascota: PropTypes.object,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
