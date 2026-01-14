import PropTypes from "prop-types";

export const AdopcionDetalleModal = ({
  adopcion,
  isAdmin,
  isAdopter,
  enumEstadoAdopcion,
  onClose,
  onAprobar,
  onRechazar,
  onCancelar,
}) => {
  if (!adopcion) return null;

  return (
    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content p-3">
          <h5 className="mb-2">{adopcion.nombreMascota}</h5>

          <img src={adopcion.imagenMascota} className="img-thumbnail mb-2" />

          <p><b>Especie:</b> {adopcion.especieMascota}</p>
          <p><b>Raza:</b> {adopcion.razaMascota}</p>
          <p><b>Observaciones:</b> {adopcion.observacionMascota}</p>

          <div className="d-flex gap-2 flex-wrap mb-2">
            {isAdmin && adopcion.estado === enumEstadoAdopcion.PENDIENTE && (
              <>
                <button className="btn btn-success" onClick={() => onAprobar(adopcion.idMascota, adopcion.id)}>Aprobar</button>
                <button className="btn btn-danger" onClick={() => onRechazar(adopcion.idMascota, adopcion.id)}>Rechazar</button>
                <button className="btn btn-secondary" onClick={() => onCancelar(adopcion.idMascota, adopcion.id)}>Cancelar</button>
              </>
            )}

            {isAdopter && adopcion.estado === enumEstadoAdopcion.PENDIENTE && (
              <button className="btn btn-secondary" onClick={() => onCancelar(adopcion.idMascota, adopcion.id)}>Cancelar</button>
            )}
          </div>

          <button className="btn btn-outline-secondary w-100" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

AdopcionDetalleModal.propTypes = {
  adopcion: PropTypes.object,
  isAdmin: PropTypes.bool.isRequired,
  isAdopter: PropTypes.bool.isRequired,
  enumEstadoAdopcion: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onAprobar: PropTypes.func.isRequired,
  onRechazar: PropTypes.func.isRequired,
  onCancelar: PropTypes.func.isRequired,
};
