/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

//first attempt
var addTwoNumbers = function (l1, l2) {
    let stack1 = [];
    let stack2 = [];

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let dummyHead = null;

    while (stack1.length || stack2.length || carry) {
        let val1 = stack1.pop() || 0;
        let val2 = stack2.pop() || 0;

        let total = val1 + val2 + carry;
        carry = Math.floor(total / 10);

        let newNode = new ListNode(total % 10, dummyHead);
        dummyHead = newNode;
    }

    return dummyHead;
};
