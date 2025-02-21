// REACT HOOKS E REACT ROUTER DOM HOOKS
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// ESTILOS
import * as C from "./style.jsx";
import { ImExit } from "react-icons/im";
// SCHEMAS,SERVICES,CONTEXTS,HELPERS E DATA
import { items } from "../../../data/items.js";
import { categories } from "../../../data/categories.js";
import {
  filterListByMonth,
  getCurrentMonth,
} from "../../../helpers/dateFilter.js";
import { UserContext } from "../../../context/UserContext.jsx";
// IMPORT DE COMPONENTES
import { TableArea } from "./CustosComponents/TableArea/TableArea.jsx";
import { InfoArea } from "./CustosComponents/InfoArea/InfoArea.jsx";
import { InputArea } from "./InputArea/InputArea.jsx";
// JS COOKIES
import Cookies from "js-cookie";

// FUNÇÃO PRINCIPAL
const Custos = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const { user } = useContext(UserContext);
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

  // FUNÇÃO PARA MUDAR O MÊS
  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  // FUNÇÃO PARA ADICIONAR O ITEM
  const handleAddItem = (item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  // FUNÇÃO PARA DESLOGAR O USUÁRIO
  const handleLogout = () => {};

  // RETORNO DA FUNÇÃO CUSTOS COM OPERADOR TERNÁRIO PARA O USER
  return (
    <>
      <C.Container>
        <C.Header>
          {user ? <C.HeaderTitle>{user.name}</C.HeaderTitle> : ""}

          <C.HeaderTitle>House Custos</C.HeaderTitle>
          <C.HeaderTitle>
            <Link to={"/"} onClick={handleLogout}>
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
