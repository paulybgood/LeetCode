/*

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index.
Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

I - Input - target {number}, nums {array of numbers}
O - Output - array index {number}
C - all integers in nums are unique
    nums is sorted in ascending order
    nums will never be an empty array
    must write an algorithm with O(log n) runtime complexity

E - Edge Cases - if target doesnt exist in nums, return -1
*/



 const search = (nums, target) => {
    console.log(nums);
    console.log(target);
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor(left + (right - left) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        // console.log(middle);
    }
    return -1;
};

const TEST_CASES = [
    {
        nums: [-1, 0, 3, 5, 9, 12],
        target: 9
    },
    {
        nums: [-1, 0, 3, 5, 9, 12],
        target: 2
    }
];

TEST_CASES.forEach(({ nums, target }) => console.log(search(nums, target)));