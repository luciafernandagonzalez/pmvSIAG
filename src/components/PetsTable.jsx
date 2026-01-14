// import PropTypes from "prop-types";
// import { useState } from "react";

// export const PetsTable = ({ mascotas, editarMascota, eliminarMascota }) => {
//   const [filtro, setFiltro] = useState("");

//   const filtradas = mascotas.filter((m) =>
//     m.nombre.toLowerCase().includes(filtro.toLowerCase())
//   );

//   return (
//     <div className="card shadow-sm">
//       <div className="card-body">
//         <input
//           className="form-control mb-3"
//           placeholder="Buscar mascota..."
//           value={filtro}
//           onChange={(e) => setFiltro(e.target.value)}
//         />

//         <div style={{ maxHeight: "400px", overflowY: "auto" }}>
//           <table className="table table-hover align-middle">
//             <thead className="table-light sticky-top">
//               <tr>
//                 <th>Nombre</th>
//                 <th>Especie</th>
//                 <th>Raza</th>
//                 <th>Edad</th>
//                 <th className="text-end">Acciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtradas.map((m) => (
//                 <tr key={m.id_mascota}>
//                   <td>{m.nombre}</td>
//                   <td>{m.especie}</td>
//                   <td>{m.raza}</td>
//                   <td>{m.edad}</td>
//                   <td className="text-end">
//                     <button
//                       className="btn btn-sm btn-outline-primary me-2"
//                       onClick={() => editarMascota(m)}
//                     >
//                       Editar
//                     </button>
//                     <button
//                       className="btn btn-sm btn-outline-danger"
//                       onClick={() => eliminarMascota(m.id_mascota)}
//                     >
//                       Eliminar
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {!filtradas.length && (
//                 <tr>
//                   <td colSpan="5" className="text-center text-muted py-4">
//                     No hay mascotas para mostrar
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// PetsTable.propTypes = {
//     mascotas: PropTypes.array.isRequired,
//     editarMascota: PropTypes.func.isRequired,
//     eliminarMascota: PropTypes.func.isRequired,
// };