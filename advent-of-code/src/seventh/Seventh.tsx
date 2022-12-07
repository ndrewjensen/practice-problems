import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TerminalTree, TTNode, commands } from "./seventh-input";

export default function Seventh(): JSX.Element {
  const fileTree = new TerminalTree(new TTNode("/"))
  const currDir = fileTree.root;
  let i = 0;
  while (i < commands.length) {
    if (commands[i] === "$ ls") i++;
    if (commands[i].startsWith("dir")) {
      const newDir = new TTNode(commands[i].slice(4))
      currDir.childDirs.push(newDir);
      fileTree
    }
    
  }
  return (
    <div className='Seventh card-body'>
      <h5 className='card-title'>December 7th: No Space Left On Device</h5>
      <p className='card-text'>
        Sum of the total sizes of all directories with a total size of at most
        100,000: {}.
      </p>
      <p className='card-text'>Describe: {}.</p>
    </div>
  );
}
