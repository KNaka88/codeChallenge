// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;


// Solution 1
// return  str.split("").reverse().join();

// Solution2
// let strArr = str.split('');
// let reversed = "";

// for (let character of str) {
//   reversed = character + reversed;
// }
