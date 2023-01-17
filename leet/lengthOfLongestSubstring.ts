function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) return s.length;
  let chars: Record<string,number> = {};
  let left = 0;
  let right = 0;
  let longest: number = 0;
  while (right < s.length) {
    if (!(s[right] in chars) || left > chars[s[right]]) {
      longest = Math.max(right - left + 1, longest);
    } else {
      left = chars[s[right]] + 1
    }
    chars[s[right]] = right;
    right ++;
  }
  return longest;
};