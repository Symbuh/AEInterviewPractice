function twoNumberSum(array, targetSum) {
  let memo = {};

  for (let i = 0; i < array.length; i++) {
    if (memo[targetSum - array[i]]) {
      return [memo[targetSum - array[i]], array[i]];
    }

    memo[array[i]] = array[i];
  }

  return [];
}
