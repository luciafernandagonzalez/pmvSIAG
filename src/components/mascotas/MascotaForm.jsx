import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const MascotaForm = ({ mascota, onGuardar, onCancelar }) => {
  const [form, setForm] = useState({
    nombre: "",
    especie: "",
    edad: "",
    imagen: null,
    historia_clinica: null,
    estado: 0,
  });

  useEffect(() => {
    if (mascota) {
      setForm(mascota);
    } else {
      setForm({
        nombre: "",
        especie: "",
        edad: "",
        imagen: null,
        historia_clinica: null,
        estado: 0,
      });
    }
  }, [mascota]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <form
          className="modal-content p-3"
          onSubmit={(e) => {
            e.preventDefault();
            onGuardar(form);
          }}
        >
          <h5>{mascota ? "Editar Mascota" : "Nueva Mascota"}</h5>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
            </div>

            <div className="col-md-6">
              <label className="form-label">Especie</label>
              <input name="especie" className="form-control" value={form.especie} onChange={handleChange} required />
            </div>

            <div className="col-md-6">
              <label className="form-label">Edad</label>
              <input name="edad" type="number" className="form-control" value={form.edad} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Imagen</label>
              <input name="imagen" type="file" className="form-control" onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Historia Clínica</label>
              <input name="historia_clinica" type="file" className="form-control" onChange={handleChange} />
            </div>
          </div>

          <button className="btn btn-primary w-100 mt-3">
            {mascota ? "Guardar cambios" : "Crear mascota"}
          </button>

          <button type="button" className="btn btn-secondary w-100 mt-2" onClick={onCancelar}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

MascotaForm.propTypes = {
  mascota: PropTypes.object,
  onGuardar: PropTypes.func.isRequired,
  onCancelar: PropTypes.func.isRequired,
};
