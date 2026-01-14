import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { MascotaModal } from "../components/mascotas/MascotaModal";
import { supabase } from "../db/supabase";

export const PublicacionCompartidaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const loadMascota = async () => {
      const { data, error } = await supabase
        .from("mascota")
        .select("*")
        .eq("id_mascota", id)
        .single();

      if (!error) setMascota(data);
      else console.error(error);
    };

    loadMascota();
  }, [id]);

  if (!mascota) return null;

  const url = `${window.location.origin}/gallery/${mascota.id_mascota}`;

  return (
    <>
      <Helmet>
        <title>{mascota.nombre} busca hogar</title>
        <meta property="og:title" content={`🐾 ${mascota.nombre} busca hogar`} />
        <meta property="og:description" content={mascota.observacion || "Adoptá, no compres 💛"} />
        <meta property="og:image" content={mascota.imagen} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <MascotaModal mascota={mascota} show={true} onClose={() => navigate("/gallery")} />
    </>
  );
};
