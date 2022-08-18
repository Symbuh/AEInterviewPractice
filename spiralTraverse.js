function spiralTraverse(array) {
  /*
    We want to store different invokable logic for up down left and right
  */
  let output = [];

  let handleDirection = (yChange, xChange, y, x) => {
    if (
      array.length - 1 < y + yChange ||
      array[y].length < x + xChange ||
      !array[y + yChange][x + xChange]
    ) {
      if (array[y][x] !== null) {
        output.push(array[y][x]);
        array[y][x] = null;
      }

      if (array[y].length === x + xChange) {
        return [y, x];
      }

      return true;
    }

    if (array[y][x] === null) {
      x = x + xChange;
      y = y + yChange;
    }

    while (y < array.length && x < array[y].length && !!array[y][x]) {
      //console.log(`Array: ${array}, y: ${y}, x: ${x}`)
      console.log('throwing here');
      output.push(array[y][x]);
      array[y][x] = null;

      y = y + yChange;
      x = x + xChange;
    }

    console.log(`returning ${y}, ${x}`);
    return [y - yChange, x - xChange];
  };

  let directions = [
    { dir: 'right', params: [0, 1] },
    { dir: 'down', params: [1, 0] },
    { dir: 'left', params: [0, -1] },
    { dir: 'up', params: [-1, 0] },
  ];

  let xAxis = 0,
    yAxis = 0,
    running = true;

  while (!!running) {
    for (const direction of directions) {
      let passOutput = handleDirection(
        direction.params[0],
        direction.params[1],
        yAxis,
        xAxis
      );

      console.log('passout', passOutput);
      if (passOutput === true) {
        running = false;
        return output;
      }

      yAxis = passOutput[0];
      xAxis = passOutput[1];
    }
  }

  return output;
}
