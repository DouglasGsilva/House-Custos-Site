import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Custos from "./Components/pages/Custos/Custos";
import "./index.css";
import Cadastro from "./Components/pages/Cadastro/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/custos' element={<Custos />} />
            <Route path='/cadastro' element={<Cadastro />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
