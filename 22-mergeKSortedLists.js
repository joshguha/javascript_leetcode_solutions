/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }
    let newList = [];

    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            newList.push(lists[i]);
        }
    }

    if (newList.length === 0) {
        return null;
    }

    let mergeSort = function (array) {
        let merge = function (firstArray, secondArray) {
            let i = 0;
            let j = 0;
            let result = [];
            while (true) {
                if (firstArray[i].val < secondArray[j].val) {
                    result.push(firstArray[i]);
                    i++;
                } else {
                    result.push(secondArray[j]);
                    j++;
                }

                if (i === firstArray.length) {
                    return result.concat(
                        secondArray.slice(j, secondArray.length)
                    );
                } else if (j === secondArray.length) {
                    return result.concat(
                        firstArray.slice(i, firstArray.length)
                    );
                }
            }
        };

        if (array.length === 1) {
            return array;
        }
        const middleIndex = Math.floor(array.length / 2);
        const firstArray = mergeSort(array.slice(0, middleIndex));
        const secondArray = mergeSort(array.slice(middleIndex, array.length));
        const merged = merge(firstArray, secondArray);
        return merged;
    };

    let bubble = function (arr) {
        let index = arr.length - 1;

        while (true) {
            if (index === 0) {
                return arr;
            }
            if (arr[index].val < arr[index - 1].val) {
                let temp = arr[index - 1];
                arr[index - 1] = arr[index];
                arr[index] = temp;

                index--;
            } else {
                return arr;
            }
        }
    };

    let arr = mergeSort(newList);
    console.log("sorted:");
    console.log(arr);
    let result = [];

    while (arr.length > 0) {
        result.push(arr[0]);
        let nextNode = arr[0].next;
        if (nextNode !== null) {
            arr = bubble(arr.slice(1).concat([nextNode]));
        } else {
            arr = arr.slice(1);
        }
    }

    for (let i = 0; i < result.length - 1; i++) {
        result[i].next = result[i + 1];
    }

    return result[0];
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

g = new ListNode(5);
b = new ListNode(4, g);
a = new ListNode(1, b);

h = new ListNode(4);
d = new ListNode(3, h);
c = new ListNode(1, d);

i = new ListNode();
f = new ListNode(6);
e = new ListNode(2, f);

console.log(mergeKLists([a, c, e]));
