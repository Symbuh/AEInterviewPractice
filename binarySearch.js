function binarySearch(array, target) {
  let found = false,
    start = 0,
    end = array.length,
    pivot = Math.floor(end / 2);

  while (!found) {
    if (array[pivot] === target) {
      found = true;
      return pivot;
    }

    if (array[pivot] > target) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }

    pivot = Math.floor((end - start) / 2) + start;
    if (end < start) {
      found = true;
    }
  }
  return -1;
}
