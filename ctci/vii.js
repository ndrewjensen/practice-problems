"use strict";

// Given a smaller string s and a bigger string b, design an algorithm to find
// all permutations of the shorter string within the longer one.
// Print teh location of each permutation.

// ex:
// s = "abbc"
// b = "cbabadcbbabbcbabaabccbabc"

/** input: string or array
 * output: frequency counter like {a:1,b:3,...}
 */

function makeFrequencyCounter(input) {
  const output = {};

  for (let char of input) {
    let current = output[char] || 0;
    current++;
    output[char] = current;
  }

  return output;
}

/** input two freq. counters with equal count of characters
 *    as objects like {a:1,b:3,...}
 *  output boolean, true if all frequencies are equal.
 */

function compareFrequencyCounters(counter1, counter2) {
  for (let char in counter1) {
    if (counter1[char] !== counter2[char]) {
      return false;
    }
  }
  return true;
}

/** input: shortString, longString
 *
 * print: all permutations of shortString found in LongString
 *
 * output: none
 */

function printPermutations(shortString, longString) {
  if (longString.length < shortString.length) return;

  const freq = makeFrequencyCounter(shortString);
  let len = shortString.length;
  let slidingWindow = longString.slice(0, len);
  const windowFreq = makeFrequencyCounter(slidingWindow);

  let isPermutation = compareFrequencyCounters(freq, windowFreq);
  isPermutation && console.log(slidingWindow);

  let i = len;
  while (i < longString.length) {
    let rem = longString[i - len];
    let add = longString[i];
    windowFreq[rem]--;
    windowFreq[add] = windowFreq[add] ? windowFreq[add] + 1 : 1;
    slidingWindow = longString.slice(i - len + 1, i + 1);
    if (isPermutation) {
      if (rem === add) {

      } else {
        isPermutation = false;
      }
    } else {
      isPermutation = compareFrequencyCounters(freq, windowFreq);
      isPermutation && console.log(slidingWindow);
    }
    i++;
  }
}

function adjustFrequencyCounter(counter, remChar, addChar) {
  if (addChar === remChar) return counter;

  counter[remChar] = counter[remChar] ? counter[remChar]-- : -1;
  counter[remChar] === 0 && delete counter[remChar];

  if (addChar) {
    counter[addChar] = counter[addChar] ? counter[addChar]++ : 1;
    counter[addChar] === 0 && delete counter[addChar];
  }
  return counter;
}

/** input: shortString, longString
 *
 * print: all permutations of shortString found in LongString
 *
 * output: none
 */

// in progress:
/* function printPermutations2(shortString, longString) {
  if (longString.length < shortString.length) return "bad inputs";

  const diffs = makeFrequencyCounter(shortString);
  let len = shortString.length;
  let slidingWindow = longString.slice(0, len);

  for (let char of slidingWindow) {
    adjustFrequencyCounter(diffs, char);
  }

  let isPermutation = Object.keys(diffs).length === 0;
  isPermutation && console.log(slidingWindow);

  let i = len;
  while (i < longString.length) {
    let rem = longString[i - len];
    let add = longString[i];
    adjustFrequencyCounter(diffs, rem, add);
    
    slidingWindow = longString.slice(i - len + 1, i + 1);
    
    isPermutation = Object.keys(diffs).length === 0;
    isPermutation && console.log(slidingWindow);
    
    i++;
  }
}
 */