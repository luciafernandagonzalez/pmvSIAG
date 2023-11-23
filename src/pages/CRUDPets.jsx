import { useState, useEffect } from 'react'
import { PetsForm } from "../components/PetsForm";
import { PetsList } from "../components/PetsList";

export const CRUDPets = () => {

  const [mascotas, setMascotas] = useState([]);
  const [mascota, setMascota] = useState({});
  
    useEffect(() => {
    const obtenerLS = () => {
      const mascotasLS = JSON.parse(localStorage.getItem('mascotas')) ?? [];
      setMascotas(mascotasLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('mascotas', JSON.stringify( mascotas ));
  }, [mascotas])

  const eliminarMascota = id => {
    const mascotasActualizados = mascotas.filter( mascota => mascota.id !== id);
    setMascotas(mascotasActualizados)
  }
  

  return (
    <>
      <h1 className="text-center">Gestion Mascotas</h1>
      <div className="row p-4">
        <div className="col-md-6">
          <PetsForm 
          mascotas={mascotas}
          setMascotas={setMascotas}
          mascota={mascota}
          setMascota={setMascota}/>
        </div>
        <div className="col-md-6">
          <PetsList
          mascotas={mascotas}
          setMascota={setMascota}
          eliminarMascota={eliminarMascota}
           />
        </div>
      </div>
    </>
  );
};
