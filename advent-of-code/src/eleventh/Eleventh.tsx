import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { notes } from "./eleventh-input";

interface MonkeyItemNode {
  val: number;
  next: MonkeyItemNode | null;
  prev: MonkeyItemNode | null;
}

class MonkeyItemNode {
  constructor(
    val: number,
    next: MonkeyItemNode | null = null,
    prev: MonkeyItemNode | null = null,
  ) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

interface MonkeyItemQueue {
  head: MonkeyItemNode | null;
  tail: MonkeyItemNode | null;
}

class MonkeyItemQueue {
  constructor(
    head: MonkeyItemNode | null = null,
    tail: MonkeyItemNode | null = null,
  ) {
    this.head = head;
    this.tail = tail;
  }

  enqueue(node: MonkeyItemNode): MonkeyItemNode {
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    return node;
  }

  dequeue(): MonkeyItemNode | null {
    const node = this.head;
    this.head = this.head?.next || null;
    return node;
  }
}

interface Operation {
  (old: MonkeyItemNode): void;
}
interface Test {
  (item: MonkeyItemNode): void;
}

interface Monkey {
  items: MonkeyItemQueue;
  operation: Operation;
  test: Test;
  inspectionCount: number;
}

class Monkey {
  constructor() {
    this.items = new MonkeyItemQueue();
    this.inspectionCount = 0;
  }
}

function generateInput(monkeys: Monkey[] = []): Monkey[] {
  const lines = notes.split(/\n/);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === "") i++;
    const monkey = new Monkey();
    monkeys.push(monkey);
    i++;
    const items = lines[i]
      .replace("Starting items: ", "")
      .replace(/,/g, "")
      .replace(/  +/g, "")
      .split(" ");
    for (const item of items) {
      monkey.items.enqueue(new MonkeyItemNode(Number(item)));
    }
    i++;
    const oldOrValue = lines[i].split(" ")[lines[i].length - 1];
    const opLine = lines[i].split(" ");
    const operand = opLine[opLine.length - 2];
    if (oldOrValue !== "old") {
      const val = Number(lines[i].split(" ")[lines[i].length - 1]);
      if (operand === "+") {
        monkey.operation = (old: MonkeyItemNode) => {
          old.val = Math.floor((old.val + val) / 3);
        };
      } else if (operand === "*") {
        monkey.operation = (old: MonkeyItemNode) => {
          old.val = Math.floor((old.val * val ) / 3);
        };
      }
    } else {
      if (operand === "+") {
        monkey.operation = (old: MonkeyItemNode) => {
          old.val = Math.floor((old.val + old.val) / 3);
        };
      } else if (operand === "*") {
        monkey.operation = (old: MonkeyItemNode) => {
          old.val = Math.floor((old.val * old.val) / 3);
        };
      }
    }
    i++;
    const divisor = Number(lines[i].split(" ")[lines[i].length - 1]);
    i++;
    const trueMonkey = Number(lines[i].split(" ")[lines[i].length - 1]);
    i++;
    const falseMonkey = Number(lines[i].split(" ")[lines[i].length - 1]);
    monkey.test = (item: MonkeyItemNode) => {
      monkey.items.dequeue();
      if (item.val % Number(`${divisor}`)) {
        monkeys[trueMonkey].items.enqueue(item);
      } else {
        monkeys[falseMonkey].items.enqueue(item);
      }
    };
  }
  return monkeys;
}

export default function Eleventh(): JSX.Element {
  const monkeys: Monkey[] = generateInput();
  let i = 0;
  while (i < 20) {
    for (const monkey of monkeys) {
      let item = monkey.items.head;
      while (item) {
        const nextItem = item.next;
        monkey.operation(item);

        console.log("hi", monkey);
        monkey.test(item);
        monkey.inspectionCount++;
        item = nextItem;
      }
    }
    i++;
  }

  const inspections: number[] = [];
  for (const monkey of monkeys) {
    inspections.push(monkey.inspectionCount);
  }

  inspections.sort();
  const monkeyBusiness = inspections[0] * inspections[1];

  return (
    <div className='Eleventh card-body'>
      <h5 className='card-title'>December 11th: Monkey in the Middle</h5>
      <p className='card-text'>Monkey business level: {monkeyBusiness}.</p>
      <p className='card-text'>Describe: {}.</p>
    </div>
  );
}
