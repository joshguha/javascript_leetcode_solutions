// From LeetCode

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// Create Linked lists from numbers

createLinkedListNumber = function (number) {
    const remainder = number % 10;
    const division = Math.floor(number / 10);
    if (division !== 0) {
        return new ListNode(remainder, createLinkedListNumber(division));
    } else {
        return new ListNode(remainder, undefined);
    }
};

printLinkedListNumber = function (linkedListNumber) {
    let num = linkedListNumber;
    let nextNum = num.next;

    while (true) {
        console.log(num.val);

        if (nextNum === null) {
            break;
        }
        num = nextNum;
        nextNum = num.next;
    }
};

// Solution /////////////////////////
var addTwoNumbers = function (l1, l2, carryover = 0) {
    console.log(`Carryover is: ${carryover}`);
    if (l1 === null && l2 === null) {
        if (carryover === 1) {
            return new ListNode(1, null);
        }
        return null;
    } else if (l1 === null) {
        if (l2.val + carryover >= 10) {
            return new ListNode(
                (l2.val + carryover) % 10,
                addTwoNumbers(null, l2.next, 1)
            );
        }
        return new ListNode(l2.val + carryover, addTwoNumbers(null, l2.next));
    } else if (l2 === null) {
        if (l1.val + carryover >= 10) {
            return new ListNode(
                (l1.val + carryover) % 10,
                addTwoNumbers(l1.next, null, 1)
            );
        }
        return new ListNode(l1.val + carryover, addTwoNumbers(l1.next, null));
    } else {
        const sum = l1.val + l2.val + carryover;
        if (sum >= 10) {
            return new ListNode(sum % 10, addTwoNumbers(l1.next, l2.next, 1));
        }
        return new ListNode(sum, addTwoNumbers(l1.next, l2.next));
    }
};

const linkedListNumber1 = createLinkedListNumber(999);
const linkedListNumber2 = createLinkedListNumber(1);

printLinkedListNumber(addTwoNumbers(linkedListNumber1, linkedListNumber2));
