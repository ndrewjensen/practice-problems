class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	let fast: ListNode | null = head;
	let slow: ListNode | null = head;
	let i = 0;
	if (!fast || !fast.next) return null;

	while (i < n) {
		fast = fast!.next;
		i++;
	}

	while (fast && fast.next) {
		fast = fast!.next;
		slow = slow!.next;
	}

	if (n === 1) {
		slow!.next = null;
	} else if (fast === head) {
    head = slow!.next
  }else {
		slow!.next = fast;
	}

	return head;
}

//TODO: finish this 