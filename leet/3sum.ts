function threeSum(nums: number[]) {
	nums.sort((a, b) => a - b);
	const triples: Map<string, number[]> = new Map();

	for (let i = 0; i < nums.length - 2; i++) {
		let j = i + 1;
		let k = nums.length - 1;
		while (j < k) {
			const sum = nums[i] + nums[j] + nums[k];
			if (sum === 0) {
				const addends: number[] = [nums[i], nums[j++], nums[k--]];
				triples.set(addends.join(""), addends);
			} else if (sum > 0) {
				k--;
				continue;
			} else if (sum < 0) {
				j++;
			}
		}
	}

	return [...triples.values()];
}