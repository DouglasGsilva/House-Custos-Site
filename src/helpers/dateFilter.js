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

    if (itemDate.getFullYear() === year && itemDate.getMonth() + 1 === month) {
      newList.push(itemsList[i]);
    }
  }
  return newList;
};
