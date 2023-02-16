function isPalindrome(string) {
  let reversed = string.split('').reverse().join('');

  return reversed === string;
}
