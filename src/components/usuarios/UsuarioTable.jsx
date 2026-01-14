import PropTypes from 'prop-types';

export const UsuarioTable = ({ usuarios, busqueda, onBuscar, onEdit, onDelete }) => {
  const filtrados = usuarios.filter((u) =>
    `${u.nombre} ${u.apellido} ${u.email}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <input className="form-control mb-3" placeholder="Buscar..." value={busqueda} onChange={(e) => onBuscar(e.target.value)} />

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Tipo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((u) => (
              <tr key={u.id_usuario}>
                <td>{u.nombre} {u.apellido}</td>
                <td>{u.email}</td>
                <td>{u.tipo_usuario.descripcion}</td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(u)}>Editar</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(u.id_usuario)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

UsuarioTable.propTypes = {
    usuarios: PropTypes.array.isRequired,
    busqueda: PropTypes.string.isRequired,
    onBuscar: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};