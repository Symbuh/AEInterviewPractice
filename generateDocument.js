function generateDocument(characters, document) {
  if (document.length > characters.length) {
    return false;
  }

  let charMap = {};

  for (let i = 0; i < characters.length; i++) {
    !!charMap[characters[i]]
      ? charMap[characters[i]]++
      : (charMap[characters[i]] = 1);
  }

  for (let i = 0; i < document.length; i++) {
    if (!charMap[document[i]] || charMap[document[i]] === 0) {
      return false;
    } else {
      charMap[document[i]]--;
    }
  }
  return true;
}
