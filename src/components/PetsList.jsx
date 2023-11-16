
import { PetsDetail } from "../components/PetsDetail";
export const PetsList = ({mascotas, setMascota}) => {
  return (
    <>
         <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

{mascotas && mascotas.length ? (
    <>
        <h2 className="font-black text-3xl text-center">Listado Mascotas</h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold ">Mascotas</span>
        </p>

        { mascotas.map( mascota => (
            <PetsDetail 
                key={mascota.id}
                mascota={mascota}
                setMascota={setMascota}
                
            />
        ))}
    </>

) : (
    <>
        <h2 className="font-black text-3xl text-center">No hay mascotas</h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando mascotas {''}
            <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
        </p>
    </>
)}
</div>
    
    </>
  )
}
