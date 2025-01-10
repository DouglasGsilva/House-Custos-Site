// ESTILOS
import * as C from "./style";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// SCHEMAS,SERVICES,CONTEXTS E HELPERS
import { formatCurrentMonth } from "../../../../../helpers/dateFilter";
// IMPORTAÇÃO DE COMPONENTE
import { ResumeItem } from "../ResumeItem/ResumeItem";

// FUNÇÃO PRINCIPAL PASSANDO QUATRO PARAMETROS
export const InfoArea = ({ currentMonth, onMonthChange, income, expense }) => {
  // FUNÇÃO PARA PASSAR O MÊS DE FORMA DECRESCENTE UTILIZANDO ALGUNS PARAMETROS
  const handlePrevMonth = () => {
    if (typeof currentMonth === "string" && currentMonth.includes("-")) {
      let [year, month] = currentMonth.split("-");
      let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      currentDate.setMonth(currentDate.getMonth() - 1);
      const newMonth = currentDate.getMonth() + 1;
      onMonthChange(`${currentDate.getFullYear()}-${newMonth}`);
    }
  };
  // FUNÇÃO PARA PASSAR O MÊS DE FORMA CRESCENTE
  const handleNextMonth = () => {
    if (typeof currentMonth === "string" && currentMonth.includes("-")) {
      let [year, month] = currentMonth.split("-");
      let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      currentDate.setMonth(currentDate.getMonth() + 1);
      const newMonth = currentDate.getMonth() + 1;
      onMonthChange(`${currentDate.getFullYear()}-${newMonth}`);
    }
  };

  // RETORNO DO COMPONENTE DO INFOAREA
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <FaArrowCircleLeft />
        </C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>
          <FaArrowCircleRight />
        </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title='Receitas' value={income} />
        <ResumeItem title='Despesas' value={expense} />
        <ResumeItem
          title='Balanço'
          value={(income - expense).toFixed(2)}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
