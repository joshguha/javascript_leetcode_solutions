reverseList = (head) => {
    if (head === null) {
        return null;
    }
    let reverseListIteratively = (prev, node, next) => {
        node.next = prev;
        if (next === null) {
            return node;
        }
        reverseListIteratively(node, next, next.next);
    };

    console.log(reverseListIteratively(null, head, head.next));
    // return reverseListIteratively(null, head, head.next);
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

f = new ListNode(21);
e = new ListNode(19, f);
d = new ListNode(17, e);
c = new ListNode(20, d);
b = new ListNode(18, c);
a = new ListNode(16, b);

printLinkedList = (head) => {
    let node = head;
    while (node !== null) {
        console.log(node);
        node = node.next;
    }
};

let reverseListIteratively = (prev, node, next) => {
    node.next = prev;
    if (next === null) {
        console.log(node);
        return node;
    }
    reverseListIteratively(node, next, next.next);
};

console.log(reverseListIteratively(null, a, a.next));
