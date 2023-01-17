/**
https://leetcode.com/problems/reverse-integer/
 */

function reverse(x: number): number {
  const s = `${x}`;
  const outputArr: string[] = []
  for (let i = s.length - 1; i > 0; i--) {
    outputArr.push(s[i])
  }

  const output = s[0] === "-"
    ? Number(outputArr.join('')) * (-1)
    : outputArr.push(s[0]) && Number(outputArr.join(''));
  
  return output < (-(2**31)) || output > ((2**31) - 1) ? 0 : output;
}