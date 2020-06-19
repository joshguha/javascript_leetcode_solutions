/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    } else if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }
    let arr = [];
    let i = l1;
    let j = l2;
    while (true) {
        if (i.val < j.val) {
            arr.push(i);
            i = i.next;
        } else {
            arr.push(j);
            j = j.next;
        }

        if (i === null) {
            arr.push(j);
            break;
        } else if (j === null) {
            arr.push(i);
            break;
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1];
    }

    return arr[0];
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

r = new ListNode(122);
c = new ListNode(21, r);
b = new ListNode(19, c);
a = new ListNode(17, b);

f = new ListNode(20);
e = new ListNode(18, f);
d = new ListNode(16, e);

console.log(mergeTwoLists(a, d));
