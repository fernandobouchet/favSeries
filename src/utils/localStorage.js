const saveSeries = (series) => {
  localStorage.setItem("misSeries", JSON.stringify(series));
};

const restoreSeriesFromLocalStorage = () => {
  let parsedList = JSON.parse(localStorage.getItem("misSeries"));
  if (parsedList !== null) {
    return parsedList;
  } else
    return {
      favoritas: [],
      verMasTarde: [],
    };
};

export { saveSeries, restoreSeriesFromLocalStorage };
