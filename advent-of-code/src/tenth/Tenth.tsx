import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { instructions } from "./tenth-input";

export default function Tenth(): JSX.Element {
  const pixels: string[] = [];
  const cycles: Record<string, number> = {
    20: 0,
    60: 0,
    100: 0,
    140: 0,
    180: 0,
    220: 0,
  };
  const cycle = [0];
  let x = 1;

  function cycleUp(cycle: number[], x: number) {
    pixels.push((Math.abs((cycle[0] % 40) - x) <= 1) ? " # " : " . ")
    cycle[0]++;
    if (cycles[cycle[0]] === 0) cycles[cycle[0]] = cycle[0] * x;
    x = 1;
  }

  for (const instruction of instructions) {
    if (instruction === "noop") {
      cycleUp(cycle, x);
    } else {
      cycleUp(cycle, x);
      cycleUp(cycle, x);
      x += Number(instruction.split(" ")[1]);
    }
  }

  const signalsSum = Object.values(cycles).reduce((a, b) => a + b);
  const display: string[][] = [];
  let i = 0;
  while (i < pixels.length) {
    display.push(pixels.slice(i,i+40));
    i+=40;
  }

  return (
    <div className='Tenth card-body'>
      <h5 className='card-title'>December 10th: Cathode Ray Tube</h5>
      <p className='card-text'>The sum of the six signals is: {signalsSum}.</p>
      <p className='card-text'>CRT Image:</p>
      {display.map((row,idx) =>(
        <p key={idx} className="font-monospace">{row}</p>
      ))}
    </div>
  );
}
