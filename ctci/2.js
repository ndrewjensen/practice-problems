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
