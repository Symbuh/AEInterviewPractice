function longestPalindromicSubstring(string) {
  /*
    Identify potential midpoints
      - A midpoint is any double string of characters or any time 'aba' style strings happen
      - Walk out and check equality from this index.
  */
  let potentialMidpoints = [],
    output = '';

  if (string.length === 0 || string.length === 1) {
    return string;
  }

  if (string[0] === string[1]) {
    potentialMidpoints.push({ right: 1, left: 0 });
  }
  for (let i = 1; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      potentialMidpoints.push({ right: i + 1, left: i });
    }

    if (string[i - 1] === string[i + 1]) {
      potentialMidpoints.push({ right: i, left: i });
    }
  }

  for (let i = 0; i < potentialMidpoints.length; i++) {
    let subString = '';
    let left = potentialMidpoints[i].left,
      right = potentialMidpoints[i].right;
    if (right === left) {
      subString = string[right];
    } else {
      subString = string[left] + string[right];
    }
    // micro optimization: we check to see if characters half the length
    // of our previous largest are equal. If they are not this prooves
    // that this potential midpoint can never be larger than our longest
    // and we can throw it away.
    if (
      string[left - Math.floor(output.length / 2) + 1] !==
      string[right + Math.floor(output.length / 2) - 1]
    ) {
      continue;
    }

    left--;
    right++;

    while (
      string[left] === string[right] &&
      left >= 0 &&
      right <= string.length
    ) {
      subString = string[left] + subString + string[right];
      left--;
      right++;
    }
    if (subString.length > output.length) {
      output = subString;
    }
  }

  return output;
}
