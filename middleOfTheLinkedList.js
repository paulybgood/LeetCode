/*

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

I - Input - head {List Node}
O - Output - the middle node {List Node}
C - Constraints - the number of nodes in the list is in the range [1, 100]
                - 1 <= Node.val <= 100
E - Edge Cases - 


 * @param {ListNode} head
 * @return {ListNode}

Note: this code does not work properly when testing in my editor, but works when I 
run the code on LeetCode
*/

const middleNode = (head) => {
    let start = head;
    let end = head;
    while (end && end.next) {
        start = start.next;
        end = end.next.next;
    }
    return start;
};

const TEST_CASES = [
    {
        head: [1, 2, 3, 4, 5],
        expected: [3, 4, 5]
    },
    {
        head: [1, 2, 3, 4, 5, 6],
        expected: [4, 5, 6]
    }
];

TEST_CASES.forEach(({ head, expected }) => console.log(expected, middleNode(head)));