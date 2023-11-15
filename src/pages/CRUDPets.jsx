import { PetsForm } from "../components/PetsForm";
import { PetsList } from "../components/PetsList";

export const CRUDPets = () => {
  return (
    <>
      <h1 className="text-center">Gestion Mascotas</h1>
      <div className="row p-4">
        <div className="col-md-6">
          <PetsForm />
        </div>
        <div className="col-md-6">
          <PetsList />
        </div>
      </div>
    </>
  );
};
