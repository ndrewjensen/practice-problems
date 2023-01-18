/**
find the longest space that is big enough.
input: string "vvvvooovoovoooo" where v is vacant and o is occupied
input: minSize as an integer

test case:
(minSize = 3, beach = "vvvvooovoovoooovvvvvvvv")

-if the minimum size is not met return "no space"
-return how big the space is

-declare maxSize as an integer
-declare a counter
-loop through the string, 
  -increment the counter when a space is vacant
  -check if the previous counter is greater than the minSize and greater than 
  maxSize and update maxSize
  -reset the counter when a space is occupied
-return maxSize

follow-up 1: refactor to include location of our beach spot
follow-up 2: what is runtime
follow-up 3: what if beach is infinite?
 */

function biggestBeachStretch(
	minSize: number,
	beach: string,
): [number, number] | string {
	let maxSize: number = 0;
	let currentSize: number = 0;
	let ourSpot: number = 0;

	for (let i = 0; i < beach.length; i++) {
		if (beach[i] === "v") {
			currentSize++;
		} else {
			currentSize = 0;
		}
		if (currentSize >= minSize && currentSize > maxSize) {
			maxSize = currentSize;
			ourSpot = i - maxSize + 1;
		}
	}

	return maxSize ? [maxSize, ourSpot] : "no space";
}

/*
You're given a two-dimensional array (a matrix) of potentially unequal height 
and width containing only 0's and 1's.

Each 0 represents land, and each 1 represents part of a river.
A river consists of any number of 1's that are either horizontally or vertically
adjacent (but not diagonally adjacent).
The number of adjacent 1's forming a river determine its size.

Note that a river can twist. In other words, it doesn't have to be a straight
vertical line or a straight horizontal line;
it can be L-shaped, for example.

Write a function that returns an array of the sizes of all rivers represented in
the input matrix.

The sizes don't need to be in any particular order.

Sample:
matrix = [
[1,0,0,1,0],
[1,0,1,0,0],
[0,0,1,0,1],
[1,0,1,0,1],
[1,0,1,1,0],
]

mid-river
matrix = [
[1,0,0,0,0],
[1,0,1,1,0],
[0,0,1,0,1],
[1,0,1,0,1],
[1,0,1,1,0],
]

matrix = [
[1,0,0,0,0],
[1,0,1,1,0],
[0,1,1,0,1],
[1,0,1,0,1],
[1,0,1,1,0],
]
[0,0,0,0,0],
[0,0,1,1,0],
[1,0,1,0,1],
[1,1,1,0,1],
[1,0,1,1,0],
]
[0,0,0,0,0],
[0,0,1,1,0],
[1,0,1,0,1],
[1,1,1,0,1],
[1,0,1,1,0],
]

Sample Output
[1, 2, 2, 2, 5]

declare an empty output array
iterate through each row, then column
	declare river size and set to 0
	when reaching a 1: 
		flip it to 0
		check right and down for another 1 (while loop)
			increment river size
		add river size to output array	



recursive helper - inputs: matrix, i, j
	check right
	check down		
	return riverlength? or return undefined and increment river size from function
	above
*/

function findRiverLengths(m: number[][]): number[] {
	if (m.length === 0) return [];
	const sizes: number[] = [];
	const height = m.length;
	const width = m[0].length;

	function followRiver(i: number, j: number, size: number[] = [0]): number {
		size[0]++;
		m[i][j] = 0;
		if (i+1 < height && m[i + 1][j] === 1) followRiver(i + 1, j, size);
		if (i - 1 >= 0 && m[i - 1][j] === 1) followRiver(i - 1, j, size);
		if (j + 1 < width && m[i][j + 1] === 1) followRiver(i, j + 1, size);
		if (j - 1 >= 0 && m[i][j - 1] === 1) followRiver(i, j - 1, size);
		return size[0];
	}

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (m[i][j] === 1) {
				sizes.push(followRiver(i, j, [0]));
			}
		}
	}
	return sizes;
}


/* function findRiverLengths2 (land) {
	const riverLengths = [];
	const visited = {};
  
	for (let i = 0; i < land.length; i++) {
	  for (let j = 0; j < land[i].length; j++) {
		let coordinate = land[i][j];
  
		if (coordinate === 1 && !visited[`${i}-${j}`]) {
		  let riverLength = dfs([i,j], land, visited);
		  riverLengths.push(riverLength);
		}
	  }
	}
  
	return riverLengths;
  }
  
  
  function dfs (start, land, visited) {
	const directions = [[1,0], [-1,0], [0,1], [0,-1]];
	const stack = [start];
	let riverLength = 0;
  
	while (stack.length) {
	  const [x,y] = stack.pop();
	  if (visited[`${x}-${y}`] === undefined) {
		visited[`${x}-${y}`] = true;
		if (land[x][y] === 1) {
		  riverLength++;
		  for (let [x1,y1] of directions) {
			let newX = x + x1;
			let newY = y + y1;
			if (newX >=0 && newX < land.length && newY >=0 && newY <= land[0].length) {
			  stack.push([newX, newY]);
			}
			}
		  }
	  }
	}
  
	return riverLength;
  } */

	
