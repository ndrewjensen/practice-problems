"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  pushNode(node, leftRight) {
    if (leftRight === "left") {
      if (this.head) {
        this.head.prev = node;
        node.next = this.head;
      } else {
        this.tail = node;
      }
      this.head = node;
      this.length++;
    }
    if (leftRight === "right") {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.length++;
    }
  }

  pushNodeLeft(node) {
    this.pushNode(node, "left");
  }

  pushNodeRight(node) {
    this.pushNode(node, "right");
  }

  remove(node) {
    if (this.head === node && this.tail === node) {
      this.head = null;
      this.tail = null;
    } else if (this.head === node) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (this.tail === node) {
      node.prev.next = null;
      this.tail = node.prev;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this.length--;
  }

  reverse() {
    const reversedList = new LinkedList();
    let node = this.head;
    while (node) {
      [node.next,node.prev] = [node.prev,node.next]
      node = node.prev;
    }
    [this.head,this.tail] = [this.tail,this.head]
    return
  }
  
}

/** 2.1
Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed? 
  -if a buffer wasn't allowed, I would i would nest a loop. on each node, I
  would loop through the rest of the nodes, deleting dupes. This would be O(1)
  space but O(n^2) time

Questions: 
1. is the list singly-linked?
2. is there a linked list class with a head property? 
3. what is my input? a head node? or a linked list

1,2,3,1,8,5,8,5,9,6,8 -> 1,2,3,8,5,9,6
*/

let unsorted = new LinkedList();
unsorted.push(1);
unsorted.push(2);
unsorted.push(3);
unsorted.push(1);
unsorted.push(8);
unsorted.push(5);
unsorted.push(8);
unsorted.push(5);
unsorted.push(9);
unsorted.push(6);
unsorted.push(8);

function removeDups(ll) {
  let node = ll.head;
  const unique = {};

  while (node) {
    if (node.val in unique) {
      ll.remove(node);
    } else {
      unique[node.val] = true;
    }
    node = node.next;
  }
  return ll;
}

/**2.2
Return Kth to Last: Implement an algorithm to find the kth to last element of a
singly linked list.

Questions:
-Does the list class have a length property? no
-what should I return if k > n ? or will it always be less? 
-will the list always be non-empty

Brute Force:
-iterate through the list while incrementing a counter
-then iterate through again, stopping on the right node.

Pseudcode:
-declare a counter, n
-loop through list
  -increment counter
-subtract n-k to get i
- declare j = 0
-iterate through list again, returning the node when j=i

((1,2,3,1,8),2)-> 1

*/

//TODO: implement with a runner pointer
function returnKthNode(ll, k) {
  let n = 0;
  let node = ll.head;

  while (node) {
    n++;
    node = node.next;
  }

  const i = n - k;
  let j = 1;
  node = ll.head;
  while (j <= i) {
    node = node.next;
    j++;
  }
  return node;
}

/** 2.3
Delete Middle Node: Implement an algorithm to delete a node in the middle
(i.e., any node but the first and last node, not necessarily the exact middle)
of a singly linked list, given only access to that node.
EXAMPLE
Input: the node c from the linked list a -› b -› c-› d -›e -›f
Result: nothing is returned, but the new linked list looks like
a-> b -> d -> e -> f

So basically we need to copy the next node onto the given node, then delete the
next node
 */

function deleteMiddleNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

/** 2.4
Partition: Write code to partition a linked list around a value ×, such that
all nodes less than x come before all nodes greater than or equal to x.
(IMPORTANT: The partition element x can appear anywhere in the 'right
partition"; it does not need to appear between the left and right partitions.
The additional spacing in the example below indicates the partition.
Yes, the output below is one of many valid outputs!)
EXAMPLE
Input:
Output:
3 -> 5 -› 8 - > 5 - > 10 - > 2
3 -> 1 -> 2
-›
-› 1 [partition = 5]
10 -> 5 -> 5
-> 8

BCR: O(n) because we have to look at every node
BruteForce: iterate through list. If node value less input, then push the node
onto the left and remove it from current position. If node value is equal to or
greater, we could push to the right, but I think we should just leave them in 
place

Pseudo: 
loop through list
  if node value is less than input
    call pushNodeLeft
    call removeNode
return list

*/

let trivial = new LinkedList();
let trivial2 = new LinkedList();
trivial2.push(5);

function partition(list, x) {
  let node = list.head;
  while (node) {
    if (node.val < x) {
      list.pushNodeLeft(new Node(node.val));
      list.remove(node);
    }
    node = node.next;
  }
  return list;
}

/** 2.5
sum Lists; You have two numbers represented by a linked list, where each node
contains a single digit.The digits are stored in reverse order such that the 1's
digit is at the head of the list. Write a function that adds the two numbers and
returns the sum as a linked list. (You are not allowed to "cheat" and just 
convert the linked list to an integer)

EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9
-› 2). That is, 617 + 295.
Output: 2 -> 1 -> 9. That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem

EXAMPLE
Input: (6 -> 1 -> 7) + (2 -> 9
-> 5). That is, 617 + 295.
Output: 9 -› 1 -> 2. That is, 912.

The reverse order is a helpful. It means I can start at the head, adding each
pair, carrying over any values > 10, left pushing a new node onto my sum list.
I need to handle summing numbers with different numbers of digits.

Pseudocode:
declare a variable to store digit overflow
declare a new linked list for the sum
loop while at least one of the number nodes in non-null
  if both nodes are non-null,
    add them
    add the overflow
    update the overflow
    next both nodes
  else if 
    add node1 if its non-null
    next node1
  else if 
    add node2 if its non-null
    next node2
  add any overflow as a final node
  return sum node
 */

function sumLists(list1, list2) {
  let sumList = new LinkedList();
  let overflow = 0;
  let node1 = list1.head;
  let node2 = list2.head;

  while (node1 || node2) {
    if (node1 && node2) {
      sumList.pushNodeRight(new Node((node1.val + node2.val + overflow) % 10));
      overflow = Math.floor((node1.val + node2.val + overflow) / 10);
      node1 = node1.next;
      node2 = node2.next;
    } else if (node1) {
      sumList.pushNodeRight(new Node(node1.val + overflow));
      overflow = Math.floor((node1.val + overflow) / 10);
      node1 = node1.next;
    } else if (node2) {
      sumList.pushNodeRight(new Node(node2.val + overflow));
      overflow = Math.floor((node2.val + overflow) / 10);
      node2 = node2.next;
    }
  }
  if (overflow) {
    sumList.pushNodeRight(new Node(overflow));
  }
  return sumList;
}

let list1 = new LinkedList();
list1.push(9);
list1.push(8);
list1.push(7);
let list2 = new LinkedList();
list2.push(6);
list2.push(5);
list2.push(4);

/**2.6
Palindrome: Implement a function to check if a linked list is a palindrome.

easy with a doubly linked list, more challenging with a single list without
a tail.

Questions: do I have access to the list's length? tail? previous?

BCR: O(n) time

brute force: 
1. put the list into an array and check it with array methods. O(n)
2. create a second, reversed link list and walk through both


Pseudocode:
declare new list
declarer counter of the #of nodes
loop through list
  push each val into new list
loop through list
  compare two lists up until round up of half of list

Easy. No need to write it.

 */

/**2.7
Intersection: Given two (singly) linked lists, determine if the two lists
intersect. Return the intersecting node. Note that the intersection is defined
based on reference, not value. That is, if the kth node of the first linked list
is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting.

BCR O(n+m) time because I will need to loop through both lists.

Assuming they are singly-linked, and that I don't know the tail or the length.


Trick here is that the tail should def be the same. So lets just loop through
both lists to determine their length, check that their tails match. Then
iterate through both of them at the same time (skipping ahead by the diff in
their lengths) and return the first matching node.

Pseudocode: 

declare counter for each list length
declare currNode for each list
loop through each list
  increment counter
  advance currNode
check that tails are the same and return null if they aren't.

loop through longer list diff b/n lengths number of times
  advance current node for longer list

loop through both lists
  if nodes are same, return node
  otherwise advance both nodes
return null


 */


function findIntersection(list1, list2) {
  let len1 = 0;
  let len2 = 0;
  let node1 = list1.head;
  let node2 = list2.head;

  while (node1) {
    node1 = node1.next;
    len1 ++;
  }
  while (node2) {
    node2 = node2.next;
    len2 ++;
  }
  if (node1 !== node2) return null;

  let nodeLonger = list1.head;
  let nodeShorter = list2.head;

  if (len2 > len1) {
    nodeLonger = list2.head
    nodeShorter = list1.head;
  }
  
  while (len1 !== len2) {
    nodeLonger = nodeLonger.next;
    len1 > len2 ? len1 -- : len2 --;
  }

  while (nodeLonger) {
    if (nodeLonger === nodeShorter) return nodeLonger;
    nodeLonger = nodeLonger.next;
    nodeShorter = nodeShorter.next;
  }

  return null;
}


// const nodea = new Node("a");
// const nodeb = new Node("b");
// const nodec = new Node("c");
// const noded = new Node("d");
// const nodee = new Node("e");
// const nodef = new Node("f");
// const nodeg = new Node("g");
// const nodeh = new Node("h");
// const nodei = new Node("i");
// const nodej = new Node("j");

// const ll27a = new LinkedList();
// const ll27b= new LinkedList();
// ll27a.pushNodeRight(nodea);
// ll27a.pushNodeRight(nodeb);
// ll27a.pushNodeRight(nodec);
// ll27a.pushNodeRight(noded);
// ll27a.pushNodeRight(nodee);
// ll27b.pushNodeRight(nodei);
// ll27b.pushNodeRight(nodej);
// ll27b.pushNodeRight(nodeb);


/**2.8
Loop Detection: Given a linked list which might contain a loop,
implement an algorithm that returns the node at the beginning of
the loop (if one exists).

EXAMPLE
Input: A -› B -> C -› D - E -› C (the same C as earlier)
Output: C

Hints: #50, #69, #83, #90

BCR: O(n) runtime because you must look at every node

I can do tihs in O(n) space and time. I'll declare a new Set, loop through the
list, adding each node to the set and returning the first node that is already
in the Set, or returning null after the loop.

Psuedocode:
declare new set
declare the list head as the current node
loop through nodes list while node is truthy
  if node is in the set, return it
  add the node to the set
  advance the node
return null

 */

function detectLoop(list) {
  let haveSeen = new Set();
  let node = list.head;
  while (node) {
    if (haveSeen.has(node)) return node;
    haveSeen.add(node);
    node = node.next;
  }
  return null
}

function detectLoopInPlace(list) {
  let slowRunner = list.head;
  if (!slowRunner || !slowRunner.next) return null;
  let fastRunner = slowRunner.next;
  while (fastRunner.next.next) {
    if (slowRunner === fastRunner) {
      return slowRunner;
    }
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }

  return null
}

const nodea = new Node("a");
const nodeb = new Node("b");
const nodec = new Node("c");
const noded = new Node("d");
const nodee = new Node("e");
const nodea2 = new Node("a");
const nodeb2 = new Node("b");
const nodec2 = new Node("c");
const noded2 = new Node("d");
const nodee2 = new Node("e");

const loopNode = new LinkedList();
loopNode.pushNodeRight(nodea);
loopNode.pushNodeRight(nodeb);
loopNode.pushNodeRight(nodec);
loopNode.pushNodeRight(noded);
loopNode.pushNodeRight(nodee);
loopNode.pushNodeRight(nodec);

const noLoopNode = new LinkedList();
noLoopNode.pushNodeRight(nodea2);
noLoopNode.pushNodeRight(nodeb2);
noLoopNode.pushNodeRight(nodec2);
noLoopNode.pushNodeRight(noded2);
noLoopNode.pushNodeRight(nodee2);