/* eslint-env node */
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  const { id } = req.query;

  const { data, error } = await supabase
    .from("mascota")
    .select("nombre, imagen, observacion")
    .eq("id_mascota", id)
    .single();

  if (error || !data) {
    return res.status(404).send("Not found");
  }

  const imageUrl = data.imagen.startsWith("http")
    ? data.imagen
    : `https://tu-bucket.supabase.co/${data.imagen}`;

  res.setHeader("Content-Type", "text/html");

  res.send(`<!DOCTYPE html>
<html>
<head>
  <title>${data.nombre} en adopción</title>

  <meta property="og:type" content="website"/>
  <meta property="og:title" content="🐾 ${data.nombre} busca hogar"/>
  <meta property="og:description" content="${data.observacion || "Adoptá, no compres 💛"}"/>
  <meta property="og:image" content="${imageUrl}"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="🐾 ${data.nombre} busca hogar"/>
  <meta name="twitter:description" content="${data.observacion || "Adoptá, no compres 💛"}"/>
  <meta name="twitter:image" content="${imageUrl}"/>

  <meta http-equiv="refresh" content="0; url=/gallery/${id}" />
</head>
<body></body>
</html>`);
}
