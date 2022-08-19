function maxSubsetSumNoAdjacent(array) {
  let sum2Back = array[0],
    sum1Back = array[1] > sum2Back ? array[1] : sum2Back;

  if (array.length === 0) {
    return 0;
  }

  for (let i = 2; i < array.length; i++) {
    if (sum1Back > sum2Back + array[i]) {
      sum2Back = sum1Back;
    } else {
      let temp = sum1Back;
      sum1Back = sum2Back + array[i];
      sum2Back = temp;
    }
  }

  return sum1Back > sum2Back ? sum1Back : sum2Back;
}
