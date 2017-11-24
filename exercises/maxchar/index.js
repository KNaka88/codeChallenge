// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  const chars = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (key in chars) {
    if (chars[key] > max) {
      maxChar = key;
      max = chars[key];
    }
  }

  return maxChar;

}

module.exports = maxChar;
