import * as C from "./style";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { formatCurrentMonth } from "../../../../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem/ResumeItem";

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }) => {
  const handlePrevMonth = () => {
    if (typeof currentMonth === "string" && currentMonth.includes("-")) {
      let [year, month] = currentMonth.split("-");
      let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      currentDate.setMonth(currentDate.getMonth() - 1);
      const newMonth = currentDate.getMonth() + 1;
      onMonthChange(`${currentDate.getFullYear()}-${newMonth}`);
    }
  };
  const handleNextMonth = () => {
    if (typeof currentMonth === "string" && currentMonth.includes("-")) {
      let [year, month] = currentMonth.split("-");
      let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      currentDate.setMonth(currentDate.getMonth() + 1);
      const newMonth = currentDate.getMonth() + 1;
      onMonthChange(`${currentDate.getFullYear()}-${newMonth}`);
    }
  };

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
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
