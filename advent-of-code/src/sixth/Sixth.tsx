import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { datastream } from "./sixth-input";

export default function Sixth(): JSX.Element {
  // Part 1:
  const window: Record<string, number> = {};
  window.count = 0;
  let startPacketMarker = 0;
  let i = 0;
  for (i; i < datastream.length; i++) {
    if (i > 3) {
      if (window[datastream[i-4]] === 1){
        delete window[datastream[i-4]];
        window.count --;
      } else {
        window[datastream[i-4]]--;
      }
    }
    if (!window[datastream[i]]) {
      window[datastream[i]] = 1;
      window.count ++
    } else {
      window[datastream[i]] ++;
    }
    if (window.count === 4 && startPacketMarker === 0) startPacketMarker = i + 1;
  }
  
  // Part 2:
  let startMessageMarker = 0;
  const window2: Record<string, number> = {};
  window2.count = 0;
  for (i = 0; i < datastream.length; i++) {
    if (i > 13) {
      if (window2[datastream[i-14]] === 1){
        delete window2[datastream[i-14]];
        window2.count --;
      } else {
        window2[datastream[i-14]]--;
      }
    }
    if (!window2[datastream[i]]) {
      window2[datastream[i]] = 1;
      window2.count ++
    } else {
      window2[datastream[i]] ++;
    }
    if (window2.count === 14 && startMessageMarker === 0) startMessageMarker = i + 1;
  }
  
  return (
    <div className='Sixth card-body'>
      <h5 className='card-title'>December 6th: Tuning Trouble</h5>
      <p className='card-text'>
        The number of characters that need to be processed before the first
        start-of-packet marker is detected: {startPacketMarker}.
      </p>
      <p className='card-text'>The number of characters that need to be processed before the first
        start-of-message marker is detected: {startMessageMarker}.</p>
    </div>
  );
}
