import { PetsDetail } from "../components/PetsDetail";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'; // Importa la instancia de Firestore


export const PetsList = ({ setMascota, eliminarMascota, editarMascota, actualizarListaMascotas}) => {
  const [mascotas, setMascotas] = useState([]);


     useEffect(() => {
         const obtenerMascotas = async () => {
             try {
                const querySnapshot = await getDocs(collection(db, "mascotas"));
                const mascotasData = querySnapshot.docs.map(doc => ({
                  id: doc.id,
                  nombre: doc.nombre,
                  especie: doc.especie,
                  raza: doc.raza,
                  observacion: doc.observacion,
                  imagen: doc.imagen,
                  estado: doc.estado,
                  ...doc.data()
                }));
                const mascotasNoAdoptadas = mascotasData.filter(
                  (mascota) => mascota.estado === 0
                );
                setMascotas(mascotasNoAdoptadas);
              
             } catch (error) {
               console.error('Error al obtener mascotas', error);
             }
           };
      
           obtenerMascotas();
         }, [actualizarListaMascotas]);
      // El segundo argumento vacío indica que se ejecutará solo una vez, al montar el componente


  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-3xl text-center">Listado Mascotas</h2>
        <p className="text-xl mt-5 mb-10 p-3 text-center">
          Administra tus Mascotas{""}
        </p>

        {mascotas && mascotas.length ? (
          <>
            {mascotas.map((mascota) => (
              <PetsDetail
                key={mascota.id}
                mascota={mascota}
                setMascota={setMascota}
                setMascotas={setMascotas}
                eliminarMascota={eliminarMascota}
                editarMascota={editarMascota}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay mascotas</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando mascotas {""}
              <span className="text-indigo-600 font-bold ">
                y aparecerán en este lugar
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
};
