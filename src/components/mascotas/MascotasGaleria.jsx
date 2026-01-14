import PropTypes from "prop-types";
import { MascotaCard } from "./MascotaCard";

export const MascotasGaleria = ({ mascotas }) => {
  if (!mascotas.length)
    return <div className="text-center text-muted py-4">No hay mascotas</div>;

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {mascotas.map((m) => (
        <div key={m.id_mascota} className="col">
          <MascotaCard mascota={m} />
        </div>
      ))}
    </div>
  );
};

MascotasGaleria.propTypes = {
  mascotas: PropTypes.array.isRequired,
};
