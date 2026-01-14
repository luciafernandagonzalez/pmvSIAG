import PropTypes from "prop-types";

import { useEffect, useState } from "react";

export const UsuarioForm = ({ usuario, onSave, onCancel }) => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    nombre_usuario: "",
    contrasena_usuario: "",
    tipo_usuario_id: 2,
  });

  useEffect(() => {
    if (usuario) {
      setForm(usuario);
    } else {
      setForm({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        nombre_usuario: "",
        contrasena_usuario: "",
        tipo_usuario_id: 2,
      });
    }
  }, [usuario]);

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <form
          className="modal-content p-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSave(form);
          }}
        >
          <h5>{usuario ? "Editar Usuario" : "Nuevo Usuario"}</h5>

          {/* inputs iguales a los que ya tenías */}

          <button className="btn btn-primary w-100 mt-3">
            {usuario ? "Guardar cambios" : "Crear usuario"}
          </button>

          <button
            type="button"
            className="btn btn-secondary w-100 mt-2"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

UsuarioForm.propTypes = {
  usuario: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
