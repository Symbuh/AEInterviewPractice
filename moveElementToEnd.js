function moveElementToEnd(array, toMove) {
  let begin = 0,
    end = array.length - 1,
    running = true;

  while (begin < end) {
    let left = array[begin],
      right = array[end];

    // Swap case
    if (left === toMove && right !== toMove) {
      array[begin] = right;
      array[end] = left;
    }

    if (left !== toMove) {
      begin++;
    }
    if (right === toMove) {
      end--;
    }
  }

  return array;
}
