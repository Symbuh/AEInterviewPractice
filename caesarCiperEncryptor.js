function caesarCipherEncryptor(string, key) {
  let output = '';

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    charCode = charCode + key;
    if (charCode > 122) {
      charCode = ((charCode - 122) % 26) + 96;
    }

    output += String.fromCharCode(charCode);
  }

  return output;
}
