import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ranges } from "./fourth-input";

export default function Fourth(): JSX.Element {
  let containedCount = 0;
  let overlapCount = 0;
  for (let i = 0; i < ranges.length; i++) {
    if ((ranges[i][0][0] <= ranges[i][1][0] && 
        ranges[i][0][1] >= ranges[i][1][1]) ||
        (ranges[i][1][0] <= ranges[i][0][0] && 
          ranges[i][1][1] >= ranges[i][0][1])
        ) {
            containedCount ++;
        }
    if ((ranges[i][1][0] >= ranges[i][0][0] && ranges[i][1][0] <= ranges[i][0][1]) ||
        (ranges[i][1][1] >= ranges[i][0][0] && ranges[i][1][1] <= ranges[i][0][1]) ||
        (ranges[i][0][0] >= ranges[i][1][0] && ranges[i][0][0] <= ranges[i][1][1]) ||
        (ranges[i][0][1] >= ranges[i][1][0] && ranges[i][0][1] <= ranges[i][1][1])
        ) {
            overlapCount ++;
        }
  }
  return (
    <div className='Fourth card-body'>
      <h5 className='card-title'>December 4th: Camp Cleanup</h5>
      <p className='card-text'>
        The count of assignment pairs in which one range fully contains the
        other is: {containedCount}.
      </p>
      <p className='card-text'>
        The count of the assignment pairs in which the ranges overlap is {overlapCount}.
      </p>
    </div>
  );
}
