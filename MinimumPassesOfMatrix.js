let createNegativeMap = (matrix) => {
  let count = 0,
    negativeMap = {};

  matrix.map((tupple, yindex) =>
    tupple.map((coordinate, xindex) => {
      if (coordinate <= 0) {
        let key = [xindex, yindex].toString();
        negativeMap[key] = {
          x: xindex,
          y: yindex,
          val: coordinate,
          flipped: false,
        };
      }
    })
  );

  return negativeMap;
};

let checkMatrix = (operations, matrix, coordinates) => {
  for (const operation in operations) {
    let result = operations[operation].call(null, coordinates.x, coordinates.y);

    if (matrix[result[1]]?.[result[0]] && matrix[result[1]]?.[result[0]] > 0) {
      return true;
    }
  }

  return false;
};

let checkNegMap = (operations, negativeMap, coordinates) => {
  for (const operation in operations) {
    let result = operations[operation].call(null, coordinates.x, coordinates.y);

    if (
      negativeMap[result.toString()]?.val !== 0 &&
      negativeMap[result.toString()]?.flipped === true
    ) {
      return true;
    }
  }

  return false;
};

function minimumPassesOfMatrix(matrix) {
  let negativeMap = createNegativeMap(matrix);

  if (Object.keys(negativeMap).length === 0 && matrix[0]?.[0]) {
    return 0;
  }

  let passing = true,
    flippedThisTurn = [],
    output = 0,
    remainingCount = 0;
  const operations = [
    (x, y) => [x + 1, y],
    (x, y) => [x - 1, y],
    (x, y) => [x, y + 1],
    (x, y) => [x, y - 1],
  ];

  while (!!passing) {
    flippedThisTurn = [];
    output++;
    remainingCount = 0;

    for (const key in negativeMap) {
      let canFlip = false;
      let coordinates = negativeMap[key];

      if (!negativeMap[key].flipped && negativeMap[key].val !== 0) {
        canFlip = checkMatrix(operations, matrix, coordinates);
        canFlip = !canFlip
          ? checkNegMap(operations, negativeMap, coordinates)
          : canFlip;
      }

      if (canFlip === true) {
        flippedThisTurn.push(key);
      } else {
        if (negativeMap[key].val !== 0 && !negativeMap[key].flipped) {
          remainingCount++;
        }
      }
    }

    // Base case
    if (flippedThisTurn.length === 0 || remainingCount === 0) {
      if (remainingCount === 0) {
        return output;
      } else {
        return -1;
      }
    }

    // Register elements flipped this turn at the end to avoid false positives.
    for (const key of flippedThisTurn) {
      if (negativeMap[key].val !== 0) {
        negativeMap[key].flipped = true;
      }
    }
  }

  return -1;
}
