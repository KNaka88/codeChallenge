// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {

  //SOLUTION 2
  let result = str[0].toUpperCase();

  for (let i= 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

// SOLUTION 1 BETTER SOLUTION
// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return  words.join(' ');
// }



// MY SOLUTION
// function capitalize(str) {
//   let wordArr = str.split(" ");
//
//   for (let i=0; i<wordArr.length; i++) {
//       wordArr[i] = capitalizeFirstLetter(wordArr[i]);
//
//   }
//
//   return wordArr.join(" ");
// }
//
//
// function capitalizeFirstLetter(str) {
//     const firstLetter = str[0].toUpperCase();
//     const restOfLetter = str.slice(1);
//     const letter = firstLetter + restOfLetter;
//     return letter;
// }

module.exports = capitalize;
