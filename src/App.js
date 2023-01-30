import "./app.scss";
import Header from "./components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import { Countryes } from "./components/Countyes/Countyes"; 
import { Routes, Route } from "react-router-dom";
import { Error } from "./pages/Error/Error";
import { CountryOne } from "./pages/CoutryOne/CountryOne";
function App() {
  return (
    <div className="App container-fluid">
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
