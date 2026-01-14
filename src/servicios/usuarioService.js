import { supabase } from "../db/supabase";

export const obtenerUsuarios = async () => {
  const { data, error } = await supabase
    .from("usuario")
    .select("id_usuario, nombre, apellido, email, telefono, nombre_usuario, tipo_usuario:tipo_usuario_id (descripcion)");

  if (error) throw error;
  return data;
};

export const crearUsuario = async (usuario) => {
  const { error } = await supabase.from("usuario").insert(usuario);
  if (error) throw error;
};

export const actualizarUsuario = async (id, usuario) => {
  const { error } = await supabase.from("usuario").update(usuario).eq("id_usuario", id);
  if (error) throw error;
};

export const eliminarUsuario = async (id) => {
  const { error } = await supabase.from("usuario").delete().eq("id_usuario", id);
  if (error) throw error;
};
