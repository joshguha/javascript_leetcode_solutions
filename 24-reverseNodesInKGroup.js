/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (head === null) {
        return null;
    }

    reverseNextKNodes = (head) => {
        let node = head;
        let arr = [];
        for (let i = 0; i < k; i++) {
            if (node === null) {
                return head;
            }
            arr.push(node);
            node = node.next;
        }
        let nextHead = arr[k - 1].next;
        for (let i = arr.length - 1; i >= 1; i--) {
            arr[i].next = arr[i - 1];
        }
        arr[0].next = reverseNextKNodes(nextHead);
        return arr[k - 1];
    };

    return reverseNextKNodes(head);
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

f = new ListNode(9);
e = new ListNode(8, f);
d = new ListNode(7, e);
c = new ListNode(6, d);
b = new ListNode(5, c);
a = new ListNode(4, b);

printLinkedList = (head) => {
    let result = [];
    let node = head;
    while (node !== null) {
        result.push(node);
        node = node.next;
    }

    console.log(result);
};

printLinkedList(reverseKGroup(a, 4));
