/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.


* @param {number[]} nums
* @param {number} target
* @return {number}

I - Input - nums {a sorted array of integers}, target {number} 
O - Output - index where target is found or where target should be inserted if not found {number}
C - Constraints - all integers in nums are unique
                - nums is sorted in ascending order
                - 1 <= nums.length <= 10^4
                - -10^4 <= nums[i] <= 10^4
                - -10^4 <= target <= 10^4
                - must write an algorithm with O(log n) runtime complexity
E - Edge Cases - if target is smaller than nums[0], return 0
               - if target is greater than nums[nums.length - 1], return nums.length

*/

const searchInsert = (nums, target) => {
    // Edge Cases
    if (target < nums[0]) {
        return 0;
    } else if (target > nums[nums.length - 1]) {
        return nums.length;
    }

    let left = 0;
    let right = nums.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor(left + (right - left) / 2);
        if (target === nums[middle]) {
            return middle;
        } else if (target > nums[middle] && target < nums[middle + 1]) {
            return middle + 1;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1
        }
    }
};

const TEST_CASES = [
    {
        nums: [1, 3, 5, 6],
        target: 5
    },
    {
        nums: [1, 3, 5, 6],
        target: 2
    },
    {
        nums: [1, 3, 5, 6],
        target: 7
    }
];

TEST_CASES.forEach(({ nums, target }) => console.log(searchInsert(nums, target)));