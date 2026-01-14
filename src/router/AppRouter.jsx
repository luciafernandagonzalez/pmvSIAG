import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import {
  HomePage,
  LoginPage,
  CRUDMascotasPage,
  CRUDUsuariosPage,
  EstadoAdopcionesPage,
  MascotasGaleriaPage,
  PublicacionCompartidaPage
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Layout */}
      <Route path="/" element={<Navbar />}>
      {/* Default page  */}
      <Route index element={<HomePage />} />

      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/gallery" element={<MascotasGaleriaPage />} />
      <Route path="/gallery/:id" element={<MascotasGaleriaPage />} />
      <Route path="/gallery/:id" element={<PublicacionCompartidaPage />} />

      <Route
        path="/application"
        element={
          <ProtectedRoute allowedRoles={[1]}>
            <EstadoAdopcionesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users"
        element={
          <ProtectedRoute allowedRoles={[1]}>
            <CRUDUsuariosPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user/home"
        element={
          <ProtectedRoute allowedRoles={[2]}>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<HomePage />} />

      <Route path="/mascotasabm" element={<CRUDMascotasPage />} />
      </Route>
    </Routes>
  );
};

