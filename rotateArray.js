/*

Given an array, rotate to the right by k steps, where k is non-negative

 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.

I - Input - nums {array of numbers}, k {integer}
O - Output - nothing is returned, but nums is expected to have its values rotated by k steps
C - Constraints - 1 <= nums.length <= 10^5 {there will never be an empty array}
                - -2^31 <= nums[i] <= 2^31 - 1
                - 0 <= k <= 10^5
E - Edge Cases - if k is 0 then do nothing
               - if nums.length is 1 then do nothing

Follow up: Try to come up with as many solutions as you can. There are at least three different
           ways to solve this problem. Could you do it in-place with O(1) extra space?

*/

//======== Time Limit Exceeded on this solution =========
// const rotate = (nums, k) => {
//     let temp;
//     // Edge Cases
//     if (k === 0 || nums.length === 1) {
//     } else {
//         for (let i = 0; i < k; i++) {
//             temp = nums.pop();
//             nums.unshift(temp);
//         }
//     }
// };

// This solution works and brings down the runtime considerably, especially as the array size increases
const rotate = (nums, k) => {
    k %= nums.length;
    nums.unshift(...nums.splice(nums.length - k));
};


const TEST_CASES = [
    {
        nums: [1, 2, 3, 4, 5, 6, 7],
        k: 3,
        expected: [5, 6, 7, 1, 2, 3, 4]
    },
    {
        nums: [-1, -100, 3, 99],
        k: 2,
        expected: [3, 99, -1, -100]
    },
    {
        nums: [1, 2, 3, 4, 5, 6, 7],
        k: 0,
        expected: [1, 2, 3, 4, 5, 6, 7]
    }
];

TEST_CASES.forEach(({ nums, k, expected }) => console.log(expected, rotate(nums, k)));