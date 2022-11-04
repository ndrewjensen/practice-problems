"use strict";

/* 1.1 
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

does uniqueness include casing? 
  No

will the string include white space? punctuation? is that included in unique?
  yes. yes. no.

Test Cases:
"" -> false
"a" -> true
"ab" -> true
"abA" -> false

Pseudo: brute force solution with additional data structure
Create a with 26 lower case letters with 0 values frequency counter, 
  set would be best, but I'll use object for familiarity with api.
loop through string.
  check if lower case character is in freq counter
    return false or add char to freq counter
return true
*/


function isUnique(string) {
  const LETTERS = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0}
  for (let char of string) {
    let lower = char.toLowerCase();
    if (lower in LETTERS && LETTERS[lower] !== 0) return false
    if (lower in LETTERS && LETTERS[lower] === 0) LETTERS[lower] ++;
    
  }
  return true
}


// solution without additional data structure. 
// sort? can't bubble sort an array, it would mean creating new arrays.
// recurse? Don't know
// can def solve in O(n^2) runtime by looping through from 0 to n then i to n


// 1.2
/* Given two strings, write a method to decide if one is a permutation of the
other.

input: string1, string2
output: boolean

Do we care about lower vs. upper case? No.
Do we care about punctuation? No punctuation will be given. 
Do we need to handle whitespace? No whitespace will be given.
Empty Strings? return false

Test Cases:
cato. & Taco. -> true
t & To -> false

Can do this with one or two hash tables, one would be diffs, two would be freq
counters. Either way, we're talking best conceivable runtime O(n) because we
need O(n) to create the hash table. looping through the hash table is O(1)

Pseudo: Use a Hashtable as log of differences to solve in O(n) runtime
if strings have diff lengths return false 
loop through length of strings
  update hash tables - maybe as a helper function
  if key exists from string1, increment.
  if key exists from string2, decrement.
  
loop through values of final hash table and verify that all are 0. 

*/

function makeFrequencyCounter(input) {
  const output = {};

  for (let char of input) {
    if (char === " ") continue;
    let current = output[char.toLowerCase()] || 0;
    current++;
    output[char.toLowerCase()] = current;
  }

  return output;
}

function isPermutation (str1,str2) {
  if (str1.length !== str2.length) return false;
  const counter1 = makeFrequencyCounter(str1);
  const counter2 = makeFrequencyCounter(str2);
  for (let char in counter1) {
    if (counter1[char] === counter2[char]) {
      delete counter2[char];
    }
  }
  return Object.keys(counter2).length === 0;
}

/**
URLify: Write a method to replace all spaces in a string with %20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input:
  "Mr John Smith", 13
Output:
  "Mr%20John%20Smith"

Question: 
  -I am aware that strings have a .replace method. May I use it?

Since I'm solving in js, I can't mutate this string, and working with strings
would be inefficent, so I'm inclined to loop through this string, build up an 
array by replacing the spaces, then combine back to a string.



This is inherently unsorted, so searching for spaces cannot be done in logn.
Best conceivable runtime is O(n)., I'll use O(n) to loop through the string and 
create the array, O(n) again to join it to a string.

Pseudocode:
declare empty output array;
loop through string
  for spaces, push %20 into the array
  for non-spaces, push value into the array
return a join of the array

  */

function urlify (string) {
  const output = [];
  for (let char of string) {
    if (char === " ") {
      output.push("%20");
    } else {
      output.push(char);
    }
  }
  return output.join("");
}

/**
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin-
drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
You can ignore casing and non-letter characters.

EXAMPLE
Input:
  Tact Coa
Output:
  True (permutations: 'taco cat', "atco cta", etc.)

I want to use a hash table as a frequency counters. Each character must appear
an even number of times, excluding one character in the event of an odd number 
of characters.

Will take me O(n) time to make a hash table, and O(1) time to check that all but
one of the hash table values is even. If I encounter two odds, I can immediately
return false.

Pseudocode:
Make hash table
declare number of odds 
loop through hash table
  verify that all values are even
  count the number of odd values
    if odd, check that number of odd is less than 2 or return false
return true
 */

function isPalindromePermutation(str) {
  const counter = makeFrequencyCounter(str);
  let oddCount = 0;
  for (let char in counter) {
    if (counter[char] % 2 === 1) {
      oddCount ++;
      if (oddCount > 1) return false;
    }
  }
  return true;
}