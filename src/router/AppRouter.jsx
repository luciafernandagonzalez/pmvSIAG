import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AnimalsGallery } from "../components/AnimalsGallery";
import { HomePage, DashboardPage, LoginPage, RegisterPage, CRUDPets, Adoption } from "../pages";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="dashboard" element={<DashboardPage/>}/>
          <Route path="adopcion" element={<Adoption/>} />
          <Route path="mascotasabm" element={<CRUDPets/>} />
          <Route path="galeria" element={<AnimalsGallery/>} />
        </Route>
      </Routes>
    </>
  );
};
