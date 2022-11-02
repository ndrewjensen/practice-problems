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
counters. Either way, we're talking best conceivable runtime O(n). 

Pseudo: Use a Hashtable as log of differences to solve in O(n) runtime
if strings have diff lengths return false 
loop through length of strings
  update hash tables - maybe as a helper function
  if key exists from string1, increment.
  if key exists from string2, decrement.
  
loop through values of final hash table and verify that all are 0. 

*/

