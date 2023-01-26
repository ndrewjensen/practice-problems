/* https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/ */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	if (!head || !head.next) return null;

	let fast: ListNode | null = head.next;
	let slow: ListNode = head;
	
	let i = 1;

	while (i < n) {
		fast = fast!.next;
		i++;
	}

	while (fast && fast.next) {
		fast = fast.next;
		if (slow.next) slow = slow.next;
		i++;
	}

	if (n === 1) {
		slow.next = null;
	} else if (i === n && !fast) {
		return slow!.next;
	} else {
		slow.next = slow.next!.next;
	}
	return head;
}
