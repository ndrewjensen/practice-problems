"use strict";

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

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
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
      this.tail = node.prev
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  }
} 

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
     ll.remove(node)
    } else {
      unique[node.val] = true;
    }
    node = node.next;
  }
  return ll;
}

/**2.2 */