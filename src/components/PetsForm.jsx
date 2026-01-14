// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// export const PetsForm = ({
//   mascotaToEdit,
//   onSavePet, //onGuardarMascotaEditada,
//   onCancel,
// }) => {
//   const [error, setError] = useState(false);

//   const [formData, setFormData] = useState({
//     nombre: "",
//     especie: "",
//     raza: "",
//     edad: "",
//     imagen: null,
//     historia_clinica: null,
//     observacion: "",
//     estado: 0,
//   });

//   useEffect(() => {
//     if (mascotaToEdit) {
//       setFormData({
//         nombre: mascotaToEdit.nombre || "",
//         especie: mascotaToEdit.especie || "",
//         raza: mascotaToEdit.raza || "",
//         edad: mascotaToEdit.edad || "",
//         imagen: mascotaToEdit.imagen || null, // URL
//         historia_clinica: mascotaToEdit.historia_clinica || null,
//         observacion: mascotaToEdit.observacion || "",
//         estado: mascotaToEdit.estado || 0,
//       });
//     }
//   }, [mascotaToEdit]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.nombre ||
//       !formData.especie ||
//       !formData.raza ||
//       !formData.edad
//     ) {
//       setError(true);
//       return;
//     }

//     setError(false);
//     onSavePet(formData);

//     if (!mascotaToEdit) {
//       setFormData({
//         nombre: "",
//         especie: "",
//         raza: "",
//         edad: "",
//         imagen: null,
//         historia_clinica: null,
//         observacion: "",
//         estado: 0,
//       });
//     }
//   };

//   return (
//      <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded">
//       <h4>{mascotaToEdit ? "Editar Mascota" : "Nueva Mascota"}</h4>

//       <div className="row g-3 mb-3">
//         <div className="col-md-6">
//           <label className="form-label fw-semibold">Nombre</label>
//           <input
//             className="form-control"
//             value={formData.nombre}
//             onChange={(e) =>
//               setFormData({ ...formData, nombre: e.target.value })
//             }
//           />
//         </div>

//         <div className="col-md-6">
//           <label className="form-label fw-semibold">Especie</label>
//           <input
//             className="form-control"
//             value={formData.especie}
//             onChange={(e) =>
//               setFormData({ ...formData, especie: e.target.value })
//             }
//           />
//         </div>

//         <div className="col-md-6">
//           <label className="form-label fw-semibold">Raza</label>
//           <input
//             className="form-control"
//             value={formData.raza}
//             onChange={(e) => setFormData({ ...formData, raza: e.target.value })}
//           />
//         </div>

//         <div className="col-md-6">
//           <label className="form-label fw-semibold">Edad</label>
//           <input
//             type="number"
//             className="form-control"
//             value={formData.edad}
//             onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
//           />
//         </div>
//       </div>

//       <div className="border rounded-3 p-3 mb-3 bg-light">
//         <label className="form-label fw-semibold">Foto de la mascota</label>

//         <div className="d-flex align-items-center gap-2">
//           <label className="btn btn-outline-primary mb-0">
//             Seleccionar archivo
//             <input
//               type="file"
//               hidden
//               accept="image/*"
//               onChange={(e) =>
//                 setFormData({ ...formData, imagen: e.target.files[0] })
//               }
//             />
//           </label>

//           <span className="text-muted small">
//             {formData.imagen instanceof File
//               ? formData.imagen.name
//               : formData.imagen
//               ? "Imagen cargada"
//             : "Ningún archivo seleccionado"}
//           </span>
//         </div>
//       </div>

//       <div className="border rounded-3 p-3 mb-3 bg-light">
//         <label className="form-label fw-semibold">Historia clínica</label>

//         <div className="d-flex align-items-center gap-2">
//           <label className="btn btn-outline-secondary mb-0">
//             Seleccionar archivo
//             <input
//               type="file"
//               hidden
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   historia_clinica: e.target.files[0],
//                 })
//               }
//             />
//           </label>

//           <span className="text-muted small">
//             {formData.historia_clinica instanceof File
//               ? formData.historia_clinica.name
//               : formData.historia_clinica
//               ? "Archivo cargado"
//               : "Ningún archivo seleccionado"}
//           </span>
//         </div>
//       </div>

//       <div className="mb-3">
//         <label className="form-label fw-semibold">Observaciones</label>
//         <textarea
//           className="form-control"
//           rows={3}
//           value={formData.observacion}
//           onChange={(e) =>
//             setFormData({ ...formData, observacion: e.target.value })
//           }
//         />
//       </div>

//       <button className="btn btn-primary w-100">
//         {mascotaToEdit ? "Guardar cambios" : "Agregar Mascota"}
//       </button>

//       {mascotaToEdit && (
//         <button
//           type="button"
//           className="btn btn-secondary w-100 mt-2"
//           onClick={onCancel}
//         >
//           Cancelar edición
//         </button>
//       )}

//       {error && (
//         <p className="text-danger mt-2">Completá los campos obligatorios</p>
//       )}
//       </form>
//   );
// };

// PetsForm.propTypes = {
//   mascotaToEdit: PropTypes.object,
//   onSavePet: PropTypes.func.isRequired,
//   onCancel: PropTypes.func.isRequired,
// };
