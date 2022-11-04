/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
 
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let lcp: string = strs[0];
  let length: number = 0;

  for (let j = 0; j < lcp.length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (lcp[j] !== strs[i][j]) {
        return lcp.slice(0, length);
      }
    }
    length++;
  }
  return lcp.slice(0, length);
}


/* //above is more efficient in time and space
function longestCommonPrefix2(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let lcp: string = strs[0];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < lcp.length; j++) {
      if (lcp[j] !== strs[i][j]) {
        lcp = lcp.slice(0, j);
      }
    }
  }
  return lcp
} */
