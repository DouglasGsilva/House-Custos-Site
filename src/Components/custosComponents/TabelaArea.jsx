import React from "react";
import "../custosComponents/TabelaArea.css";

const TabelaArea = () => {
  return (
    <>
      {" "}
      <div className='custos-header'>
        <div className='center-content'>
          <p>Data</p>
          <p>Categoria</p>
          <p>Título</p>
        </div>
        <p>Valor</p>
      </div>
    </>
  );
};

export default TabelaArea;
