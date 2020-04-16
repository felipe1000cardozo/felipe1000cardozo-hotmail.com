const getBiggestPrice = (array) => {
  var biggestPrice = array[0].price;

  for (let i = 1; i < array.length; ++i) {
    if (array[i].price > biggestPrice) {
      biggestPrice = array[i].price;
    }
  }
  return biggestPrice;
};

export default getBiggestPrice;
