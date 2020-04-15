const getBiggestPrice = (array) => {
  var biggestPrice = array[0];

  for (let i = 1; i < array.length; ++i) {
    if (array[i] > biggestPrice) {
      biggestPrice = array[i];
    }
  }
  return biggestPrice;
};

let arr = [10500, 50000, 100000];

console.log(getBiggestPrice(arr));
