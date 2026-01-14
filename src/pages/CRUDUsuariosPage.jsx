import { useEffect, useState } from "react";
import {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../servicios/usuarioService";
import { UsuarioTable } from "../components/usuarios/UsuarioTable";
import { UsuarioForm } from "../components/usuarios/UsuarioForm";

export const CRUDUsuariosPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const cargarUsuarios = async () => {
    try {
      const data = await obtenerUsuarios();
      setUsuarios(data);
    } catch (e) {
      console.error("Error cargando usuarios", e);
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Gestión de Usuarios</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            setUsuarioEditando(null);
            setMostrarModal(true);
          }}
        >
          + Nuevo Usuario
        </button>
      </div>

      <UsuarioTable
        usuarios={usuarios}
        busqueda={busqueda}
        onBuscar={setBusqueda}
        onEdit={(u) => {
          setUsuarioEditando(u);
          setMostrarModal(true);
        }}
        onDelete={async (id) => {
          if (confirm("¿Eliminar usuario?")) {
            try {
              await eliminarUsuario(id);
              cargarUsuarios();
            } catch (e) {
              alert("Error eliminando usuario");
            }
          }
        }}
      />

      {mostrarModal && (
        <UsuarioForm
          usuario={usuarioEditando}
          onCancel={() => {
            setUsuarioEditando(null);
            setMostrarModal(false);
          }}
          onSave={async (usuario) => {
            if (usuarioEditando) {
              await actualizarUsuario(usuarioEditando.id_usuario, usuario);
            } else {
              await crearUsuario(usuario);
            }
            await cargarUsuarios();
            setMostrarModal(false);
            setUsuarioEditando(null);
          }}
        />
      )}
    </div>
  );
};
