const getLowestYear = (array) => {
  var lowestYear = array[0].year;

  for (let i = 1; i < array.length; ++i) {
    if (array[i].year < lowestYear) {
      lowestYear = array[i].year;
    }
  }
  return lowestYear;
};

export default getLowestYear;
