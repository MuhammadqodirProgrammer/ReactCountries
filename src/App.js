import "./app.scss";
import Header from "./components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import { Countryes } from "./components/Countyes/Countyes"; 
import { Routes, Route } from "react-router-dom";
import { Error } from "./pages/Error/Error";
import { CountryOne } from "./pages/CoutryOne/CountryOne";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

function App() {
  const {theme } = useContext(ThemeContext)
  return (
    <div className={`App container-fluid ${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Countryes />} />
        <Route path="*" element={<Error />} />
        <Route path="name/:name" element={<CountryOne />} />

      </Routes>
      
    </div>
  );
}

export default App;
