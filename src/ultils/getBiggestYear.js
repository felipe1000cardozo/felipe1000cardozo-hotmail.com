const getBiggestYear = (array) => {
  var biggestYear = array[0].year;

  for (let i = 1; i < array.length; ++i) {
    if (array[i].year > biggestYear) {
      biggestYear = array[i].year;
    }
  }
  return biggestYear;
};

export default getBiggestYear;
