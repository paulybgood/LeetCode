/* 

Given an integer array nums, move all 0's to the end of it while maintaining the relative
order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

I - Input - nums {array of integers}
O - Output - nothing is returned, but all of the 0's in nums are expected to be moved to the end of the array
C - Constraints - 1 <= nums.length <= 10^4
                - -2^31 <= nums[i] <= 2^31 - 1
E - Edge Cases - 

Follow up: Could you minimize thte total number of operations done?

*/

const moveZeroes = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(...nums.splice(i,1));
        }
    }
    return nums;
};

const TEST_CASES = [
    {
        nums: [0, 1, 0, 3, 12],
        expected: [1, 3, 13, 0, 0]
    },
    {
        nums: [0],
        expected: [0]
    }
];

TEST_CASES.forEach(({ nums, expected }) => console.log(expected, moveZeroes(nums)));