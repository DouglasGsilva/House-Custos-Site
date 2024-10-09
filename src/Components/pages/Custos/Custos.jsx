import { categories } from "../../../data/categories";
import { itens } from "../../../data/itens";
import { useEffect, useState } from "react";
import {
  filterListByMonth,
  getCurrentMonth,
} from "../../../helpers/dateFilter";

const Custos = () => {
  const [list, setList] = useState(itens);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <div className='custos-container'>
      <h2>Pagina de custos</h2>
    </div>
  );
};

export default Custos;
