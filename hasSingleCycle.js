function hasSingleCycle(array) {
  let cycleLength = array.length - 1;
  let running = true;
  let pointer = 0;

  while (!!running) {
    pointer = pointer + array[pointer];

    if (pointer > array.length - 1) {
      if (pointer > (array.length - 1) * 2) {
        pointer = pointer % (array.length - 1);
      } else {
        pointer = pointer - array.length;
      }
    }

    if (pointer < 0) {
      if (pointer < -(array.length - 1)) {
        pointer = -(pointer % array.length);
      }

      pointer = pointer < 0 ? array.length + pointer : pointer;
    }

    if (pointer === 0) {
      running = false;
      return cycleLength === 0 ? true : false;
    }

    if (cycleLength <= 0) {
      return false;
    }

    cycleLength--;
  }
}
