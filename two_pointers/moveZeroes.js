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

Follow up: Could you minimize the total number of operations done?

*/

// Solution #1 using push and splice
const moveZeroes = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(...nums.splice(i,1));
        }
    }
    // Add return statement when testing to see nums in terminal
    // return nums;
};


// Solution #2 using two pointers (significantly faster compared to
// solution #1 but uses a little bit more memory)
const moveZeroesUsingTwoPointers = nums => {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }
    // Add return statement when testing to see nums in terminal
    // return nums;
}

const TEST_CASES = [
    {
        nums: [0, 1, 0, 3, 12],
        result: [1, 3, 12, 0, 0]
    },
    {
        nums: [0],
        result: [0]
    }
];

TEST_CASES.forEach(({ nums, result }) => console.log(result, moveZeroes(nums)));
TEST_CASES.forEach(({ nums, result }) => console.log(result, moveZeroesUsingTwoPointers(nums)));