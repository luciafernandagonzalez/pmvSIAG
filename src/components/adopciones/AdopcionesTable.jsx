import PropTypes from "prop-types";

export const AdopcionesTable = ({
  adopciones,
  loading,
  enumEstadoAdopcion = {},
  onVer,
}) => {
  if (loading)
    return <p className="text-danger fw-bold">Cargando adopciones...</p>;

  const estadoLabel = (estado) => {
    if (estado === enumEstadoAdopcion.APROBADA) return "Aprobada";
    if (estado === enumEstadoAdopcion.RECHAZADA) return "Rechazada";
    if (estado === enumEstadoAdopcion.CANCELADA) return "Cancelada";
    return "En curso";
  };

  const estadoClass = (estado) => {
    if (estado === enumEstadoAdopcion.APROBADA) return "bg-success";
    if (estado === enumEstadoAdopcion.RECHAZADA) return "bg-danger";
    if (estado === enumEstadoAdopcion.CANCELADA) return "bg-secondary";
    return "bg-warning";
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Mascota</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adopciones.map((a) => (
              <tr key={a.id_adopcion}>
                <td>{a.nombreMascota}</td>
                <td>{a.especieMascota}</td>
                <td>{a.razaMascota}</td>
                <td>
                  <span className={`badge ${estadoClass(a.estado)}`}>
                    {estadoLabel(a.estado)}
                  </span>
                </td>
                <td className="text-end">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => onVer(a)}
                  >
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

AdopcionesTable.propTypes = {
  adopciones: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  enumEstadoAdopcion: PropTypes.object.isRequired,
  onVer: PropTypes.func.isRequired,
};
