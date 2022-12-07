import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { priorities, rucksackContents } from "./third-input";

export default function Third(): JSX.Element {
  let prioritiesSum = 0;
  for (const contents of rucksackContents) {
    const itemsCount = contents.length;
    const contentsSet = new Set(contents.split("").slice(0, itemsCount / 2));
    for (let i = itemsCount / 2; i < itemsCount; i++) {
      if (contentsSet.has(contents[i])) {
        prioritiesSum += priorities[contents[i]];
        break;
      }
    }
  }
  let badgePrioritySum = 0;
  let i = 0;
  while (i < rucksackContents.length) {
    const contentsMap:Record<string,boolean> = {}
    for (const item of rucksackContents[i]) {
      contentsMap[item] = false;
    }
    i++;
    for (const item of rucksackContents[i]) {
      if (contentsMap[item] === false) contentsMap[item] = true;
    }
    i++;
    for (const item of rucksackContents[i]) {
      if (contentsMap[item] === true) {
        badgePrioritySum += priorities[item];
        break;
      }
    
    }
    i++
    
    
  }
  return (
    <div className='Third card-body'>
      <h5 className='card-title'>December 3rd: Rucksack Reorganization </h5>
      <p className='card-text'>The sum of the priorities is {prioritiesSum}.</p>
      <p className='card-text'>
        The sum of the priorities of the elf group badges is {badgePrioritySum}.
      </p>
    </div>
  );
}
