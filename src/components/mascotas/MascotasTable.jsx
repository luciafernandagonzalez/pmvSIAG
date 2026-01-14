import PropTypes from "prop-types";

export const MascotasTable = ({ mascotas, onEditar, onEliminar }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Edad</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mascotas.map((m) => (
              <tr key={m.id_mascota}>
                <td>{m.nombre}</td>
                <td>{m.especie}</td>
                <td>{m.edad}</td>
                <td>{m.estado === 0 ? "Disponible" : "No disponible"}</td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEditar(m)}>
                    Editar
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => onEliminar(m.id_mascota)}>
                    Eliminar
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

MascotasTable.propTypes = {
  mascotas: PropTypes.array.isRequired,
  onEditar: PropTypes.func.isRequired,
  onEliminar: PropTypes.func.isRequired,
};
