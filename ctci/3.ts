/** Vertex Class
 * for use in Stacks and Queues, all methods stored in stacks and queues
 */

interface Vertex {
  val: number | string;
  next: Vertex | null;
}

class Vertex {
  constructor(val: number | string, next: Vertex | null = null) {
    this.val = val;
    this.next = next;
  }
}

/** Stack Class
 * methods:
 * pop(),
 * push(item),
 * peek(),
 * isEmpty,
 */

interface Stack {
  head: Vertex | null;
  length: number;
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  pop(): Vertex | null {
    if (this.isEmpty()) return null;
    let head = this.head;
    this.head = this.head!.next;
    return head;
  }
  
  peek(): Vertex | null {
    return this.head;  
  }

  push(node: Vertex): Vertex {
    node.next = this.head;
    this.head = node;
    return node;
  }
}

/** Queue Class
 * methods:
 * add(item);
 * remove();
 * peek();
 * isEmpty();
*/

interface Queue {
  head: Vertex | null;
  tail: Vertex | null;
  length: number;
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  add(node: Vertex): Vertex {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    } else {
      this.tail!.next = node;
      this.tail = node;
      return node;
    }
  }

  remove(): Vertex | null {
    if (this.isEmpty()) return null;
    let node: Vertex = this.head!;
    this.head = this.head!.next;
    return node;
  }
  
  peek(): Vertex | null {
    return this.head;
  }
}

/** 3.1
Three in One: Describe how you could use a
single array to implement three stacks.

Questions:
Do you know the max length of the three stacks?
  -make an array with length 3*longestStackLength
  -within the stack, record the array index of the head of the stack

Hints: #2, #12, #38, #58
*/