import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { games } from "./second-input";

export default function Second():JSX.Element {
  let score = 0;
  let score2 = 0;
  for (const game of games){
    if (game[0] === "A" && game[1] === "X") {
      score += 4;
      score2 += 3;
    } 
    if (game[0] === "A" && game[1] === "Y") {
      score += 8;
      score2 += 4;
    } 
    if (game[0] === "A" && game[1] === "Z") {
      score += 3;
      score2 += 8;
    } 
    if (game[0] === "B" && game[1] === "X") {
      score += 1;
      score2 += 1;
    } 
    if (game[0] === "B" && game[1] === "Y") {
      score += 5;
      score2 += 5;
    } 
    if (game[0] === "B" && game[1] === "Z") {
      score += 9;
      score2 += 9;
    } 
    if (game[0] === "C" && game[1] === "X") {
      score += 7;
      score2 += 2;
    } 
    if (game[0] === "C" && game[1] === "Y") {
      score += 2;
      score2 += 6;
    } 
    if (game[0] === "C" && game[1] === "Z") {
      score += 6;
      score2 += 7;
    } 
    
  }

  return (
    <div className='Second card-body'>
      <h5 className='card-title'>December 2nd: Rock Paper Scissors </h5>
      <p className="card-text">Part 1: My RPS score is: {score}</p>
      <p className="card-text">Part 2: My new RPS score is: {score2}</p>
      
    </div>
  );
}
