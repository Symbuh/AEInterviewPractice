function minNumberOfCoinsForChange(n, denoms) {
  let memo = [];

  memo[0] = 0;

  for (let i = 1; i <= n; i++) {
    memo.push(Infinity);
  }

  denoms = denoms.sort((a, b) => a - b);

  for (let i = 0; i < denoms.length; i++) {
    for (let j = 0; j < memo.length; j++) {
      if (denoms[i] <= j) {
        memo[j] = Math.min(memo[j], 1 + memo[j - denoms[i]]);
      }
    }
  }

  return memo[memo.length - 1] === Infinity ? -1 : memo[memo.length - 1];
}
