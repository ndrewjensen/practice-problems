function findMedianSortedArrays(
	nums1: number[],
	nums2: number[],
): number | undefined {
	const l1 = nums1.length;
	const l2 = nums2.length;
	const even = (l1 + l2) % 2 === 0;
	const lowerInd = even ? (l1 + l2) / 2 : ((l1 + l2) / 2) + 1
	const upperInd = ((l1 + l2) / 2) + 1

  //if the first list is completely smaller than the second
	if (nums1[0] >= nums2[l2 - 1]) {
		if (l2 === l1) {
      return (nums1[0] + nums2[l2 - 1]) / 2;
    } else if (l2 > l1) {
			return (nums2[lowerInd - 1] + nums2[upperInd - 1]) / 2;
		} else if (l1 > l2) {
			return (
				(nums1[Math.floor(lowerInd - l2 - 1)] + nums1[Math.ceil(upperInd - l2 - 1)]) / 2
			);
		} 
	}

  //if the second list is completely smaller than the first
	if (nums2[0] >= nums1[l1 - 1]) {
		if (l2 === l1) {
      return (nums2[0] + nums1[l1 - 1]) / 2;
    } else if (l1 > l2) {
			return (nums1[lowerInd - 1] + nums1[upperInd - 1]) / 2;
		} else if (l2 > l1) {
			return (
				(nums2[Math.floor(lowerInd - l1 - 1)] + nums2[Math.ceil(upperInd - l1 - 1)]) / 2
			);
		} 
	}

  //TODO: if the lists overlap... this needs to be completed in log(m+n) time,
  // so I'm thinking some sort of parallel binary search 

}
