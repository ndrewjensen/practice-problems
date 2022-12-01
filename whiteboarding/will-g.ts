/*
Implement a document scanning function wordCountEngine, which receives a string 
document and returns a list of all unique words in it and their number of
occurrences, sorted by the number of occurrences in a descending order. If two
or more words have the same count, they should be sorted according to their order
in the original sentence. Assume that all letters are in english alphabet. You
function should be case-insensitive, so for instance, the words “Perfect” and
“perfect” should be considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use
whitespaces to separate words.

Examples:

input:  document = "Practice makes perfect. you'll only
                    get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"], 
          ["get", "1"], ["by", "1"], ["just", "1"] ]

// make an array with punctuation to remove
//iterate through the array calling the replace method on the string to replace
  punctuation with white space
//convert string to array
// create a frequency counter Map for the words
// iterate through array of words updating the frequency counter

//convert the map to an array of tuples
//sort the array of tuples
  -need to keep track of the original order of the words in the string to break
    ties.



          */

function wordCountEngine(document:string) {
  //need some edge case handling on multiple spaces and leading and trailing spaces
//const punctuation: string[] = ["'",",",".",":",";","!","?"] // et al
//const withoutPunctuation = document.toLowerCase().replace(/[^a-z]/g, "")

for (let char of punctuation) {
  //if (char < "a" || char > "z")
  document = document.replace(/[^a-z]/ig,""); 
  //document = document.replace(/[^a-zA-z]/ig,""); 
}
const words = document.split(" ");

const freqCount = new Map;
for (let word of words) {
  word = word.toLowerCase();
  if (freqCount.has(word)) {
    freqCount.set(word,freqCount.get(word)+1) 
  } else {
    freqCount.set(word,1);
  }
}

const output = [...freqCount.entries()]
output.sort((a,b)=> b[1]-a[1])

for (let word of output) {
  word[1] = `${word[1]}`
}

return output;
}



/*


Your friends are now complaining that it's too hard to make sure the lengths of their status updates are not prime numbers.

You decide to create a substitution cipher. The cipher alphabet is based on a key shared amongst those of your friends who don't mind spoilers.

Suppose the key is:
"The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!".

We use only the unique letters in this key to set the order of the characters in the substitution table.

T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

(spaces added for readability)

We then align it with the regular alphabet:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

Which gives us the substitution mapping: A becomes T, B becomes H, C becomes E, etc.

Write a function that takes a key and a string and encrypts the string with the key.

Example:
key = "The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!"
encrypt("It was all a dream.", key) -> "Od ptw txx t qsutg."
encrypt("Would you kindly?", key) -> "Pljxq zlj yobqxz?"

Complexity analysis:

m: The length of the message
k: The length of the key

-iterate through the key, adding the characters to a map
-iterate through an ABCD object, adding the map characters in order
-convert the string to an array
-iterate through the array, encrypting each character.
  -requires handling punctuation and whitespace
-convert back to string and return
-could be easier to deal with upper and lower case if just add all the casing to
the cypher

*/

function encrypt(message:string, key: string) {
  const cypher = new Set();
  const abcd = {a:"",b:"",c:"",} //et al
  key = key.replace(/[^a-z]/ig,""); //this is a great way to remove punctuation
  for (let char of key) {
    
    if (!cypher.has(char)) {
      cypher.add(char)
    }
  }
  const cypherArray = [...cypher]
  let i = 0;
  for (let char in abcd) {
    abcd[char] = cypherArray[i];
    i++;
  }
  const messageArray = message.split("");
  for (let j = 0; j < messageArray.length; j++) {
    if (messageArray[j].toLowerCase() in abcd) {
      if (messageArray[j] === messageArray[j].toLowerCase()) {
        messageArray[j] = abcd[messageArray[j]];
      } else {
        messageArray[j] = abcd[messageArray[j].toLowerCase()].toUpperCase();
      }
    }
  }

  return messageArray.join("")
}