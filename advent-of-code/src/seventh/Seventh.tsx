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
      const newDir = new TTNode(
        `${currDir.val}${commands[i].slice(4)}`,
        currDir,
      );
      currDir.childDirs.push(newDir);
      fileTree.dirs[newDir.val] = newDir;
    } else if (commands[i] === "$ cd .." && currDir.parent) {
      currDir = currDir.parent;
    } else if (commands[i].startsWith("$ cd ")) {
      currDir = fileTree.dirs[`${currDir.val}${commands[i].slice(5)}`];
    } else {
      const fileSize = Number(commands[i].split(" ")[0]);
      currDir.fileSizes.push(fileSize);
      currDir.totalSize += fileSize;
      fileTree.size += fileSize;
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

// this function is for part 2
function calcSizes(currNode: TTNode, dirs: number[] = []): number {
  let sum = currNode.fileSizes.reduce((x: number, y: number) => x + y, 0);
  for (const childDir of currNode.childDirs) {
    sum += calcSizes(childDir, dirs);
  }
  dirs.push(sum);
  return sum;
}

export default function Seventh(): JSX.Element {
  const fileTree = buildFileTree();
  const smallDirs: number[] = [];
  calcSum(fileTree.root, smallDirs);
  const sum = smallDirs.reduce((x: number, y: number) => x + y, 0);

  // part 2
  const allDirs: number[] = [];
  calcSizes(fileTree.root, allDirs);
  const minDeleteAmt = Math.abs(70000000 - fileTree.size - 30000000);
  let delDirSize = Infinity;
  for (const size of allDirs) {
    if (size >= minDeleteAmt) delDirSize = Math.min(size, delDirSize);
  }

  return (
    <div className='Seventh card-body'>
      <h5 className='card-title'>December 7th: No Space Left On Device</h5>
      <p className='card-text'>
        Sum of the total sizes of all directories with a total size of at most
        100,000: {sum}.
      </p>
      <p className='card-text'>
        The size of the directory to delete: {delDirSize}.
      </p>
    </div>
  );
}
