import { supabase } from "../db/supabase";
import { enumEstadoMascota } from "../models/enums/enumEstadoMascota";

const bucket = supabase.storage.from("mascotas");

export const obtenerMascotas = async () => {
  const { data, error } = await supabase
    .from("mascota")
    .select("*")
    .eq("estado", enumEstadoMascota.DISPONIBLE)
    .order("id_mascota", { ascending: false });

  if (error) throw error;
  return data;
};

export const eliminarMascota = async (id) => {
  const { error } = await supabase.from("mascota").delete().eq("id_mascota", id);
  if (error) throw error;
};

export const guardarMascota = async (mascota, mascotaToEdit) => {
  let imagenUrl = mascota.imagen;
  let historiaUrl = mascota.historia_clinica;

  if (mascota.imagen instanceof File) {
    const name = `img_${Date.now()}_${mascota.imagen.name}`;
    await bucket.upload(name, mascota.imagen);
    imagenUrl = bucket.getPublicUrl(name).data.publicUrl;
  }

  if (mascota.historia_clinica instanceof File) {
    const name = `hc_${Date.now()}_${mascota.historia_clinica.name}`;
    await bucket.upload(name, mascota.historia_clinica);
    historiaUrl = bucket.getPublicUrl(name).data.publicUrl;
  }

  const payload = {
    ...mascota,
    imagen: imagenUrl || null,
    historia_clinica: historiaUrl || null,
  };

  delete payload.id;

  if (mascotaToEdit) {
    await supabase
      .from("mascota")
      .update(payload)
      .eq("id_mascota", mascotaToEdit.id_mascota);
  } else {
    await supabase.from("mascota").insert(payload);
  }
};
