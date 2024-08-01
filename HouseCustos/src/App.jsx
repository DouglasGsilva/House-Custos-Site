import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import NavBar from "./Components/layout_Home/Navbar";
import Custos from "./Components/pages/Custos";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custos" element={<Custos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
