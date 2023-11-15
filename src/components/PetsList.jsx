

export const PetsList = () => {
  return (
    <>
    <h2 className="p2 text-center">Listado Mascotas</h2>   
  <div className="row">
    <div className="col-md-6">
      <div className="bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 text-uppercase">Nombre: {''}
          <span className="font-normal normal-case"></span>
        </p>
        <p className="font-bold mb-3 text-gray-700 text-uppercase">Propietario: {''}
          <span className="font-normal normal-case"></span>
        </p>
        <p className="font-bold mb-3 text-gray-700 text-uppercase">Email: {''}
          <span className="font-normal normal-case"></span>
        </p>
        <p className="font-bold mb-3 text-gray-700 text-uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case"></span>
        </p>
        <p className="font-bold mb-3 text-gray-700 text-uppercase">Síntomas: {''}
          <span className="font-normal normal-case"></span>
        </p>
        <div className="d-flex justify-content-between mt-10">
          <button 
            type="button"
            className="btn btn-primary"
            
          >Editar</button>
          <button 
            type="button"
            className="btn btn-danger"
            
          >Eliminar</button>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      {/* Cards with submitted info from local storage can be displayed here */}
    </div>
  </div>


    </>
  )
}
