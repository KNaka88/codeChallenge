// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
// Solution 2 (Recursive)

  if (n === row) {
      return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  const add = stair.length <= row ? '#' : ' ';

  steps(n, row, stair + add);

}

module.exports = steps;


// //SOLUTION 1
//
// for (let row = 0; row < n; row++) {
//
//   let step = "";
//
//   for (let col = 0; col < n; col++) {
//     if (col <= row) {
//       step += "#";
//     } else {
//       step += " ";
//     }
//   }
//   console.log(step);
// }
