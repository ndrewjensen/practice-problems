import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { grove } from "./eighth-input";

/* 
-use an object whose keys are x-y and values are boolean to track visibility
-two loops performing same task, first rows, then columns
  -need to start of first/last row to track maxs, but need to auto include them
  -pointers from left and right (top and bottom), track max height while
  iterating and mark true if greater than max height
  -each iteration will simultaneously check left and right
-iterate through object and count trues

Definitely room for a refactor here to remove duplicate code. And to optimize
to not check as many conditions on each iteration. use helper a common helper
function that takes r,l,t, or b as an input, as well as x and y, which then calls
differnt functions to do comparisons and update the object.
*/

export default function Eighth(): JSX.Element {
  // Part 1

  const visibility: Record<string, boolean> = {};
  let leftMax = "0";
  let rightMax = "0";
  let topMax = "0";
  let botMax = "0";
  const len = grove.length;

  // left/right visibility
  for (let y = 0; y < len; y++) {
    for (let x = 0; x < len; x++) {
      if (x === 0 || x === len - 1) {
        visibility[`${x}-${y}`] = true;
        leftMax = grove[y][x];
        rightMax = grove[y][len - 1 - x];
      }
      if (grove[y][x] > leftMax) {
        visibility[`${x}-${y}`] = true;
        leftMax = grove[y][x];
      }
      if (grove[y][len - 1 - x] > rightMax) {
        visibility[`${len - 1 - x}-${y}`] = true;
        rightMax = grove[y][len - 1 - x];
      }
    }
  }

  // top/bottom visibility
  for (let x = 0; x < len; x++) {
    for (let y = 0; y < len; y++) {
      if (y === 0 || y === len - 1) {
        visibility[`${x}-${y}`] = true;
        topMax = grove[y][x];
        botMax = grove[len - 1 - y][x];
      }
      if (grove[y][x] > topMax) {
        visibility[`${x}-${y}`] = true;
        topMax = grove[y][x];
      }
      if (grove[len - 1 - y][x] > botMax) {
        visibility[`${x}-${len - 1 - y}`] = true;
        botMax = grove[len - 1 - y][x];
      }
    }
  }
  const visibleTreeCount = Object.keys(visibility).length;

  // Part 2
  let bestView = 0;
  for (let y = 0; y < len; y++) {
    for (let x = 0; x < len; x++) {
      const factors: number[] = [];
      const currHeight = grove[y][x];

      // look up
      let factor = 0;
      let j = y - 1;
      while (j >= 0) {
        factor++;
        if (grove[j][x] >= currHeight) break;
        j--;
      }
      factors.push(factor);
      // look down
      j = y +1;
      factor = 0;
      while (j < len) {
        factor++;
        if (grove[j][x] >= currHeight) break;
        j++;
      }
      factors.push(factor);
      // look left
      factor = 0;
      j = x - 1;
      while (j >= 0) {
        factor++;
        if (grove[y][j] >= currHeight) break;
        j--;
      }
      factors.push(factor);
      // look right
      factor = 0;
      j = x + 1;
      while (j < len) {
        factor++;
        if (grove[y][j] >= currHeight) break;
        j++;
      }
      factors.push(factor);
      bestView = Math.max(
        factors.reduce((a: number, b: number) => a * b, 1),
        bestView,
      );
    }
  }

  return (
    <div className='Eighth card-body'>
      <h5 className='card-title'>December 8th: Treetop Tree House</h5>
      <p className='card-text'>
        (Example) Number of trees visible from outside the grove: {visibleTreeCount}.
      </p>
      <p className='card-text'>(Example) Best view score: {bestView}.</p>
      <p>This input was very large, and the code is not well optimized, so the above solutions are for the sample data set.</p>
    </div>
  );
}
