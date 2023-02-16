function longestIncreasingSubsequence(array) {
  let sequences = [],
    longest = [],
    lowest = 10000;

  sequences.push([array[0]]);

  for (let i = 1; i < array.length; i++) {
    if (array[i] < lowest) {
      lowest = array[i];
    }

    for (let j = 0; j < sequences.length; j++) {
      if (array[i] > sequences[j][sequences[j].length - 1]) {
        sequences[j].push(array[i]);
      } else if (
        array[i] < sequences[j][sequences[j].length - 1] &&
        array[i] > sequences[j][sequences[j].length - 2]
      ) {
        sequences[j].pop();
        sequences[j].push(array[i]);
      } else {
        if (array[i] === lowest) {
          sequences.push([array[i]]);
          break;
        }
      }
    }
  }

  for (let i = 0; i < sequences.length; i++) {
    if (sequences[i].length > longest.length) {
      longest = sequences[i];
    }
  }

  return longest;
}
