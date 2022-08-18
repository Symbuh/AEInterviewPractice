function nonConstructibleChange(coins) {
  let checkResult = (target) => {};

  coins = coins.sort((a, b) => a - b);

  let minChange = 0;
  for (let i = 0; i < coins.length; i++) {
    // If our next coin is more than one more of our current minimum,
    // We know we can't make the coin sums in between that and our current min.
    if (coins[i] > minChange + 1) {
      break;
    }
    minChange += coins[i];
  }

  return minChange + 1;
}
