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



/* 1.2
Given two strings, write a method to decide if one is a permutation of the
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

/** 1.3
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

/** 1.4
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

/** 1.5
One Away: There are three types of edits that can be performed on strings: 
insert a character,
remove a character, 
or replace a character. 

Given two strings, write a function to check if they are one edit 
(or zero edits) away.

EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
"", "" -> true
a, b -> true

Questions:
-how should I manage casing? 
-will there be punctuation?

Note: 
-if length is more than 1 different, false
-if lengths are the same, just count diffs and false if there is more than 1
-if lengths are 1 diff, any diffs other than additional letter cause a fail.
-I think I need two different code blocks, one for equal length and one for diff
  lengths.

Pseudocode:
  -save lengths of both strings
  -if lengths diff by > 1 return false
  -declare a count of diffs variable
  -if lengths equal
    -loop through both strings,  
      -if characters are not equal, increment diffs.
      -if diffs > 1, return false
  -if lengths off by 1
    -determine shorter array
    -declare i and j iterators
    -while loop through shorter array
      if characters are diff,
        if diffs count = 1 return false
        increment longer array iterator
      else if increment both iterators
 */

// this solution is almost identical to book, but they did some nice breaking up
// of the functions and cut out the slightest bit of repeat code. Def same big o
//s pace and time though.
function oneAway(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const lenDiff = Math.abs(len1 - len2);
  
  if (lenDiff > 1) return false

  let diffCount = 0;
  if (lenDiff === 0) {
    for (let i = 0; i < len1; i++) {
      if (str1[i] !== str2[i]) {
        if (diffCount === 1) return false;
        diffCount ++;
      }
    }
    return true;
  }
  let longerStr = "";
  let shorterStr = "";
  if (len1 > len2) {
    longerStr = str1;
    shorterStr = str2;
  } else {
    longerStr = str2;
    shorterStr = str1;
  }
  let i = 0;
  let j = 0;
  while (i < shorterStr.length) {
    if (str1[i] !== str2[i]) {
      if (diffCount === 1) return false;
      diffCount ++;
      j++;
    } else {
      i++;
      j++;
    }
  }
  return true;
}

/** 1.6
String Compression: Implement a method to perform basic string compression
using the counts of repeated characters.  If the "compressed" string would not
become smaller than the original string, your method should return the original 
string. 

You can assume the string has only uppercase and lowercase letters (a - z).

For example, the string aabcccccaaa would become a2b1c5a3.

So my idea is just to loop through the string and push into an array to build up
my output. have a variable that's just the value of the current character, and 
another that is the count of the current character. As long as the curr is the
same as the previous, increment the counter. When they aren't equal, push the 
character and the counter into the array.

at the end, check the length of array against the string, and return the string
or the stringified array.

Pseudo code: 
declare empty output array
declare current character as first char in string
declare a counter as 1
loop through string
  if current char is same, increment counter and continue
  otherwise push char and counter into array and update char and counter
return shorter compare length of input string and output array.
 */

//solution matches book solution
function stringCompression(str) {
  if (!str) return str;
  const output = [];
  let currentChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (currentChar === str[i]) {
      count++;
      continue;
    } else {
      output.push(currentChar);
      output.push(count);
      currentChar = str[i];
      count = 1;
    }
  }
  output.push(currentChar);
  output.push(count);
  return ( str.length < output.length
    ? str
    : output.join("")
  )
}

/** 1.7
Rotate Matrix: Given an image represented by an N x N matrix, where each pixel
in the image is represented by an integer, write a method to rotate the image by
90 degrees. Can you do this in place?

[ a b c ]
[ d e f ]
[ g h i ]
->
[ g d a ]
[ h e b ]
[ i f c ]

 */


