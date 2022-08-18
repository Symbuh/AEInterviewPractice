let calculateDiff = (first, second) => {
  let diff;
  if ((first > 0 && second > 0) || (first < 0 && second < 0)) {
    diff = Math.abs(first - second);
  } else {
    diff = Math.abs(first) + Math.abs(second);
  }
  return diff;
};

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);

  let arrayTwoPointer = 0,
    currentMin = 100000,
    currentBucket;

  for (let i = 0; i < arrayOne.length; i++) {
    let running = true;
    while (!!running) {
      if (
        arrayOne[i] > arrayTwo[arrayTwoPointer] &&
        arrayTwoPointer !== arrayTwo.length - 1
      ) {
        arrayTwoPointer++;
      } else if (arrayOne[i] === arrayTwo[arrayTwoPointer]) {
        running = false;
        return [arrayOne[i], arrayTwo[arrayTwoPointer]];
      } else {
        let diff;

        if (
          calculateDiff(arrayOne[i], arrayTwo[arrayTwoPointer]) >
          calculateDiff(arrayOne[i], arrayTwo[arrayTwoPointer - 1])
        ) {
          diff = calculateDiff(arrayOne[i], arrayTwo[arrayTwoPointer - 1]);
          arrayTwoPointer--;
        } else {
          diff = calculateDiff(arrayOne[i], arrayTwo[arrayTwoPointer]);
        }

        if (diff < currentMin) {
          currentMin = diff;
          currentBucket = [arrayOne[i], arrayTwo[arrayTwoPointer]];
        }
        running = false;
      }
    }
  }

  return currentBucket;
}
