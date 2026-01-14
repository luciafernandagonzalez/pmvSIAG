import { useState, useEffect } from "react";
import { MascotaForm } from "../components/mascotas/MascotaForm";
import { MascotasTable } from "../components/mascotas/MascotasTable";
import {
  obtenerMascotas,
  eliminarMascota,
  guardarMascota,
} from "../servicios/mascotaService";

export const CRUDMascotasPage = () => {
  const [mascotas, setMascotas] = useState([]);
  const [mascotaToEdit, setMascotaToEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cargarMascotas = async () => {
    const data = await obtenerMascotas();
    setMascotas(data);
  };

  useEffect(() => {
    cargarMascotas();
  }, []);

  // const eliminarMascota = async (id) => {
  //   const { error } = await supabase
  //     .from("mascota")
  //     .delete()
  //     .eq("id_mascota", id);
  //   if (!error) obtenerMascotas();
  // };

  // const guardarMascota = async (mascota) => {
  //   const bucket = supabase.storage.from("mascotas");

  //   let imagenUrl = mascota.imagen;
  //   let historiaUrl = mascota.historia_clinica;

  //   // 📷 subir imagen si hay
  //   if (mascota.imagen instanceof File) {
  //   const fileName = `img_${Date.now()}_${mascota.imagen.name}`;
  //   const { error } = await bucket.upload(fileName, mascota.imagen);
  //   if (!error) {
  //     const { data } = bucket.getPublicUrl(fileName);
  //     imagenUrl = data.publicUrl;
  //   }
  // }

  //   // 📄 subir historia clínica si hay
  //   if (mascota.historia_clinica instanceof File) {
  //     const fileName = `hc_${Date.now()}_${mascota.historia_clinica.name}`;

  //     const { error } = await bucket.upload(fileName, mascota.historia_clinica);
  //     if (!error) {
  //       const { data } = bucket.getPublicUrl(fileName);
  //       historiaUrl = data.publicUrl;
  //     }
  //   }

  //   const payload = {
  //     ...mascota,
  //     imagen: imagenUrl || null,
  //     historia_clinica: historiaUrl || null,
  //   };

  //   delete payload.id; // si existiera

  //   if (mascotaToEdit) {
  //     await supabase
  //       .from("mascota")
  //       .update(payload)
  //       .eq("id_mascota", mascotaToEdit.id_mascota);
  //   } else {
  //     await supabase.from("mascota").insert(payload);
  //   }
  // };
  // const handleEditar = (mascota) => {
  //   setMascotaToEdit(mascota);
  //   setShowModal(true);
  // };

  // const handleAgregar = () => {
  //   setMascotaToEdit(null);
  //   setShowModal(true);
  // };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Gestión de Mascotas</h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Agregar Mascota
        </button>
      </div>

      <MascotasTable
        mascotas={mascotas}
        onEliminar={async (id) => {
          await eliminarMascota(id);
          await cargarMascotas();
        }}
        onEditar={(mascota) => {
          setMascotaToEdit(mascota);
          setShowModal(true);
        }}
      />

      {showModal && (
        <MascotaForm
          mascota={mascotaToEdit}
          onCancelar={() => {
            setMascotaToEdit(null);
            setShowModal(false);
          }}
          onGuardar={async (mascota) => {
            await guardarMascota(mascota, mascotaToEdit);
            await cargarMascotas();
            setShowModal(false);
            setMascotaToEdit(null);
          }}
        />
      )}
    </div>
  );
};
