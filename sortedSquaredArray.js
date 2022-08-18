function sortedSquaredArray(array) {
  // Can this be done using binary search?
  let out = [];

  for (let i = 0; i < array.length; i++) {
    out.push(array[i] * array[i]);
  }

  return out.sort((a, b) => a - b);
}
