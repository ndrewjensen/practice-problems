"use strict";
/* 

-input: array of integers
-output: array of integers that are the products of every element in the array
excluding the ith element
-can't use division operator and it must be in linear time.

-input array will have length > 1

[1,2,3] => [6,3,2] 
[1,2,0] => [0,0,2]
[1,0,0] => [0,0,0]
[1,2,0,0]


Pseudocode:
-create an output array of all zeroes
-filter on input array for elements equal to zero, and check the length of that 
array, 
  -if its greater than 1 all the output elements will be zero 
    - return array of 0s
  -if its equal to 1, then all the elements except the zero will be zero

loop through array 
  calc the product of every element in the array excluding the maybe 0

loop through array
  push into the output array product * ith element ^ -1

return output array
*/

function calcProductArray (nums) {
  let output = new Array(nums.length).fill(0)
  let zeroIndex = 0;
  let product = 1;
  
  const zeros = nums.filter(num => num === 0);
  if (zeros.length > 1) return output;
  

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      product = product * nums[i]
    } else {
      zeroIndex = i;
    }
  }
  
  if (zeros.length === 1) {
    output[zeroIndex] = product;
    return output;
  }

  for (let i = 0; i < nums.length; i++) {
    output[i] = product * nums[i]**(-1)
  }

  return output;
} 
