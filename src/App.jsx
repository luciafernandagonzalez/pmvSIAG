import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { AppRouter } from "./router/AppRouter";

// function App() {
//   return <AppRouter />;
// }

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
