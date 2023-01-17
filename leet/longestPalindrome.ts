/**
 * 
Given a string s, return the longest palindromic substring in s.
https://leetcode.com/problems/longest-palindromic-substring/
 */

function longestPalindrome(s: string): string {
  if (s.length === 1) return s;
  let len: number = 1;
  let output: string = s[0];

	function iterate(s: string, left: number, right: number): string | void {
		while (left > 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
			left--;
			right++;
		}
		if (right - left + 1 > len) {
			len = right - left + 1;
			return s.slice(left, right + 1);
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) {
			output = iterate(s, i, i + 1) || output;
		}
		if (s[i - 1] === s[i + 1]) {
			output = iterate(s, i - 1, i + 1) || output;
		}
	}
	return output;
}
