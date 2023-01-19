function isPalindrome(x: number): boolean {
	let number = `${x}`;

	for (let i = 0; i < Math.floor(number.length / 2); i++) {
		if (number[i] !== number[number.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
