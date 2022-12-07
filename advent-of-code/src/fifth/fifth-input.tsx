export const originalStacks: string[][] = [
  ["G", "D", "V", "Z", "J", "S", "B"],
  ["Z", "S", "M", "G", "V", "P"],
  ["C", "L", "B", "S", "W", "T", "Q", "F"],
  ["H", "J", "G", "W", "M", "R", "V", "Q"],
  ["C", "L", "S", "N", "F", "M", "D"],
  ["R", "G", "C", "D"],
  ["H", "G", "T", "R", "J", "D", "S", "Q"],
  ["P", "F", "V"],
  ["D", "R", "S", "T", "J"],
];

export const moves: number[][] = [
  [3, 5, 2],
//   [3, 8, 4],
//   [7, 7, 3],
//   [14, 3, 9],
//   [8, 4, 1],
//   [1, 7, 5],
//   [2, 6, 4],
//   [4, 5, 7],
//   [1, 3, 6],
//   [3, 4, 3],
//   [1, 4, 1],
//   [5, 1, 9],
//   [1, 4, 6],
//   [4, 7, 4],
//   [15, 9, 2],
//   [7, 1, 6],
//   [3, 3, 5],
//   [1, 4, 9],
//   [2, 5, 3],
//   [2, 4, 9],
//   [4, 1, 6],
//   [1, 3, 1],
//   [1, 3, 2],
//   [4, 6, 3],
//   [24, 2, 8],
//   [4, 9, 8],
//   [1, 1, 3],
//   [2, 5, 4],
//   [1, 2, 4],
//   [19, 8, 1],
//   [5, 3, 9],
//   [8, 1, 3],
//   [3, 4, 1],
//   [6, 9, 5],
//   [2, 3, 4],
//   [1, 8, 5],
//   [2, 4, 6],
//   [11, 6, 1],
//   [8, 8, 7],
//   [1, 6, 5],
//   [13, 1, 3],
//   [1, 1, 7],
//   [2, 7, 8],
//   [5, 7, 1],
//   [2, 8, 4],
//   [3, 5, 3],
//   [11, 3, 1],
//   [2, 5, 3],
//   [2, 5, 3],
//   [2, 7, 1],
//   [7, 3, 1],
//   [1, 4, 5],
//   [1, 6, 4],
//   [3, 4, 7],
//   [3, 7, 1],
//   [6, 3, 5],
//   [1, 5, 9],
//   [4, 5, 4],
//   [2, 3, 4],
//   [8, 9, 2],
//   [5, 4, 6],
//   [1, 6, 5],
//   [1, 4, 9],
//   [39, 1, 7],
//   [7, 2, 6],
//   [1, 9, 3],
//   [1, 2, 7],
//   [1, 3, 1],
//   [5, 7, 3],
//   [4, 5, 1],
//   [19, 7, 9],
//   [1, 9, 8],
//   [1, 9, 7],
//   [5, 9, 3],
//   [6, 6, 7],
//   [1, 8, 3],
//   [4, 1, 4],
//   [23, 7, 6],
//   [1, 1, 6],
//   [21, 6, 2],
//   [3, 4, 8],
//   [7, 6, 1],
//   [1, 4, 9],
//   [1, 6, 7],
//   [6, 1, 2],
//   [1, 7, 4],
//   [15, 2, 8],
//   [5, 3, 8],
//   [22, 8, 7],
//   [1, 8, 1],
//   [5, 3, 4],
//   [1, 3, 2],
//   [1, 1, 2],
//   [3, 4, 8],
//   [3, 8, 9],
//   [11, 2, 1],
//   [2, 1, 4],
//   [15, 9, 5],
//   [22, 7, 3],
//   [2, 4, 9],
//   [3, 4, 2],
//   [8, 1, 8],
//   [6, 8, 6],
//   [1, 6, 2],
//   [3, 6, 9],
//   [3, 2, 7],
//   [4, 2, 9],
//   [2, 7, 5],
//   [1, 1, 7],
//   [2, 8, 2],
//   [2, 7, 5],
//   [9, 5, 3],
//   [8, 5, 2],
//   [1, 6, 4],
//   [1, 6, 9],
//   [1, 2, 9],
//   [2, 5, 1],
//   [7, 2, 3],
//   [1, 4, 3],
//   [1, 2, 4],
//   [5, 3, 4],
//   [6, 9, 3],
//   [1, 2, 6],
//   [6, 9, 6],
//   [2, 1, 8],
//   [3, 6, 3],
//   [2, 8, 6],
//   [6, 4, 1],
//   [14, 3, 9],
//   [1, 6, 4],
//   [3, 3, 9],
//   [1, 4, 5],
//   [10, 9, 6],
//   [6, 6, 7],
//   [2, 1, 8],
//   [1, 8, 6],
//   [16, 3, 2],
//   [1, 8, 1],
//   [1, 7, 1],
//   [7, 3, 4],
//   [1, 6, 5],
//   [4, 2, 3],
//   [5, 4, 9],
//   [2, 4, 5],
//   [4, 7, 4],
//   [5, 9, 6],
//   [2, 5, 4],
//   [11, 6, 7],
//   [1, 6, 8],
//   [5, 1, 5],
//   [2, 6, 4],
//   [7, 7, 3],
//   [1, 8, 6],
//   [2, 7, 3],
//   [1, 1, 3],
//   [3, 2, 8],
//   [9, 2, 5],
//   [1, 6, 1],
//   [1, 4, 8],
//   [7, 4, 7],
//   [8, 5, 6],
//   [1, 7, 2],
//   [1, 7, 4],
//   [3, 7, 8],
//   [1, 2, 3],
//   [1, 1, 2],
//   [1, 1, 7],
//   [3, 7, 6],
//   [11, 6, 2],
//   [4, 8, 7],
//   [2, 8, 7],
//   [15, 3, 2],
//   [7, 9, 4],
//   [3, 3, 2],
//   [4, 4, 7],
//   [5, 7, 3],
//   [3, 4, 6],
//   [3, 6, 9],
//   [1, 4, 2],
//   [1, 8, 1],
//   [2, 3, 7],
//   [2, 3, 7],
//   [23, 2, 5],
//   [1, 9, 1],
//   [1, 7, 9],
//   [1, 1, 8],
//   [8, 7, 1],
//   [1, 8, 4],
//   [1, 4, 2],
//   [3, 9, 8],
//   [1, 7, 9],
//   [22, 5, 9],
//   [1, 8, 5],
//   [1, 7, 4],
//   [1, 4, 5],
//   [1, 8, 3],
//   [2, 9, 3],
//   [5, 5, 2],
//   [5, 5, 4],
//   [3, 2, 7],
//   [1, 7, 3],
//   [6, 1, 7],
//   [4, 3, 1],
//   [6, 2, 8],
//   [1, 5, 6],
//   [2, 8, 1],
//   [12, 9, 4],
//   [8, 9, 4],
//   [1, 2, 9],
//   [2, 9, 8],
//   [3, 2, 8],
//   [5, 8, 6],
//   [7, 7, 1],
//   [4, 8, 9],
//   [1, 6, 1],
//   [17, 4, 7],
//   [1, 2, 4],
//   [2, 4, 1],
//   [6, 4, 6],
//   [1, 1, 4],
//   [7, 1, 5],
//   [9, 7, 9],
//   [8, 9, 8],
//   [5, 8, 3],
//   [1, 5, 6],
//   [2, 3, 6],
//   [1, 9, 1],
//   [1, 6, 1],
//   [10, 6, 1],
//   [1, 5, 1],
//   [2, 9, 1],
//   [1, 9, 7],
//   [2, 6, 8],
//   [2, 8, 2],
//   [1, 6, 8],
//   [22, 1, 9],
//   [9, 7, 5],
//   [1, 8, 1],
//   [2, 8, 3],
//   [4, 5, 9],
//   [1, 8, 3],
//   [5, 1, 9],
//   [2, 7, 3],
//   [2, 4, 7],
//   [1, 8, 5],
//   [2, 2, 4],
//   [1, 5, 8],
//   [9, 5, 8],
//   [2, 7, 5],
//   [2, 4, 5],
//   [3, 8, 4],
//   [3, 4, 3],
//   [2, 8, 6],
//   [1, 6, 4],
//   [3, 5, 9],
//   [1, 6, 3],
//   [12, 3, 5],
//   [1, 3, 1],
//   [7, 5, 4],
//   [1, 1, 3],
//   [1, 8, 1],
//   [7, 5, 1],
//   [6, 9, 6],
//   [29, 9, 5],
//   [2, 4, 6],
//   [26, 5, 2],
//   [24, 2, 7],
//   [1, 3, 2],
//   [8, 1, 7],
//   [7, 6, 9],
//   [2, 5, 3],
//   [1, 6, 4],
//   [3, 8, 5],
//   [2, 3, 8],
//   [2, 2, 8],
//   [5, 9, 2],
//   [27, 7, 2],
//   [2, 8, 3],
//   [2, 9, 5],
//   [3, 8, 5],
//   [2, 7, 4],
//   [3, 4, 7],
//   [2, 3, 2],
//   [4, 5, 1],
//   [5, 7, 2],
//   [29, 2, 8],
//   [9, 8, 3],
//   [2, 4, 8],
//   [7, 3, 2],
//   [3, 5, 4],
//   [1, 7, 5],
//   [3, 5, 6],
//   [2, 1, 8],
//   [2, 6, 8],
//   [3, 4, 2],
//   [4, 4, 2],
//   [1, 6, 8],
//   [8, 2, 4],
//   [2, 3, 5],
//   [1, 4, 1],
//   [3, 1, 2],
//   [4, 8, 2],
//   [3, 4, 9],
//   [3, 4, 1],
//   [2, 9, 5],
//   [1, 4, 6],
//   [4, 5, 1],
//   [1, 6, 8],
//   [1, 9, 3],
//   [4, 2, 3],
//   [15, 8, 2],
//   [9, 8, 1],
//   [1, 3, 9],
//   [5, 1, 9],
//   [3, 9, 7],
//   [2, 7, 6],
//   [3, 3, 2],
//   [1, 7, 8],
//   [1, 9, 6],
//   [1, 9, 8],
//   [2, 8, 2],
//   [1, 1, 2],
//   [1, 3, 7],
//   [4, 1, 7],
//   [19, 2, 5],
//   [1, 1, 4],
//   [1, 7, 4],
//   [1, 1, 5],
//   [3, 1, 4],
//   [1, 1, 8],
//   [6, 2, 4],
//   [7, 2, 1],
//   [2, 7, 9],
//   [8, 2, 8],
//   [2, 7, 3],
//   [1, 6, 4],
//   [10, 4, 6],
//   [5, 6, 7],
//   [2, 9, 8],
//   [6, 8, 9],
//   [1, 2, 3],
//   [2, 8, 3],
//   [5, 1, 8],
//   [8, 5, 2],
//   [8, 8, 7],
//   [7, 2, 8],
//   [1, 1, 2],
//   [1, 9, 7],
//   [1, 4, 2],
//   [2, 2, 6],
//   [5, 9, 3],
//   [2, 8, 6],
//   [2, 3, 9],
//   [4, 8, 6],
//   [7, 6, 1],
//   [8, 1, 5],
//   [1, 8, 7],
//   [1, 9, 6],
//   [12, 5, 3],
//   [1, 4, 8],
//   [2, 9, 5],
//   [1, 2, 3],
//   [3, 5, 1],
//   [1, 1, 5],
//   [21, 3, 8],
//   [2, 1, 5],
//   [6, 5, 7],
//   [2, 5, 6],
//   [10, 6, 9],
//   [1, 6, 8],
//   [13, 8, 2],
//   [2, 5, 4],
//   [2, 4, 3],
//   [4, 9, 1],
//   [5, 7, 8],
//   [12, 8, 1],
//   [5, 9, 6],
//   [1, 3, 7],
//   [2, 6, 5],
//   [11, 2, 1],
//   [1, 8, 4],
//   [16, 1, 9],
//   [1, 2, 6],
//   [1, 8, 5],
//   [12, 9, 3],
//   [14, 7, 2],
//   [1, 7, 9],
//   [1, 4, 2],
//   [1, 7, 5],
//   [3, 9, 5],
//   [4, 6, 9],
//   [3, 9, 4],
//   [1, 8, 4],
//   [2, 4, 5],
//   [1, 7, 1],
//   [5, 3, 5],
//   [2, 4, 2],
//   [8, 2, 7],
//   [7, 2, 4],
//   [1, 3, 7],
//   [3, 9, 7],
//   [2, 2, 9],
//   [3, 4, 5],
//   [6, 1, 8],
//   [6, 1, 5],
//   [3, 9, 2],
//   [22, 5, 9],
//   [1, 5, 6],
//   [2, 2, 3],
//   [5, 7, 6],
//   [5, 8, 9],
//   [2, 7, 2],
//   [20, 9, 4],
//   [1, 8, 3],
//   [2, 2, 5],
//   [1, 2, 5],
//   [15, 4, 8],
//   [1, 5, 7],
//   [6, 9, 1],
//   [5, 4, 8],
//   [2, 4, 8],
//   [1, 2, 1],
//   [5, 6, 5],
//   [5, 5, 7],
//   [1, 9, 8],
//   [5, 7, 2],
//   [2, 5, 1],
//   [4, 7, 5],
//   [1, 5, 9],
//   [1, 6, 8],
//   [1, 7, 2],
//   [6, 3, 4],
//   [3, 5, 7],
//   [1, 9, 2],
//   [6, 2, 3],
//   [1, 3, 4],
//   [13, 8, 9],
//   [7, 1, 5],
//   [6, 9, 2],
//   [1, 1, 4],
//   [6, 2, 3],
//   [1, 1, 4],
//   [5, 9, 7],
//   [11, 8, 4],
//   [7, 7, 3],
//   [2, 7, 8],
//   [1, 8, 2],
//   [8, 4, 1],
//   [2, 1, 6],
//   [2, 5, 8],
//   [3, 1, 9],
//   [1, 8, 2],
//   [11, 3, 2],
//   [2, 8, 9],
//   [9, 4, 7],
//   [11, 3, 8],
//   [7, 9, 6],
//   [5, 4, 6],
//   [3, 7, 3],
//   [1, 7, 1],
//   [5, 7, 6],
//   [2, 3, 5],
//   [1, 3, 4],
//   [5, 2, 5],
//   [1, 1, 7],
//   [1, 4, 8],
//   [1, 7, 6],
//   [7, 5, 7],
//   [2, 5, 7],
//   [3, 1, 7],
//   [1, 2, 3],
//   [1, 6, 4],
//   [1, 3, 4],
//   [1, 5, 3],
//   [18, 6, 4],
//   [9, 7, 1],
//   [14, 4, 6],
//   [3, 6, 4],
//   [12, 6, 7],
//   [2, 5, 3],
//   [3, 7, 4],
//   [6, 4, 7],
//   [5, 1, 7],
//   [5, 4, 5],
//   [5, 2, 1],
//   [9, 8, 4],
//   [9, 1, 3],
//   [2, 8, 2],
//   [4, 2, 4],
//   [1, 7, 6],
//   [1, 2, 3],
//   [1, 8, 9],
//   [1, 6, 9],
//   [2, 9, 3],
//   [3, 4, 1],
//   [13, 3, 5],
//   [12, 5, 1],
//   [7, 1, 8],
//   [1, 3, 6],
//   [4, 5, 4],
//   [1, 5, 2],
//   [8, 4, 9],
];
