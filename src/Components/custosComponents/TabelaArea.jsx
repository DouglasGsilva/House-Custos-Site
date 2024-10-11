import React from "react";
import "../custosComponents/TabelaArea.css";

const TabelaArea = (list) => {
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
      <div>
        {list.map((item, index) => {
          <div key={index}>
            <p></p>
            <p>{item}</p>
            <p></p>
          </div>;
        })}
      </div>
    </>
  );
};

export default TabelaArea;
