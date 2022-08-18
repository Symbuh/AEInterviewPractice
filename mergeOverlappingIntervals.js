function mergeOverlappingIntervals(array) {
  array = array.sort((a, b) => a[0] - b[0]);

  let prevStart = array[0][0],
    prevEnd = array[0][1],
    outputIndex = 0;
  let output = [[prevStart, prevEnd]];

  for (let i = 1; i < array.length; i++) {
    if (prevStart <= array[i][0] && prevEnd >= array[i][0]) {
      prevEnd = prevEnd > array[i][1] ? prevEnd : array[i][1];
      output[outputIndex] = [prevStart, prevEnd];
    } else {
      prevStart = array[i][0];
      prevEnd = array[i][1];
      output.push([prevStart, prevEnd]);
      outputIndex = output.length - 1;
    }
  }

  return output;
}
