/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const head = new ListNode(5);
head.next = new ListNode(4);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

// TODO: could use sliding window

// first attempt
function pairSum(head) {
    let st = [];
    while (head !== null) {
        st.push(head.val);
        head = head.next
    }

    let max = 0;
    for (let i = 0; i < st.length / 2; i++) {
        max = Math.max(max, st[i] + st[st.length - i -1]);
    }

    return max;
};

console.log(pairSum(head));