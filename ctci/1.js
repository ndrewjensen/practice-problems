"use strict";

// 1.1 
// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

// does uniqueness include casing? 
  // No

// will the string include white space? punctuation? is that included in unique?
  // yes. yes. no.

// "" -> false
// "a" -> true
// "ab" -> true
// "abA" -> false


// brute force solution with additional data structure
// Create a with 26 lower case letters with 0 values frequency counter, 
  // set would be best, but I'll use object for familiarity with api.
// loop through string.
  // check if lower case character is in freq counter
    // return false or add char to freq counter
// return true


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
