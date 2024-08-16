import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import NavBar from "./Components/layout_Home/Navbar";
import Custos from "./Components/pages/Custos";
import "./index.css";
import { useEffect, useState } from "react";

function App() {

  const [activeColor, setActiveColor] = useState(false)

useEffect(()=>{
function scrollPosition(){
if(window.scrollY > 20){
setActiveColor(true)
}else{
  setActiveColor(false)
}
}

window.addEventListener("scroll", scrollPosition)

return () =>{
  window.addEventListener("scroll", scrollPosition)
}
},[])

  return (
    <>
      <BrowserRouter>
        <NavBar action={activeColor}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custos" element={<Custos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
