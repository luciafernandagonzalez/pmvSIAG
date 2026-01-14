import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const MascotaCard = ({ mascota }) => {
  const navigate = useNavigate();

  const compartirMascota = () => {
    const url = `${window.location.origin}/gallery/${mascota.id_mascota}`;

    const texto = `🐾 ¡Mirá esta mascota en adopción!
      Nombre: ${mascota.nombre}
      Especie: ${mascota.especie || "No especificado"}
      Raza: ${mascota.raza || "No especificada"}

      Dale un hogar 💛
      ${url}`;

    if (navigator.share) {
      navigator
        .share({
          title: `Mascota en adopción: ${mascota.nombre}`,
          text: texto,
          url,
        })
        .catch((e) => {
          console.log("error t: ", e);
          console.error("Error al compartir", e);
        });
    } else {
      navigator.clipboard
        .writeText(texto)
        .then(() => alert("Publicación copiada al portapapeles 📋"))
        .catch((e) => console.error("Error al copiar", e));
    }
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={mascota.imagen || "/placeholder.jpg"}
        className="card-img-top"
        style={{ height: 260, objectFit: "cover" }}
      />

      <div className="card-body">
        <h5>{mascota.nombre}</h5>
        <p>{mascota.observacion}</p>

        <div className="d-flex gap-2">
          {mascota.historia_clinica && (
            <a
              className="btn btn-outline-primary"
              href={mascota.historia_clinica}
              target="_blank"
              rel="noreferrer"
            >
              Historia clínica
            </a>
          )}

          <button className="btn btn-success" onClick={() => navigate(`/gallery/${mascota.id_mascota}`)}>
            Adóptalo
          </button>

          <button
            className="btn btn-outline-secondary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              compartirMascota();
            }}
          >
            Compartir
          </button>
        </div>
      </div>
    </div>
  );
};

MascotaCard.propTypes = {
  mascota: PropTypes.object.isRequired,
};
