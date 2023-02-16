function riverSizes(matrix) {
  let mods = {
    up: (y, x) => [y - 1, x],
    down: (y, x) => [y + 1, x],
    left: (y, x) => [y, x - 1],
    right: (y, x) => [y, x + 1],
  };

  let count = 0;

  let checkOneRiver = (starty, startx) => {
    if (!matrix[starty]?.[startx] || matrix[starty][startx] === 0) {
      return count;
    }
    count++;

    if (
      matrix?.[starty + 1]?.[startx] === 0 &&
      matrix?.[starty - 1]?.[startx] === 0 &&
      matrix?.[starty]?.[startx + 1] === 0 &&
      matrix?.[starty]?.[startx - 1] === 0
    ) {
      matrix[starty][startx] = 0;
      return count;
    }

    let next = [];

    for (const mod in mods) {
      let result = mods[mod](starty, startx);
      if (matrix?.[result[0]]?.[result[1]] === 1) {
        next.push(result);
      }
    }
    matrix[starty][startx] = 0;
    next.forEach((next) => checkOneRiver(next[0], next[1], count));
    return count;
  };

  let output = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 1) {
        count = 0;
        let size = checkOneRiver(y, x);
        size !== 0 ? output.push(size) : null;
      }
    }
  }

  return output;
}
