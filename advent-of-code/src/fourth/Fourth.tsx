import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ranges } from "./fourth-input";

export default function Fourth(): JSX.Element {
  
  return (
    <div className='Fourth card-body'>
      <h5 className='card-title'>December 4th: Camp Cleanup</h5>
      <p className='card-text'>
        The count of assignment pairs in which one range fully contains the
        other is: {}.
      </p>
      <p className='card-text'>
        {/* The sum of the priorities of the elf group badges is */} {}.
      </p>
    </div>
  );
}
