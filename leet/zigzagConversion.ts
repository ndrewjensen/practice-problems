/**
 https://leetcode.com/problems/zigzag-conversion/description/
 */

function convert(s: string, numRows: number): string {
	if (numRows === 1) return s;

	const modulus: number = (numRows - 1) * 2;
	let remainder: number = 0;
	let chars: string[] = [];

	while (remainder * 2 <= modulus) {
		for (let i = 0; i < s.length; i++) {
			if (i % modulus === remainder || i % modulus === (modulus - remainder))
				chars.push(s[i]);

		}
		remainder++;
	}
	return chars.join('');
}
