import { useState, useEffect } from "react";
import * as C from "./style.jsx";
import { items } from "../../../data/items.js";
import { categories } from "../../../data/categories.js";
import {
  filterListByMonth,
  getCurrentMonth,
} from "../../../helpers/dateFilter.js";
import { TableArea } from "./CustosComponents/TableArea/TableArea.jsx";
const Custos = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <>
      <C.Container>
        <C.Header>
          <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
        </C.Header>
        <C.Body>
          {/* Area de informações */}

          {/* Area de inserção */}
          <TableArea list={filteredList} />
        </C.Body>
      </C.Container>
    </>
  );
};

export default Custos;
