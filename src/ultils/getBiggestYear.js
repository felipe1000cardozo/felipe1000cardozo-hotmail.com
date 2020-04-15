const getBiggestPrice = (array) => {
  var biggestYear = array[0];

  for (let i = 1; i < array.length; ++i) {
    if (array[i] > biggestYear) {
      biggestYear = array[i];
    }
  }
  return biggestYear;
};

let arr = [1, 5, 10];

console.log(getBiggestPrice(arr));
