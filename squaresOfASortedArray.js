/*

Given an integer array nums sorted in non-descending order, return an array of the squares
of each number sorted of each numver in non-descending order


 * @param {number[]} nums
 * @return {number[]}
 
I - Input - nums {array of numbers in non-descending order}
O - Output - nums {array of squared nubmers sorted in non-descending order (aka ascending order based on examples)}
C - Constraints - 1 <= nums.length <= 10^4
                - nums is sorted in non-descending order
E - Edge Cases - no edge cases

Follow up: Squaring each element and sorting the new array is very trival, could you find an 
           O(n) solution using a different approach?

Answer: Since a for loop is O(n) and the Array.prototype.sort() method uses O(log n) the Big O Notation
        of my solution can me simply written as O(n). My reasoning is that if O(2n) can be simplified to
        just O(n) and O(n + log n) is faster than O(2n), then O(n + log n) can be simplified to O(n)
*/

const sortedSquares = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] ** 2;
    }
    nums.sort((a, b) => a - b);
    return nums;
};

const TEST_CASES = [
    {
        nums: [-4, -1, 0, 3, 10],
        expected: [0, 1, 9, 16, 100]
    },
    {
        nums: [-7, -3, 2, 3, 11],
        expected: [4, 9, 9, 49, 121]
    }
];

TEST_CASES.forEach(({ nums, expected }) => console.log(expected, sortedSquares(nums)));