class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
  l3Head: ListNode = new ListNode()
): ListNode | null {
	
  let l3 = l3Head;
	let overflow = 0;

	while (l1 || l2) {
		if (l1 && l2) {
			l3.next = new ListNode((l1.val + l2.val + overflow) % 10);
			overflow = Math.floor((l1.val + l2.val + overflow) / 10);
			l1 = l1.next;
			l2 = l2.next;
      l3 = l3.next
		} else if (l1) {
			l3.next = new ListNode((l1.val + overflow) % 10);
			overflow = Math.floor((l1.val + overflow) / 10);
			l1 = l1.next;
      l3 = l3.next
		} else if (l2) {
			l3.next = new ListNode((l2.val + overflow) % 10);
			overflow = Math.floor((l2.val + overflow) / 10);
			l2 = l2.next;
      l3 = l3.next
		}
	}
	if (overflow) {
		l3.next = new ListNode(overflow);
	}
	return l3Head.next;
}
