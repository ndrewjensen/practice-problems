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
