function firstNonRepeatingCharacter(string) {
  let nonRepeats = new Set();
  let repeats = new Set();
  for (const [char, index] of string) {
    if (nonRepeats.has(char)) {
      nonRepeats.delete(char);
      repeats.add(char);
    } else {
      !repeats.has(char) ? nonRepeats.add(char) : null;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (nonRepeats.has(string[i])) {
      return i;
    }
  }
  return -1;
}
