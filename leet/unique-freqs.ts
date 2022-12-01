/**
input: array of integers
return: boolean
 
if the frequency of occurence of each integer is unique return true

[1,2,2] => true
[1,2] => false

BCR: O(n) in space and time
-no empty array
create an empty frequency counter object
loop through the array
  -incrementing the freq counter

loop through freq counter and create set of frequencies
  return false if i encounter a duplicate freq

return true
 */

function uniqueFrequencies(ints: number[]): boolean {
  const frequencies: Record<number,number> = {}
  for (let int of ints) {
    if (int in frequencies) {
      frequencies[int] ++;
    } else {
      frequencies[int] = 1;
    }
  }
  const freqValArray = Object.values(frequencies) 
  let freqs = new Set(freqValArray);
  return freqs.size === freqValArray.length 
  // for (let freq in frequencies) {
  //   if (freqs.has(frequencies[freq])) return false
  //   freqs.add(frequencies[freq]);
  // }
  
  //return true
}

console.log(uniqueFrequencies([1,2]));
console.log(uniqueFrequencies([1,2,2]));