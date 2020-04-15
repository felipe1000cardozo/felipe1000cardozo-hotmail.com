const getLowestYear = (array) => {
  var lowestYear = array[0];

  for (let i = 1; i < array.length; ++i) {
    if (array[i] < lowestYear) {
      lowestYear = array[i];
    }
  }
  return lowestYear;
};

let arr = [5, 6, 8, -3];

console.log(getLowestYear(arr));
