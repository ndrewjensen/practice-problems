import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { originalStacks, moves } from "./fifth-input";

export default function Fifth(): JSX.Element {
  // Part 1:
  const stacks = JSON.parse(JSON.stringify(originalStacks));
  for (const move of moves) {
    const toStack = stacks[move[2] - 1];
    const fromStack = stacks[move[1] - 1];
    for (let i = 0; i < move[0]; i++) {
      const crate = fromStack.pop();
      if (crate) toStack.push(crate);
    }
  }

  const tops = [];
  for (const stack of stacks) {
    tops.push(stack[stack.length - 1]);
  }
  const output1 = tops.join("");

  // Part 2:
  const stacks2 = JSON.parse(JSON.stringify(originalStacks));
  for (const move of moves) {
    const toStack = stacks2[move[2] - 1];
    const fromStack = stacks2[move[1] - 1];
    const crates = fromStack.splice(fromStack.length - move[0], move[0]);
    toStack.push(...crates);
  }
  const tops2 = [];
  for (const stack of stacks2) {
    tops2.push(stack[stack.length - 1]);
  }
  const output2 = tops2.join("");
  return (
    <div className='Fifth card-body'>
      <h5 className='card-title'>December 5th: Supply Stacks</h5>
      <p className='card-text'>The top crates in each stack are: {output1}.</p>
      <p className='card-text'>
        The revised top crates in each stack are: {output2}.
      </p>
    </div>
  );
}
