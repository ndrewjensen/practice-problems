function twoSumV1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i,j];
    }
  }
  return [];
}


function twoSum(nums: number[], target: number): number[] {
  const ints: Record<number,number> = {}
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in ints) {
      return [ints[diff],i]
    } else {
      ints[nums[i]] = i;
    }
  }
  return [];
}
