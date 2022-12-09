import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TerminalTree, TTNode, terminalOutputs } from "./seventh-input";

function buildFileTree(commands: string[] = terminalOutputs): TerminalTree {
  const fileTree = new TerminalTree(new TTNode("/"));
  let currDir = fileTree.root;
  let i = 1;
  while (i < commands.length) {
    if (commands[i] === "$ cd /" && currDir === fileTree.root) i++;
    if (commands[i] === "$ ls") i++;
    // if (currDir === fileTree.root) console.log("in root");
    if (commands[i].startsWith("dir")) {
      const newDir = new TTNode(`${currDir.val}${commands[i].slice(4)}`,currDir);
      currDir.childDirs.push(newDir);
      fileTree.dirs[newDir.val] = newDir;
      console.log("addingDir",currDir);
    } else if (commands[i] === "$ cd .." && currDir.parent) {
      currDir = currDir.parent;
      console.log("moving to parent",currDir);
    } else if (commands[i].startsWith("$ cd ")) {
      currDir = fileTree.dirs[`${currDir.val}${commands[i].slice(5)}`];
      console.log("move into child",currDir);
    } else {
      currDir.fileSizes.push(Number(commands[i].split(" ")[0]));
      console.log("add filesize",currDir);
    }
    i++;
  }
  return fileTree;
}

function calcSum(currNode: TTNode, smallDirs: number[] = []): number {
  let sum = currNode.fileSizes.reduce((x: number, y: number) => x + y, 0);
  for (const childDir of currNode.childDirs) {
    sum += calcSum(childDir, smallDirs);
  }
  sum <= 100000 && smallDirs.push(sum);
  return sum;
}

export default function Seventh(): JSX.Element {
  const fileTree = buildFileTree();
  const smallDirs: number[] = [];
  calcSum(fileTree.root, smallDirs);
  const sum = smallDirs.reduce((x: number, y: number) => x + y, 0);

  return (
    <div className='Seventh card-body'>
      <h5 className='card-title'>December 7th: No Space Left On Device</h5>
      <p className='card-text'>
        Sum of the total sizes of all directories with a total size of at most
        100,000: {sum}.
      </p>
      <p className='card-text'>Describe: {}.</p>
    </div>
  );
}
