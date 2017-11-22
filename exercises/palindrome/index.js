// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //SOLUTION 4
  return str.split('').every( (char, i) => {
    return char === str[str.length - i -1];
  });
  // this will check twice so it is not ideal solution but you can explain this to your interviewer.
}

module.expo

// SOLUTION 1
// let reverseStr = strArr.reduce( (reversed, character) => {
//   return character + reversed;
// });

// SOLUTION 2
// let reverseStr = str.split('').reverse().join('');
// return str === reverseStr;


// SOLUTION 3
// let reverseStr = "";
//
// for(character of str) {
//     reverseStr = character + reverseStr;
// }




module.exports = palindrome;
