import { useState, useEffect } from "react";

export const PetsForm = () => {
  return (
    <>
    <div className="row">
      <div className="container col-md-6">
        <h2 className="p2">Datos Mascota</h2>

        <p>
          Añade Mascotas y {""}
          <span>Administralos</span>
        </p>

        <form
        /*onSubmit={handleSubmit}*/
        >
          <div className="mb-5">
            <label htmlFor="mascota" className="d-block text-uppercase font-weight-bold text-gray-700">Nombre Mascota</label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la Mascota"

              /*value={nombre}*/
              /*onChange={ (e) => setNombre(e.target.value) }*/
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="d-block text-uppercase font-weight-bold text-gray-700">Raza</label>
            <input
              id="propietario"
              type="text"
              placeholder="Raza"

              /*value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }*/
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="d-block text-uppercase font-weight-bold text-gray-700">Edad</label>
            <input
              id="edad"
              type="number"
              placeholder="Edad mascota"

              /*value={email}*/
              /*onChange={ (e) => setEmail(e.target.value) }*/
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="d-block text-uppercase font-weight-bold text-gray-700">Fecha Encontrada</label>
            <input
              id="alta"
              type="date"

              //value={fecha}
              //onChange={ (e) => setFecha(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="d-block text-uppercase font-weight-bold text-gray-700">Observaciones</label>
            <textarea
              id="observaciones"
              placeholder="Describe los Síntomas"
              //value={sintomas}
              //onChange={ (e) => setSintomas(e.target.value) }
            />
          </div>

          <input
            type="submit"

            //value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
          />
        </form>
      </div>
      </div>
    </>
  );
};
