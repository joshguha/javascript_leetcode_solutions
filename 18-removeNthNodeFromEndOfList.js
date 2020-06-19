/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let traverseList = (head) => {
        if (head === null) {
            return [];
        }

        return [head].concat(traverseList(head.next));
    };

    let arr = traverseList(head);
    let deleteIndex = arr.length - n;
    if (deleteIndex === 0) {
        return arr[1];
    } else if (deleteIndex > 0) {
        let prev = arr[deleteIndex - 1];
        prev.next = arr[deleteIndex + 1];
        return arr[0];
    } else {
        return [];
    }
};
let c = new ListNode(1);
let b = new ListNode(45, c);
let a = new ListNode(3, b);

let traverseList = (head) => {
    if (head === null) {
        return [];
    }

    return [head].concat(traverseList(head.next));
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let arr = traverseList(a);

console.log(arr[arr.length - 2]);
