import { useState, useEffect } from "react";

export const PetsForm = ({mascotas, setMascotas, mascota, setMascota}) => {

  const [nombreMascota, setNombreMascota] = useState('');
  const [especieMascota, setEspecieMascota] = useState('');
  const [razaMascota, setRazaMascota] = useState('');
  const [edadMascota, setEdadMascota] = useState('');
  const [fechaMascota, setFechaMascota] = useState('');
  const [imagenMascota, setImagenMascota] = useState(null);
  const [historiaClinicaMascota, setHistoriaClinicaMascota] = useState(null);
  const [observacionesMascota, setObservacionesMascota] = useState('');
  const [error, setError] = useState(false)

   useEffect(() => {
        if( Object.keys(mascota).length > 0  ) {
            setNombreMascota(mascota.nombre)
            setEspecieMascota(mascota.especie)
            setRazaMascota(mascota.raza)
            setEdadMascota(mascota.edad)
            setFechaMascota(mascota.fecha)
            setImagenMascota(mascota.imagen)
            setHistoriaClinicaMascota(mascota.historial)
            setObservacionesMascota(mascota.observaciones)
        }
    }, [mascota])

     const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
  
      if (selectedImage) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageBase64 = reader.result;
          setImagenMascota(imageBase64);
        };
  
        reader.readAsDataURL(selectedImage);
      }
    };

    const handleHistoriaClinicaChange = (e) => {
      const selectedFile = e.target.files[0];
  
      if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const historiaClinicaBase64 = reader.result;
          setHistoriaClinicaMascota(historiaClinicaBase64);
        };
  
        reader.readAsDataURL(selectedFile);
      }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if( [ nombreMascota, especieMascota, razaMascota, edadMascota, fechaMascota, observacionesMascota ].includes('') ) {
            console.log('Hay Al Menos un campo vacio')

            setError(true)
            return;
        } 
        
        setError(false)


        // Objeto de Paciente
        const objetoMascota = {
            nombreMascota, 
            especieMascota, 
            razaMascota, 
            edadMascota, 
            fechaMascota,
            imagenMascota,
            historiaClinicaMascota,
            observacionesMascota
        }

        if(mascota.id) {
            // Editando el Registro
            objetoMascota.id = mascota.id
            const mascotasActualizados = mascotas.map( mascotaState => mascotaState.id === mascota.id ? objetoMascota : mascotaState )
            


            setMascotas(mascotasActualizados)
            setMascota({})

        } else {
            // Nuevo registro
            objetoMascota.id = generarId();
            setMascotas([...mascotas, objetoMascota]);
            Swal.fire('Mascota agregada', 'La mascota se ha agregado exitosamente', 'success');
        }

        // Reiniciar el form
        setNombreMascota('')
        setEspecieMascota('')
        setRazaMascota('')
        setEdadMascota('')
        setFechaMascota('')
        setImagenMascota('')
        setHistoriaClinicaMascota('')
        setObservacionesMascota('')

        
      }



  return (
    <>
    <div className="row">
      <div className="container col-md-6">
        <h2 className="p2">Datos Mascota</h2>

        <p>
          Añade Mascotas y {""}
          <span>Administralas</span>
        </p>

        <form
        onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4 mb-5"
        >
          <div className="mb-5">
            <label htmlFor="mascota" className="d-block font-weight-bold text-gray-700">Nombre de la Mascota</label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la Mascota"
              className="border border-2 w-100 p-2 mt-2 rounded-md"
              value={nombreMascota}
              onChange={ (e) => setNombreMascota(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="mascota" className="d-block font-weight-bold text-gray-700">Especie de la Mascota</label>
            <input
              id="mascota"
              type="text"
              placeholder="Especie de la Mascota"
              className="border border-2 w-100 p-2 mt-2 rounded-md"
              value={especieMascota}
              onChange={ (e) => setEspecieMascota(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="raza" className="d-block font-weight-bold text-gray-700">Raza</label>
            <input
              id="raza"
              type="text"
              placeholder="Raza"
              className="border border-2 w-100 p-2 mt-2 rounded-md"
              value={razaMascota}
              onChange={ (e) => setRazaMascota(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="edad" className="d-block font-weight-bold text-gray-700">Edad</label>
            <input
              id="edad"
              type="number"
              placeholder="Edad mascota"
              className="border border-2 w-100 p-2 mt-2 rounded-md"
              value={edadMascota}
              onChange={ (e) => setEdadMascota(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="d-block font-weight-bold text-gray-700">Fecha Encontrada</label>
            <input
              id="alta"
              type="date"
              className="border border-2 w-100 p-2 mt-2 rounded-md"
               value={fechaMascota}
              onChange={ (e) => setFechaMascota(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="imagen" className="d-block font-weight-bold text-gray-700">Adjuntar Imagen</label>
            <input type="file"
            className="border border-2 w-100 p-2 mt-2 rounded-md"
            onChange={handleImageChange}/>           
          </div>

          <div className="mb-5">
            <label htmlFor="clinica" className="d-block font-weight-bold text-gray-700">Adjuntar Historia Clinica</label>
            <input type="file"
            className="border border-2 w-100 p-2 mt-2 rounded-md"
            onChange={handleHistoriaClinicaChange}/>           
          </div>

          <div className="mb-5">
            <label htmlFor="observaciones" className="d-block font-weight-bold text-gray-700">Observaciones</label>
            <textarea
              id="observaciones"
              placeholder="Añade alguna observacion"
              className="border border-2 w-100 p-2 mt-2 rounded-md"
              value={observacionesMascota}
              onChange={ (e) => setObservacionesMascota(e.target.value) }
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block text-uppercase"
            value={ mascota.id ? 'Editar Mascota' : 'Agregar Mascota' }
          />
        </form>
      </div>
   
      </div>
    </>
  );
};
