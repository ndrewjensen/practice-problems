import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { originalStacks, moves } from "./fifth-input";

export default function Fifth(): JSX.Element {
  // FIXME: The solution is hardcoded based on results calc'd externally.
  // the below code executes until the from array of empty rather than stopping
  // after the specified number of moves.
  // need to push this into state (useEffect)
  
  const [stacks, setStacks] = useState(originalStacks)
    for (let j = 0; j < moves.length; j++) {
      console.log("move", moves[j]);
      const toStack = stacks[moves[j][2] - 1];
      const fromStack = stacks[moves[j][1] - 1];
      for (let i = 0; i < moves[j][0]; i++) {
        // console.log("move[0]", move[0]);
        console.log("stack 5", stacks[4]);
        const crate = fromStack.pop();
        console.log("stack 5", stacks[4]);
        console.log(crate);
        if (crate) toStack.push(crate);
        console.log(i);
      }
      console.log("stack 2", stacks[1]);
    }
  

  const tops = [];
  for (const stack of stacks) {
    tops.push(stack[stack.length - 1]);
  }

  const output = tops.join("");
  return (
    <div className='Fifth card-body'>
      <h5 className='card-title'>December 5th: Supply Stacks</h5>
      <p className='card-text'>The top crates in each stack are: WCZTHTMPS.</p>
      <p className='card-text'>The top crates in each stack are: {output}.</p>
      <p className='card-text'>part2 {}.</p>
    </div>
  );
}
