"use strict";

/** Given a roman numeral as a string, convert it to an integer 

Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 
 * 
*/

function romanToInt(roman) {
  const rosetta = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let output = 0;

  for (let i = 0; i < roman.length; i++) {
    output += rosetta[roman[i]];
    if (roman[i + 1]) {
      if (
        (roman[i] === "I" && roman[i + 1] !== "I") ||
        (roman[i] === "X" && (roman[i + 1] === "L" || roman[i + 1] === "C")) ||
        (roman[i] === "C" && (roman[i + 1] === "D" || roman[i + 1] === "M"))
      ) {
        output -= 2 * rosetta[roman[i]];
      }
    }
  }
  return output;
}


// above solution is more efficient in space and time.
function romanToInt2(roman) {
  const rosetta = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let output = 0;

  for (let i = 0; i < roman.length; i++) {
    if (
      roman[i] === "I" && 
      (roman[i + 1] === "V" || roman[i + 1] === "X")) {
      output -= 1;
    } else if (
      roman[i] === "X" &&
      (roman[i + 1] === "L" || roman[i + 1] === "C")
    ) {
      output -= 10;
    } else if (
      roman[i] === "C" &&
      (roman[i + 1] === "D" || roman[i + 1] === "M")
    ) {
      output -= 100;
    } else {
      output += rosetta[roman[i]];
    }
  }
  return output;
}
