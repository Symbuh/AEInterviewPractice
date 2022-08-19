function findThreeLargestNumbers(array) {
  let output = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (output.length < 3) {
      if (output[0] < array[i]) {
        if (output[output.length - 1] < array[i]) {
          output.push(array[i]);
        } else {
          let temp = output[output.length - 1];
          output[output.length - 1] = array[i];
          output.push(temp);
        }
      } else {
        output.unshift(array[i]);
      }
    } else {
      // Extremely ugly, but efficent
      if (output[0] < array[i]) {
        if (output[output.length - 1] < array[i]) {
          output[0] = output[1];
          output[1] = output[2];
          output[2] = array[i];
        } else if (output[1] < array[i]) {
          output[0] = output[1];
          output[1] = array[i];
        } else {
          output[0] = array[i];
        }
      }
    }
  }

  return output;
}
