// FUNÇÃO PARA PEGAR O MÊS ATUAL
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

// FUNÇÃO PARA FILTRAR A LISTA PELO MÊS
export const filterListByMonth = (itemsList, date) => {
  let year, month;

  if (date instanceof Date) {
    year = date.getFullYear();
    month = date.getMonth() + 1;
  } else if (typeof date === "string") {
    [year, month] = date.split("-");
    year = parseInt(year);
    month = parseInt(month);
  }

  let newList = [];

  for (let i in itemsList) {
    let itemDate = itemsList[i].date;

    if (itemDate.getFullYear() === year && itemDate.getMonth() === month) {
      newList.push(itemsList[i]);
    }
  }
  return newList;
};

// FUNÇÃO PARA FORMATAR A DATA
export const formatDate = (date) => {
  let year, month, day;

  if (date instanceof Date) {
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
  } else if (typeof date === String) {
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
  }

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};
// CONSTANTE DE ADIÇÃO DE ZERO NA DATA
const addZeroToDate = (n) => (n < 10 ? `0${n}` : `${n}`);

// FUNÇÃO PARA FORMATAR O MÊS ATUAL
export const formatCurrentMonth = (currentMonth) => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
};

// FUNÇÃO PARA AJUSTAR A NOVA DATA
export const newDateAjusted = (dateField) => {
  let [year, month, day] = dateField.split("-");

  return new Date(parseInt(year), parseInt(month), parseInt(day));
};
