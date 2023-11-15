import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { HomePage, DashboardPage, LoginPage, RegisterPage, Adopcion, ABMMascotas } from "../pages";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="dashboard" element={<DashboardPage/>}/>
          <Route path="adopcion" element={<Adopcion/>} />
          <Route path="mascotasabm" element={<ABMMascotas/>} />
        </Route>
      </Routes>
    </>
  );
};
