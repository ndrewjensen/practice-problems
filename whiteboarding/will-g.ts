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

function wordCountEngine(document: string) {
	//need some edge case handling on multiple spaces and leading and trailing spaces

	//remove leading and trailing whitespace, make lowercase, and strip out punctuation
	document = document
		.trim()
		.toLowerCase()
		.replace(/[^a-z\s]/gi, "")
		.replace(/  +/g, " ");

	const words = document.split(" ");
	const freqCount = new Map();

	//build frequency counter
	for (let word of words) {
		if (freqCount.has(word)) {
			freqCount.set(word, freqCount.get(word) + 1);
		} else {
			freqCount.set(word, 1);
		}
	}

	//convert frequencies to an array and sort them by the freq, which is the
	//second value in the tuple
	const output = [...freqCount.entries()];
	output.sort((a, b) => b[1] - a[1]);

	//stringify the frequencies, per the example
	for (let word of output) {
		word[1] = `${word[1]}`;
	}

	return output;
}

/*


Your friends are now complaining that it's too hard to make sure the lengths of
their status updates are not prime numbers.

You decide to create a substitution cipher. The cipher alphabet is based on a
key shared amongst those of your friends who don't mind spoilers.

Suppose the key is:
"The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!".

We use only the unique letters in this key to set the order of the characters in
the substitution table.

T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

(spaces added for readability)

We then align it with the regular alphabet:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

Which gives us the substitution mapping: A becomes T, B becomes H, C becomes E, 
etc.

Write a function that takes a key and a string and encrypts the string with the
key.

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

function encrypt(message: string, key: string) {
	const cypher = new Set();
	const abcd = {
		a: "",
		b: "",
		c: "",
		d: "",
		e: "",
		f: "",
		g: "",
		h: "",
		i: "",
		j: "",
		k: "",
		l: "",
		m: "",
		n: "",
		o: "",
		p: "",
		q: "",
		r: "",
		s: "",
		t: "",
		u: "",
		v: "",
		w: "",
		x: "",
		y: "",
		z: "",
	};
	key = key
		.trim()
		.replace(/[^a-z\s]/gi, "") // remove punctuation
		.replace(/  +/g, " "); // remove 2 or more spaces

	for (let char of key) {
		if (!cypher.has(char)) {
			cypher.add(char);
		}
	}
	const cypherArray = [...cypher];
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

	return messageArray.join("");
}

/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) 
-Initialize the LRU cache with positive size capacity.

int get(int key) 
Return the value of the key if the key exists, otherwise return -1.

void put(int key, int value) 
Update the value of the key if the key exists. 
Otherwise, add the key-value pair to the cache. 

If the number of keys exceeds 
the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

Queue 

capacity
enqueue
dequeue
hash table of all nodes
head
tail
put - find the node, and update - remove the node from its place, and enqueue, 
or dequeue and enqueue

Node 
next
previous

// use case: cache the last ten calls to an API, use an LRU cache

*/

interface CNode {
	key: number;
	val: number;
	next: CNode | null;
	prev: CNode | null;
}

class CNode {
	constructor(
		key: number = 0,
		val: number = 0,
		next: CNode | null = null,
		prev: CNode | null = null,
	) {
		this.key = key;
		this.val = val;
		this.next = next;
		this.prev = prev;
	}
}

interface Queue {
	capacity: number;
	length: number;
	head: CNode;
	tail: CNode;
	cnodes: Record<number, CNode>;
}

class Queue {
	constructor(capacity: number) {
		this.capacity = capacity;
		this.length = 0;
		this.head = new CNode();
		this.tail = this.head;
		this.cnodes = {};
	}

	enqueue(node: CNode): CNode {
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
		this.length++;
		this.cnodes[node.key] = node;
		return node;
	}

	dequeue(): CNode | null {
		const node = this.head.next;
		if (!node) return null;
		this.head.next = node.next;
		if (node.next) node.next.prev = this.head;
		this.length--;
		delete this.cnodes[node.key];
		return node;
	}

	get(key: number): number {
		const node = this.cnodes[key];
		if (node) {
			node.prev!.next = node.next;
			this.tail.next = node;
			this.tail = node;
		}
		return this.cnodes[key] ? this.cnodes[key].val : -1;
	}

	put(key: number, val: number): void {
		const result = this.get(key);
		if (result !== -1) {
			this.cnodes[key].val = val;
		} else {
			this.enqueue(new CNode(key, val));
		}
		if (this.length > this.capacity) this.dequeue();
	}
}
// A map does all of this built in because it uses a linked list to store
// its entries

// map.keys.next.value

/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

-declare an empty output list
-iterate through list of linked lists
	-taking two lists at a time, merge them
	-push the merged ll into the output
-recurse using the output

// TODO: refactor this using a min heap
*/

interface ListNode {
	val: number;
	next: ListNode | null;
}

class ListNode {
	val = 0;
	next: ListNode | null = null;
}

function mergeLinkedLists(list: ListNode[]) {
	if (list.length === 1) return list;
	const mergedLists: ListNode[] = [];
	for (let i = 0; i < list.length; i += 2) {
		mergedLists.push(merge(list[i], list[i + 1]));
	}
	return mergeLinkedLists(mergedLists);
}

function merge(node1: ListNode, node2?: ListNode) {
	// the code isn't writter here, but assume this merges two 
	return new ListNode();
}

/*
Given the root of a binary tree and an integer targetSum, return all 
root-to-leaf paths where the sum of the node values in the path equals 
targetSum. Each path should be returned as a list of the node values, not node 
references.

A root-to-leaf path is a path starting from the root and ending at any leaf
node. A leaf is a node with no children.

-recursive, depth first search
-arguments
	- target sum
	- ouptput array of arrays of node values
	- current array of node values
	- currNode
	- sum def 0

	- add the currNode val to the sum
	- add currNode val to curr array
	- if is targetsum then push the curr array into the output array 
	-if left then recurse left
	-if right then recurse right

	- sutract node.val from sum
	- pop from curr array
	- return

	this is called backtracking
*/

interface TreeNode {
	val: number;
	left?: TreeNode;
	right?: TreeNode;
}

class TreeNode {
	val = 0;
	left?: TreeNode;
	right?: TreeNode;

	constructor(val: number, left?: TreeNode, right?: TreeNode) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}



function pathSum(
	root: TreeNode,
	target: number,
	output: number[][] = [],
	current: number[],
	sum: number = 0,
) {
	sum += root.val;
	current.push(root.val);
	
	if (root.left) pathSum(root.left, target, output, current, sum);
	if (root.right) pathSum(root.right, target, output, current, sum);
	if (sum === target && !root.left && !root.right) output.push([...current]);

	current.pop();
	return output;
}


/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has
piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses
some pile of bananas and eats k bananas from that pile. If the pile has less
than k bananas, she eats all of them instead and will not eat any more bananas
during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before
the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

n piles
k ban/hour
h hours
assume n >= h 


if n=h, then k = size of the biggest pile;
spread piles into math.max to determin max pile size

binary search between 1 and maxpile
for current k, check to see if Koko can finish all the bananas in h hours.
	-declare a sum of hours
	-iterate through piles, adding to hourSum the ceil of the size of the pile / k
if at the end of the loop, hourSum < h, return k


*/


function minEatingSpeed(piles: number[], h: number) {
	let right = Math.max(...piles);
	let left = 1;
	let k = right;
	let minK: number;

	while (left < right) {
		k = left + right >> 1;
		let hourSum = 0;
		for (let pile of piles) {
			hourSum += (Math.ceil(pile / k))
		}
		if (hourSum <= h) {
			minK = k;
			right = k;
		} else {
			left = k + 1;
		}
	}
	return right;
}