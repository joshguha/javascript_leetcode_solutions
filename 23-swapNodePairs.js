/**
 * Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null) {
        return null;
    }

    let result = [];
    let thisNode = head;
    while (thisNode !== null) {
        result.push(thisNode);
        thisNode = thisNode.next;
    }

    for (let i = 1; i < result.length; i += 2) {
        console.log("i", i);
        let temp = result[i - 1];
        result[i - 1] = result[i];
        result[i] = temp;
    }

    for (let i = 0; i < result.length; i++) {
        if (i === result.length) {
            result[i].next = null;
        } else {
            result[i].next = result[i + 1];
        }
    }

    return result[0];
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

console.log(swapPairs(a));
