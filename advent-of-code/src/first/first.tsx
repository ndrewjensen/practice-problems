import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { input } from "./first-input";

function updateTopThree(nums: number[] = [0, 0, 0], addNum: number) {
  if (addNum > nums[0]) {
    nums.unshift(addNum);
    nums.pop();
  } else if (addNum > nums[1]) {
    [nums[1], nums[2]] = [addNum, nums[1]];
  } else {
    nums[2] = addNum;
  }
  return nums;
}
export default function First() {
  const topThreeCals: number[] = [0, 0, 0];

  let currentCal = 0;
  for (const cal of input) {
    if (!cal) {
      if (currentCal > topThreeCals[2]) {
        updateTopThree(topThreeCals, currentCal);
      }
      currentCal = 0;
    } else {
      currentCal += Number(cal);
    }
  }

  return (
    <div className='First card-body'>
      <h5 className='card-title'>December 1st: Calorie Counting</h5>
      <p className='card-text'>
        Part 1: The max calories is {topThreeCals[0]}.
      </p>
      <p className='card-text'>
        Part 2: The top three are: {topThreeCals[0]}, {topThreeCals[1]}, and{" "}
        {topThreeCals[2]} and The sum of the top three is:{" "}
        {topThreeCals[0] + topThreeCals[1] + topThreeCals[2]}.
      </p>
    </div>
  );
}
