import { supabase } from "../db/supabase";
import { enumEstadoAdopcion } from "../models/enums/enumEstadoAdopcion";
import { enumEstadoMascota } from "../models/enums/enumEstadoMascota";

/**
 * Trae las adopciones del usuario o todas si es admin
 */
export const obtenerAdopciones = async (userId, esAdmin) => {
  let query = supabase
    .from("adopcion")
    .select(`
      id_adopcion,
      estado,
      mascota:mascota_id (
        id_mascota,
        nombre,
        especie,
        raza,
        imagen,
        observacion
      ),
      usuario:usuario_id (
        id_usuario,
        nombre,
        apellido
      )
    `);

  if (!esAdmin) {
    query = query.eq("usuario_id", userId);
  }

  const { data, error } = await query;

  if (error) throw error;

  return data.map((a) => ({
    id: a.id_adopcion,
    idMascota: a.mascota.id_mascota,
    nombreMascota: a.mascota.nombre,
    especieMascota: a.mascota.especie,
    razaMascota: a.mascota.raza,
    imagenMascota: a.mascota.imagen,
    observacionMascota: a.mascota.observacion,
    estado: a.estado,
  }));
};

/**
 * Cambios de estado
 */
export const aprobarAdopcion = async (idMascota, idAdopcion) => {
  const { error } = await supabase
    .from("adopcion")
    .update({ estado: enumEstadoAdopcion.APROBADA })
    .eq("id_adopcion", idAdopcion);

  if (error) throw error;

  await supabase.from("mascota").update({ estado: 1 }).eq("id_mascota", idMascota);
};

export const rechazarAdopcion = async (idMascota, idAdopcion) => {
  const { error: errorAdopcion } = await supabase
    .from("adopcion")
    .update({ estado: enumEstadoAdopcion.RECHAZADA })
    .eq("id_adopcion", idAdopcion);

    if (errorAdopcion) throw errorAdopcion;

  const { error: errorMascota } = await supabase
    .from("mascota")
    .update({ estado: enumEstadoMascota.DISPONIBLE })
    .eq("id_mascota", idMascota);
  if (errorMascota) throw errorMascota;
};

export const cancelarAdopcion = async (idMascota, idAdopcion) => {
  const { error } = await supabase
    .from("adopcion")
    .update({ estado: enumEstadoAdopcion.CANCELADA })
    .eq("id_adopcion", idAdopcion);
  if (error) throw error;

  const { error: errorMascota } = await supabase
    .from("mascota")
    .update({ estado: enumEstadoMascota.DISPONIBLE })
    .eq("id_mascota", idMascota);
  if (errorMascota) throw errorMascota;
};
