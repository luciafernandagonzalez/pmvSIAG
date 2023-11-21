
import { PetsDetail } from "../components/PetsDetail";
export const PetsList = ({mascotas, setMascota}) => {
  return (
    <>
         <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
         <h2 className="font-black text-3xl text-center">Listado Mascotas</h2>
        <p className="text-xl mt-5 mb-10 p-3 text-center">
            Administra tus Mascotas{''}
            
        </p>

{mascotas && mascotas.length ? (
    <>
        

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
