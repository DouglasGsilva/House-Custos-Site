import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Custos from "./Components/pages/Custos/Custos";
import Cadastro from "./Components/pages/Cadastro/Cadastro";
import Login from "./Components/pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/custos' element={<Custos />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
