"use strict";

/** Given a roman numeral as a string, convert it to an integer 

Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 
 * 
*/

function romanToInt (roman) {
  const rosetta = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
  }

  let output = 0;

  for (let i = 0; i < roman.length; i++) {
    if (roman[i] === "I" && roman[i+1] && roman[i+1] !== "I")
    || if (roman[i] === "I" && roman[i+1] && roman[i+1] !== "I")
    if (roman[i] === "I" && roman[i+1] && roman[i+1] !== "I")
  }


}

