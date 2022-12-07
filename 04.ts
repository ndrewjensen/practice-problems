namespace fourpointone {
  interface GNode {
    val: string | number;
    adj: GNode[];
    qnext: GNode | null;
  }

  class GNode {
    constructor(val: string, adj: GNode[] = []) {
      this.val = val;
      this.adj = adj;
      this.qnext = null;
    }
  }

  interface GQueue {
    head: GNode | null;
    tail: GNode | null;
    length: number;
  }

  class GQueue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    isEmpty(): boolean {
      return this.length === 0;
    }

    add(node: GNode): GNode {
      if (!this.head) {
        this.head = node;
      } else {
        this.tail!.qnext = node;
      }
      this.tail = node;
      this.length++;
      return node;
    }

    remove(): GNode | null {
      if (this.isEmpty()) return null;
      let node: GNode = this.head!;
      this.head = this.head!.qnext;
      node.qnext = null;
      this.length--;
      return node;
    }

    peek(): GNode | null {
      return this.head;
    }
  }

  interface Graph {
    nodes: GNode[];
  }

  class Graph {
    constructor(nodes: GNode[]) {
      this.nodes = nodes;
    }

    add(node: GNode): void {
      this.nodes.push(node);
    }

    remove(node: GNode): void {
      const index = this.nodes.indexOf(node);
      if (index !== -1) this.nodes.splice(index, 1);
    }

    /** 4.1
  Route Between Nodes: Given a directed graph and two nodes (S and E),
  design an algorithm to find out whether there is a route from S to E.

  Use BFS. Queue
  BCR is O(n) time because may need to visit every node.
  Not interested in what the path is, just whether it exists.
  Don't need to iterate over nodes, just begin at node S and iterate through
  queue until E is reached or queue is empty.

  Tests;
  S === E => true
  S has a route to E => true
  S and E exist in Graph with no route => false

  */

    checkRouteExists(S: GNode, E: GNode): boolean {
      const queue = new GQueue();
      let checked = new Set();
      queue.add(S);
      let routeExists = false;
      while (!queue.isEmpty()) {
        let current = queue.remove();
        checked.add(current);
        if (current === E) routeExists = true;
        for (let sibling of current!.adj) {
          if (!checked.has(sibling)) queue.add(sibling);
        }
      }
      return routeExists;
    }
  }

  /** 4.1 Test */
  //trivial
  let S = new GNode("S1");
  let E = new GNode("E1");
  let G1 = new Graph([S, E]);
  //G1.checkRouteExists(S,S) => true
  //G1.checkRouteExists(S,E) => false

  //simlple, adjacent nodes
  let S2 = new GNode("S1");
  let E2 = new GNode("E1");
  let G2 = new Graph([S2, E2]);
  S2.adj.push(E2);
  //G2.checkRouteExists(S2,E2) => true
  //G2.checkRouteExists(E2,S2) => false

  //multiple degrees of relationship
  let S3 = new GNode("S1");
  let A3 = new GNode("A1");
  let B3 = new GNode("B1");
  let C3 = new GNode("C1");
  let D3 = new GNode("D1");
  let E3 = new GNode("E1");
  let F3 = new GNode("F1");

  let G3 = new Graph([S3, A3, B3, C3, D3, F3, E3]);
  S3.adj.push(A3, B3);
  A3.adj.push(C3, D3);
  C3.adj.push(B3, A3);
  D3.adj.push(S3, F3);
  F3.adj.push(E3);

  //G3.checkRouteExists(S3,E3) => true
  //G3.checkRouteExists(A3,E3) => true
  //G3.checkRouteExists(B3,E3) => false
}

/** 4.2
 Minimal Tree: Given a sorted (increasing order) array with unique integer
elements, write an algorithm to create a binary search tree with minimal
height.

BCR is O(n) because you have to visit every element in the array.
adding from left or right would make a completely unbalanced tree, so how
about middle out?

input: sorted array of unique integer elements
output: BST with minimal height

example: [1,2,3,4,5,6,7,8,9] =>
          5
      3       7
    2     4  6   8
  1                9

*/

interface BSTNode {
  val: number;
  left: BSTNode | null;
  right: BSTNode | null;
  parent: BSTNode | null;
}

class BSTNode {
  constructor(val: number, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

interface BST {
  root: BSTNode | null;
}

class BST {
  constructor(root: BSTNode | null = null) {
    this.root = root;
  }

  add(addNode: BSTNode, currNode: BSTNode | null = this.root): void {
    if (!currNode) {
      this.root = addNode;
      addNode.parent = null;
    } else if (addNode.val < currNode.val) {
      if (currNode.left) {
        this.add(addNode, currNode.left);
      } else {
        currNode.left = addNode;
        addNode.parent = currNode;
      }
    } else {
      if (currNode.right) {
        this.add(addNode, currNode.right);
      } else {
        currNode.right = addNode;
        addNode.parent = currNode;
      }
    }
  }
}

function minimalBST(
  ints: number[],
  tree: BST = new BST(),
  currNode: BSTNode
): BST {
  if (ints.length === 1) {
    tree.add(new BSTNode(ints[0]));
    return tree;
  } else if (ints.length === 0) {
    return tree;
  } else {
    let length = ints.length;
    let node = new BSTNode(ints[Math.floor(length / 2)]);
    tree.add(node, currNode);
    minimalBST(ints.slice(0, Math.floor(length / 2)), tree, node);
    if (length % 2 === 1) {
      minimalBST(ints.slice(Math.ceil(length / 2), length), tree, node);
    } else {
      minimalBST(ints.slice(Math.ceil(length / 2) + 1, length), tree, node);
    }
  }

  return tree;
}

/* 
interface QNode {
  val: BSTNode;
  next: QNode | null;
}

class QNode {
  constructor(val: BSTNode) {
    this.val = val;
    this.next = null;
  }
}

interface BSTQueue {
  head: QNode | null;
  tail: QNode | null;
  length: number;
}

class BSTQueue {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  add(node: QNode): QNode {
    if (!this.head) {
      this.head = node;
    } else {
      this.tail!.next = node
    }
    this.length ++;
    this.tail = node;
    return node
  }

  remove(): QNode | null {
    if (this.isEmpty()) return null;
    let node: QNode = this.head!;
    this.head = this.head!.next;
    this.length --;
    return node;
  }

  peek(): QNode | null {
    return this.head;
  }
}
 */

/** 4.3
List of Depths: Given a binary tree, design an algorithm which creates a linked
list of all the nodes at each depth (e.g., if you have a tree with depth D,
you'll have D linked lists).

this needs to be breadth first. by using a queue, the 

declare an array to store the queue
push null, then push self.
i = 1
while i <= queue.length
  if i is null, i++
  else if i-1 is null, push null, then push non-null children
  else push non-null children
  i++

declare an array to store the lists (in the args?)

loop through queue while i< queue.length
  if i is null
    let list be new ll
    push into array
    i++ 
  while i isn't null
    add each value to the list
    i++

return the array
 */

interface LLNode {
  val: BSTNode;
  next: LLNode | null;
}

class LLNode {
  constructor(val: BSTNode) {
    this.val = val;
    this.next = null;
  }
}

function listDepths(bt: BST): LLNode[] {
  if (!bt.root) return [];
  let queue: (null | LLNode)[] = [null, new LLNode(bt.root!)];
  let lists: LLNode[] = [];
  let i: number = 1;

  while (i <= queue.length) {
    if (!queue[i]) {
      i++;
      continue;
    }
    if (!queue[i - 1]) queue.push(null);
    if (queue[i]!.val.left) queue.push(new LLNode(queue[i]!.val.left!));
    if (queue[i]!.val.right) queue.push(new LLNode(queue[i]!.val.right!));
    i++;
  }

  i = 1;
  while (i < queue.length) {
    if (!queue[i - 1]) {
      lists.push(queue[i]!);
    } else {
      queue[i - 1]!.next = queue[i];
    }
    i++;
  }
  return lists;
}

/** 4.4
Check Balanced: Implement a function to check if a binary tree is balanced. For
the purposes of this question, a balanced tree is defined to be a tree such that
the heights of the two subtrees of any node never differ by more than one.

to check depth, should recurse, record a min depth and a max depth, 
return false if max - min is greater than 1

arguments will need to be:
current node - which defaults to root
current depth - which increments with each recursion and decrements with each 
  completion
min depth
max depth
each recursion returns max depth - min depth <2

*/

function isBalanced(
  node: BSTNode | null,
  depth: number = 0,
): boolean {
  if (!node) return true
  let leftDepth = checkDepths(node.left, depth +1);
  let rightDepth = checkDepths(node.right,depth +1)
  if (Math.abs(leftDepth - rightDepth) > 1) {
      return false;
  } else {
      if (!isBalanced(node.left)) return false
      if (!isBalanced(node.right)) return false
  }
  return true
}

function checkDepths(node: BSTNode | null, depth:number = 0):number {
    if (!node) return depth -1;
    return (Math.max(
        node.left && checkDepths(node.left, depth + 1) || depth,
        node.right && checkDepths(node.right, depth + 1) || depth)
        )
}
//https://leetcode.com/problems/balanced-binary-tree/submissions/855755839/

/** 4.5
Validate BST: Implement a function to check if a binary tree is a binary search
tree.

BCR O(n), must visit every node on the tree.
DFS (recursive) check that every left is less than current, and every right is
greater than current.

input: tree, node
output: boolean

//don't pass in null nodes, check truthiness first
//check that tree root is truthy.

on each node, if left exists
  if left is greater than current, return false
  recurse on left
on each node, if right exists
  if right is less than current, return false
  recurse on right

return true

 */

function isBST(
  tree: BST,
  node: BSTNode | null = tree.root,
  min: number | null = null,
  max: number | null = null
): boolean {
  if (!node) return true;
  if (node.left) {
    max = Math.max(max!, node.val);
    if (node.left.val > node.val) return false;
    if (min && node.left.val < min) return false;
    if (!isBST(tree, node.left, min, max)) return false;
  }
  if (node.val === max) max = null;
  if (node.val === min) min = null;

  if (node.right) {
    min = Math.min(min || Infinity, node.val);
    if (node.right.val < node.val) return false;
    if (max && node.right.val > max) return false;
    if (!isBST(tree, node.right, min, max)) return false;
  }
  return true;
}

/**4.6
Successor: Witte an algorithm to find the "next" node (i.e, in-order successor)
of a given node in a binary search tree. You may assume that each node has a
link to its parent.

 

if the node is a right leaf node, 


return null
 */

function findSuccessor(node: BSTNode): BSTNode | null {
  if (!node) return null;

  //if the node is a right leaf node, move up to first non right-child parent
  if (!node.right && node.parent && node.parent.right === node) {
    node = node.parent;
    while (node.parent && node.parent.right === node) {
      node = node.parent;
    }
    return node.parent
  }

  //if the node is a left node, with no right-child, return it's parent.
  if (node.parent && !node.right && node === node.parent.left)
  return node.parent;
  
  //if the node is a parent, return the leftmost node of its right subtree.
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  

  return null;
}

/** 4.7
Build Order: You are given a list of projects and a list of dependencies (which 
is a list of pairs of projects, where the second project is dependent on the
first project). All of a project's dependencies must be built before the project
is. Find a build order that will allow the projects to be built. If there is no
valid build order, return an error.

EXAMPLE
Input:
projects: a, b, c, d, e, f
dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
Output: f, e, a, b, d, c

-the dependencies have the properties of a graph, but I think that a stack will
  be the most effective. 
-val:string, dependencies: node[], - each node will be a map key as proj name
  and value as dependencies
-take input list, make set of nodes
-iterate through dependency tuples, updating the nodes with their dependencies
-remove first node from set, push onto stack
-iterate while set.size is not 0
  -remove node from set and add to queue
  -iterate through queue - while queue is not empty
    -if top of stack has dependencies
      if dependency is still in stack
        remove from set
        add  to stack
        continue
      else return error
    -else pop them off stack and push val into output array

*/
