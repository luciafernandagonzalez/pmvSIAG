import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AnimalsGallery } from "../components/AnimalsGallery";
import { Table } from "../components/Table";
import { HomePage, DashboardPage, LoginPage, RegisterPage, CRUDPets, Adoption, Footer } from "../pages";
import { useAuth } from "../contexts/AuthContext";


export const AppRouter = () => {
  const { currentUser } = useAuth();

  //funcion para verificar si el usuario es admin
  const isAdmin = () => {
    return currentUser && currentUser.tipo === 0;
  };

  const NormalUserRoute = ({ ...props }) => {
    if (!isAdmin()) {
      return <Navigate to="/galeria" />;
    }
    return <Route {...props} />;
  };

  return (
    <>
      <div style={{ paddingBottom: "70px", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            {/* Rutas accesibles por ambos roles */}
              <Route index element={<HomePage/>}/>
              <Route path="login" element={<LoginPage/>}/>
              <Route path="register" element={<RegisterPage/>}/>
              <Route path="dashboard" element={<DashboardPage/>}/>
              <Route path="adopcion" element={<Adoption/>} />
              <Route path="mascotasabm" element={<CRUDPets/>} />
              <Route path="galeria" element={<AnimalsGallery/>} />
              <Route path="tabla" element={<Table/>} />
            { /* Rutas accesibles por ADMIN */}
            {isAdmin() && (
              <>
              
              </>
            )}
          </Route>
        </Routes>
      </div>
      <Footer/>
    </>
  );
};
