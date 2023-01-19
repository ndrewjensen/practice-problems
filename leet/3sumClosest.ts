function threeSumClosest(nums: number[], target: number): number {
	nums.sort((a, b) => a - b);
  let diff:number = Infinity;
  let closest: number;

	for (let i = 0; i < nums.length - 2; i++) {
		let j = i + 1;
		let k = nums.length - 1;
    let sum: number;
		while (j < k) {
			sum = nums[i] + nums[j] + nums[k];
			if (sum === target) {
				return sum;
			} else if (sum < target) {
				j++;
			} else if (sum > target) {
        k--;
      }
      if (Math.abs(target - sum) < diff) {
        diff = Math.abs(target - sum);
        closest = sum;
      }
		}
	}

	return closest!
}