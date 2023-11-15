import {  PetsForm } from "../components/PetsForm";
import { PetsList } from "../components/PetsList";


export const CRUDPets = () => {
  
  return (
    <>
      <h1 className="text-center">Gestion Mascotas</h1>
      <PetsForm />
      <PetsList/>
    </>
  );
};
