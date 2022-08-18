function isMonotonic(array) {
  if (array.length <= 2) {
    return true;
  }
  let decreasing = 'uninitialized';

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      if (decreasing === 'uninitialized') {
        decreasing = true;
      }

      if (decreasing === false) {
        return false;
      }
    } else if (array[i] < array[i + 1]) {
      if (decreasing === 'uninitialized') {
        decreasing = false;
      }

      if (decreasing === true) {
        return false;
      }
    }
  }
  return true;
}
