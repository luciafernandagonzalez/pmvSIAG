export const PetsDetail = ({
  mascota,
  setMascota,
  setMascotas,
  eliminarMascota,
  editarMascota,
}) => {
  const {
    nombreMascota,
    especieMascota,
    razaMascota,
    fechaMascota,
    imagenMascota,
    historiaClinicaMascota,
    observacionesMascota,
  } = mascota;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar esta mascota?");

    console.log("prueba", mascota);
    if (respuesta) {
      eliminarMascota(mascota.idMascota, setMascotas);
      // setMascota(mascota);
    }
  };

  const handleEditar = () => {
    setMascota(mascota);
    editarMascota(mascota);
  };
  return (
    <>
      <div className="row ">
        <div className="col-md-6">
          <div className="bg-white shadow-md p-4 rounded-xl mb-4">
            <h4 className="font-bold text-gray-700 mb-3" style={{ maxWidth: '250px', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
              Detalles de la Mascota
            </h4>
            <div className="mb-3">
              <p className="font-semibold text-gray-700">
                Nombre: {mascota.nombre}
              </p>
            </div>
            <div className="mb-3">
              <p className="font-semibold text-gray-700">
                Especie: {mascota.especie}
              </p>
            </div>
            <div className="mb-3">
              <p className="font-semibold text-gray-700">
                Raza: {mascota.raza}
              </p>
            </div>
            <div className="mb-3">
              <p className="font-semibold text-gray-700">
                Observaciones: {mascota.observacion}
              </p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                // className="btn btn-primary"
                className="btn btn-primary me-2"
                onClick={handleEditar}
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleEliminar}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Cards with submitted info from local storage can be displayed here */}
        </div>
      </div>
    </>
  );
};
