function firstDuplicateValue(array) {
  let memo = {};

  for (let i = 0; i < array.length; i++) {
    if (!!memo[array[i]]) {
      return array[i];
    }

    memo[array[i]] = true;
  }

  return -1;
}
