/** SNode Class
 * for use in Stacks and Queues, all methods stored in stacks and queues
 */

interface SNode {
  val: number;
  next: SNode | null;
  localMin: SNode | null;
}

class SNode {
  constructor(val: number, next: SNode | null = null) {
    this.val = val;
    this.next = next;
    this.localMin = null;
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
  head: SNode | null;
  min: SNode | null;
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

  pop(): SNode | null {
    //update head and decrement length
    if (this.isEmpty()) return null;
    let node = this.head;
    this.head = this.head!.next;
    this.length--;

    //update min
    if (this.isEmpty()) this.min = null;
    if (this.min === node) this.min = this.head!.localMin;
    return node;
  }

  peek(): SNode | null {
    return this.head;
  }

  push(node: SNode): SNode {
    node.next = this.head;
    this.head = node;
    if (!this.min || node.val < this.min.val) {
      this.min = node;
      node.localMin = node;
    } else {
      node.localMin = this.min;
    }
    this.length++;
    return node;
  }

  compareAndSwap(node: SNode): SNode | null {
    if (!node.next) return node;
    if (node.val <= node.next.val) return node.next;
    if ((this.head = node)) {
      this.head = node.next;
    }
    [node.val, node.next.val] = [node.next.val, node.val];
    return node.next;
  }

  sortStack():none {}
}

/** QNode Class
 * for use in Stacks and Queues, all methods stored in stacks and queues
 */

interface QNode {
  val: number | string;
  next: QNode | null;
}

class QNode {
  constructor(val: number | string, next: QNode | null = null) {
    this.val = val;
    this.next = next;
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
  head: QNode | null;
  tail: QNode | null;
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

  add(node: QNode): QNode {
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

  remove(): QNode | null {
    if (this.isEmpty()) return null;
    let node: QNode = this.head!;
    this.head = this.head!.next;
    return node;
  }

  peek(): QNode | null {
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

/** 3.2
Stack Min: How would you design a stack which, in addition to push and pop,
has a function min which returns the minimum element? Push, pop and min should
all operate in 0(1) time.

Questions:
By minimum do you mean that the values will be numerical? Or to keep track of
the bottom of the stack?

So we can add a min property to the class,
modify the push method on the stack to check and update the min with each add.
that limits the class to integers only.
Also, when the min is popped, we would have to search the entire stack for a new
min, which would be O(n), but since this wouldn't happen often, it would
amortize to O(n).

Much more complicated, but we could consider adding a nextMin prop to the
Vertex class, we would have to O(n) search the stack when pushing, but could
remove in O(1), this would essentially be a stack and a sorted list in one.

Better solution, tell each SNode what the min is at the SNode level. 

Hints: #27, #59, #78

Implemented in SNode and Stack above.

 */

// const minTest = new Stack();
// minTest.push(new SNode(5));
// minTest.push(new SNode(6));
// console.log(minTest.min!.val);
// minTest.push(new SNode(3));
// console.log(minTest.min!.val);
// minTest.push(new SNode(7));
// console.log(minTest.min!.val);
// minTest.pop();
// console.log(minTest.min!.val);
// minTest.pop();
// console.log(minTest.min!.val);

/**3.3
stack of Plates: Imagine a (literal) stack of plates. If the stack gets too
high, it might topple. Therefore, in real life, we would likely start a new
stack when the previous stack exceeds some threshold. Implement a data structure 
SetOfStacks that mimics this. Setofstacks should be composed of several stacks
and should create a new stack once the previous one exceeds capacity,
Setofstacks.push () and setofstacks.pop() should behave identically to a single
stack (that is, pop() should return the same values as it would if there were
just a single stack).

FOLLOW UP
Implement a function popAt (int Index) which performs a pop operation on a
specific sub-stack.

Hints: #64, #81


I want to use my existing Stack class. So I'll implement a super stack over the
top, whose nodes' values are Stack instances. These super nodes will track the
next stack and the index of the stack.

*/

interface SuperSNode {
  val: Stack;
  index: number;
  next: SuperSNode;
}

class SuperSNode {
  constructor(val: Stack) {
    this.val = val;
    this.index = 0;
  }
}

interface SetOfStacks {
  head: SuperSNode | null;
  length: number;
  capacity: number;
}

class SetOfStacks {
  constructor(capacity: number = 2) {
    this.head = null;
    this.length = 0;
    // need some error handling on the capacity, it must be a natural number,
    // preferrably greater than 1.
    this.capacity = capacity;
  }

  push(node: SNode): SNode {
    if (!this.head) {
      this.head = new SuperSNode(new Stack());
      this.head.index = 0;
      this.length++;
      return this.head.val.push(node);
    } else if (this.head.val.length >= this.capacity) {
      let superNode = new SuperSNode(new Stack());
      superNode.next = this.head;
      this.head = superNode;
      this.length++;
      superNode.index = superNode.next.index + 1;
      return superNode.val.push(node);
    } else {
      return this.head.val.push(node);
    }
  }

  pop(): SNode | null {
    if (!this.head) return null;
    if (this.head.val.length === 1) {
      const node = this.head.val.pop();
      this.head = this.head.next;
      this.length--;
      return node;
    } else {
      return this.head.val.pop();
    }
  }

  /* Since I used a linked list instead of an array actual array to implement
  this, I would need to iterate through the SuperSNodes. Or reimplement, moving
  the index from the SuperSNodes up to the SetOfStacks, basically using it as a
  hash table. then, when a pop emptied a stack, I could iterate through the 
  SNODES pulling back the value(stack) of each onto the previous index.
  popAt(index: number): null | SNode {
    if ()
  }
 */
}

/** 3.5
Sort Stack: Write a program to sort a stack such that the smallest items are on
the top. You can use an additional temporary stack, but you may not copy the
elements into any other data structure (such as an array). The stack supports
the following operations: push, pop, peek, and isEmpty.

Hints: #15, #32, #43

*/

/** 3.6
Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a
strictly"first in, first out" basis. People must adopt either the "oldest"
(based on arrival time) of all animals at the shelter, or they can select
whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). They cannot select which specific animal they would like. Create the
data structures to maintain this system and implement operations such as
enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in
LinkedList data structure.

Hints: #22, #56, #63

Node Class:
dogOrCat: 
val
next

Shelter Class:
enqueue: add an animal to the end


*/


interface ANode {
  species: string;
  val: string;
  next: ANode | null;
}

interface Shelter {
  head: ANode | null;
  tail: ANode | null;
}

class ANode {
  constructor(val:string, species:string) {
    this.val = val;
    this.species = species;
    this.next = null;
  }
}
class Shelter {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(pet: ANode):void {
    if (!this.head) {
      this.head = pet;
      this.tail = pet;
    } else {
      this.tail!.next = pet;
      this.tail = pet;
    }
  }

  dequeueAny(): ANode | null{
    if (!this.head) return null;
    const pet = this.head;
    this.head = this.head.next;
    return pet;
  }
  
  dequeueDog(): ANode | null {
    return this.dequeuePet("Dog");
  }
  
  dequeueCat(): ANode | null {
    return this.dequeuePet("Cat");
  }

  dequeuePet(species:string): ANode | null {
    if (!this.head) return null;
    let pet = this.head;
    if (pet.species = species) {
      return this.dequeueAny();
    }
    let prev = pet;  
    while (pet.next) {
      pet = pet.next;
      if (pet.species = species) {
        prev.next = pet.next;
        return pet
      }
      prev = pet;
    }
    return null;
  }
}
