/**
 https://leetcode.com/problems/find-the-town-judge/
 */

function findJudge(n: number, trust: number[][]): number {
	if (n === 1 && trust.length === 0) return 1;
	const trustedBy: Record<number, number[]> = {};
	const people: Record<number, boolean> = {};

	for (let person of trust) {
		people[person[0]] = true;
		trustedBy[person[1]]
			? trustedBy[person[1]].push(person[0])
			: (trustedBy[person[1]] = [person[0]]);
	}

	for (const trusted in trustedBy) {
		if (trustedBy[trusted].length === n - 1 && !people[trusted]) {
			return Number(trusted);
    }
	}

	return -1;
}
