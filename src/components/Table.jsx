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
      <td>Negrito</td>
      <td>Perro</td>
      <td>Labrador</td>
      <td><span className="badge bg-success">Aprobado</span></td>
      <td><button className="btn btn-info btn-sm m-2">Ver</button><button className="btn btn-danger btn-sm">Eliminar</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Luna</td>
      <td>Gato</td>
      <td>Desconocido</td>
      <td><span className="badge bg-danger">Rechazado</span></td>
      <td><button className="btn btn-info btn-sm m-2">Ver</button><button className="btn btn-danger btn-sm">Eliminar</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Lupita</td>
      <td>Perro</td>
      <td>Desconocido</td>
      <td><span className="badge bg-warning">Pendiente</span></td>
      <td><button className="btn btn-info btn-sm m-2">Ver</button><button className="btn btn-danger btn-sm">Eliminar</button></td>
    </tr>
  </tbody>
</table>
</div>
    </>
  )
}
