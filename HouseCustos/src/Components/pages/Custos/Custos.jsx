import { useState, useEffect, useContext } from "react";
import * as C from "./style.jsx";
import { items } from "../../../data/items.js";
import { categories } from "../../../data/categories.js";
import {
  filterListByMonth,
  getCurrentMonth,
} from "../../../helpers/dateFilter.js";
import { TableArea } from "./CustosComponents/TableArea/TableArea.jsx";
import { InfoArea } from "./CustosComponents/InfoArea/InfoArea.jsx";
import { InputArea } from "./InputArea/InputArea.jsx";
import { UserContext } from "../../../context/UserContext.jsx";
import { Link } from "react-router-dom";

import { ImExit } from "react-icons/im";
const Custos = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <>
      <C.Container>
        <C.Header>
          {user ? <C.HeaderTitle>{user.name}</C.HeaderTitle> : ""}

          <C.HeaderTitle>House Custos</C.HeaderTitle>
          <C.HeaderTitle>
            <Link to={"/"}>
              <ImExit />
            </Link>
          </C.HeaderTitle>
        </C.Header>

        <C.Body>
          <InfoArea
            onMonthChange={handleMonthChange}
            currentMonth={currentMonth}
            income={income}
            expense={expense}
          />

          <InputArea onAdd={handleAddItem} />

          <TableArea list={filteredList} />
        </C.Body>
      </C.Container>
    </>
  );
};

export default Custos;
