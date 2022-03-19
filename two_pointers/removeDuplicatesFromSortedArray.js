/*

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-
place such that each unique element appears only once. The relative order of the elements
should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead
have the result be placed in the first part of the array nums. More formally, if there are k
elements after removing the duplicates, then the first k elements of nums should hold the
final result. It does not matterwhat you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array
in-place with O(1) extra memory.

I - Input - nums {array of numbers}
O - Output - k {number}
C - Constraints - 1 <= nums.length <= 3 * 10^4
                - -100 <= nums[i] <=100
                - nums is sorted in non-decreasing order
E - Edge Cases - 

 * @param {number[]} nums
 * @return {number}
 
 */

const removeDuplicates = nums => {
    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
};

const TEST_CASES = [
    {
        nums: [1, 1, 2],
        result: 2
    },
    {
        nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
        result: 5
    }
];

TEST_CASES.forEach(({ nums, result }) => console.log(result, removeDuplicates(nums)));