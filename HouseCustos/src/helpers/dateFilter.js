export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

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

const addZeroToDate = (n) => (n < 10 ? `0${n}` : `${n}`);

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
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
};

export const newDateAjusted = (dateField) => {
  let [year, month, day] = dateField.split("-");

  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
