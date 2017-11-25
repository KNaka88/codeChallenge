// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


module.exports = anagrams;



// //MYSOLUTION

// function anagrams(stringA, stringB) {
//
//   let aStrArr = stringA.replace(/[^\w]/g, "").toLowerCase().split('');
//   let bStrArr = stringB.replace(/[^\w]/g, "").toLowerCase().split('');
//
//
//   // create object
//   /**
//   {
//       a: 1,
//       h: 3,
//       d: 2
//   }
//   */
//   let aObj = createObject(stringA);
//   let bObj = createObject(stringB);
//
//
//   //A.  if stringA and stringB has different length of words return false
//   if (aStrArr.length !== bStrArr.length) {
//     return false;
//   }
//
//   //B
//   for (let key in aObj) {
//     // if stringA and stringB has different quantity of specific character, return false
//     if (aObj[key] !== bObj[key]) return false;
//   }
//
//   // if A and B doesn't apply return true
//   return true;
// }
// function createObject(str) {
//   const obj = {};
//
//   for (let char of strArr) {
//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//   return obj;
// }







//SOLUTION 1

// function anagrams(stringA, stringB) {

  // const aCharMap = buildCharMaps(stringA);
  // const bCharMap = buildCharMaps(stringB);
  //
  // if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  //   return false;
  // }
  //
  //
  // for (let char in aCharMap) {
  //   if (aCharMap[char] !== bCharMap[char]) {
  //     return false;
  //   }
  // }
  //
  // return true;
// }

// function buildCharMaps(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }
