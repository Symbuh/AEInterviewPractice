function runLengthEncoding(string) {
  let makeEncodedString = (current, itemCount) => {
    let output = '';

    while (itemCount >= 9) {
      itemCount = itemCount - 9;
      output += '9' + current;
    }

    if (itemCount > 0) {
      output += itemCount.toString() + current;
    }

    return output;
  };

  let count = 1,
    current = string[0],
    output = '';

  for (let i = 1; i <= string.length; i++) {
    if (current !== string[i]) {
      output += makeEncodedString(current, count);
      current = string[i];
      count = 1;
    } else {
      count++;
    }
  }

  return output;
}
