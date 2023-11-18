import React from 'react'

export const Table = () => {
  return (
    <>
    <div className="container my-4">
    <h2 > Estado de solicitudes</h2>
    <h4>Adoptante: </h4><p>Facundo Gramajo</p>
    <table className="table ">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre Mascota</th>
      <th scope="col">Especie Mascota</th>
      <th scope="col">Raza Mascota</th>
      <th scope="col">Estado</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
    </>
  )
}
