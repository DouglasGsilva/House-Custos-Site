import { useState, useEffect } from "react";

import { categories } from "../../../data/categories.js";
import { itens } from "../../../data/itens.js";

import "./Custos.css";

import TabelaArea from "../../custosComponents/TabelaArea";
import HeaderCusto from "../../custosComponents/HeaderCusto.jsx";
import {
  getCurrentMonth,
  filterListByMonth,
} from "../../../helpers/dateFilter.js";

const Custos = () => {
  const [list, setList] = useState(itens);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <>
      <HeaderCusto />
      <TabelaArea list={filteredList} />
    </>
  );
};

export default Custos;
