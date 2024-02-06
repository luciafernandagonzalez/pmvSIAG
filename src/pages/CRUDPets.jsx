import { useState, useEffect } from "react";
import { PetsForm } from "../components/PetsForm";
import { PetsList } from "../components/PetsList";
import { db } from "../firebase"; // Importa la instancia de Firestore
// import { doc, getDoc } from "firebase/firestore";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

export const CRUDPets = () => {
  const [mascotas, setMascotas] = useState([]);
  const [mascota, setMascota] = useState({});
  const [editingMode, setEditingMode] = useState(false); // Nuevo estado para el modo de edición
  const [mascotaToEdit, setMascotaToEdit] = useState(null); // Estado para la mascota que se va a editar

  // const [triggerUpdate, setTriggerUpdate] = useState(false);

  useEffect(() => {
    console.log("pruebaeffect curd:", mascotas);
    // Obtener datos de Firestore al cargar el componente
    const obtenerMascotas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "mascotas"));
        const mascotasData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          estado: doc.estado,
          ...doc.data(),
        }));
        // console.log(mascotasData);
        setMascotas(mascotasData.filter((mascota) => mascota.estado === 0));
        setMascotas(mascotasData);
        console.log(mascotas);
      } catch (error) {
        console.error("Error al obtener mascotas", error);
      }
    };

    obtenerMascotas();
  }, [db]);

  const eliminarMascota = async (id, setMascotas) => {
    console.log(mascotas);
    try {
      await deleteDoc(doc(db, "mascotas", id));
      console.log("objeto borrado correctamente", id);

      //Actualizar mascotas despues de eliminar
      setMascotas((prevMascotas) =>
        prevMascotas.filter((mascota) => mascota.idMascota !== id)
      );
    } catch (error) {
      console.error("error al borrar mascota", error);
    }
  };
  // };

  const editarMascota = (mascota) => {
    // console.log("Mascota seleccionada para editarCRUD:", mascota);
    setEditingMode(true);
    setMascotaToEdit(mascota);
  };

  const handleGuardarMascotaEditada = async (mascotaEditada) => {
    try {
      console.log(",,", mascotaToEdit);
      //logica para actualizar
      const mascotaRef = doc(db, "mascotas", mascotaToEdit.idMascota);
      console.log("mascotaref: ", mascotaRef);

      // await updateDoc(mascotaRef, mascotaEditada);
      await updateDoc(mascotaRef, {
        nombre: mascotaEditada.nombreMascota,
        especie: mascotaEditada.especieMascota,
        raza: mascotaEditada.razaMascota,
        edad: mascotaEditada.edadMascota,
        imagen: mascotaEditada.imagenMascota,
        historiaClinica: mascotaEditada.historiaClinicaMascota,
        observacion: mascotaEditada.observacionesMascota,
      });

      setMascotas((prevMascotas) =>
        prevMascotas.map((mascota) =>
          mascota.id === mascotaEditada.id ? mascotaEditada : mascota
        )
      );

      //Limpiar el estado de mascotaToEdit y desactivar modo de edicion
      setMascotaToEdit(null);
      setEditingMode(false);

      console.log("Mascota editada guaradda correctamente");
    } catch (error) {
      console.error("error al guardar mascota editada", error);
    }
  };

  const actualizarListaMascotas = (nuevaMascota, setMascotas) => {
    // console.log("aaaa", mascotas);
    // console.log("aaaabbbb", nuevaMascota);
    console.log("actualizar", mascotas);
    console.log("actualizar2", nuevaMascota);
    setMascotas([...mascotas, nuevaMascota]);
  };

  return (
    <>
      <h1 className="text-center">Gestion Mascotas</h1>
      <div className="row p-4">
        <div className="col-md-6">
          {editingMode ? (
            <PetsForm
              mascota={mascotaToEdit}
              mascotaToEdit={mascotaToEdit}
              onGuardarMascotaEditada={handleGuardarMascotaEditada}
              actualizarListaMascotas={actualizarListaMascotas}
            />
          ) : (
            <PetsForm
              mascotas={mascotas}
              setMascotas={setMascotas}
              mascota={mascota}
              setMascota={setMascota}
              actualizarListaMascotas={actualizarListaMascotas}
            />
          )}
        </div>
        <div className="col-md-6">
          <PetsList
            mascotas={mascotas}
            setMascota={setMascota}
            eliminarMascota={eliminarMascota}
            editarMascota={editarMascota}
            actualizarListaMascotas={actualizarListaMascotas}
            // onEditarMascota={handleEditarMascota}
          />
        </div>
      </div>
    </>
  );
};
