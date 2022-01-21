/*

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
find two numbers such that they add up to a specific target number. Let these two numbers be 
numbers[index1] and dnumbers[index2] where 1 <= index1 < index2 <= numbers.length

Return the indices of the two numbers, index1 and index2, added by one as an integer array
[index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same
element twice.

I - Input - numbers {array of integers already sorted in ascending order}, target {integer}
O - Output - array {the indexes of where the two numbers are located that add together to make the target}
C - Constraints - 2 <= numbers.length <= 3 * 10^4
                - -1000 <= numbers[i] <= 1000
                - numbers is sorted in non-descending order
                - -1000 <= target <= 1000
                - the tests are generated such that there is exactly one solution
E - Edge Cases - 

 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 
 */

//==================== Brute Force Approach ======================
// const twoSum = (numbers, target) => {
//     for (let i = 0; i < numbers.length - 1; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 return [i + 1, j + 1];
//             }
//         }
//     }
// };
//================================================================

//============== Two Pointers / In-Place Approach ================
const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--
        } else {
            return [left + 1, right + 1];
        }
    }
}
//=================================================================


const TEST_CASES = [
    {
        numbers: [2, 7, 11, 15],
        target: 9,
        expected: [1, 2]
    },
    {
        numbers: [2, 3, 4],
        target: 6,
        expected: [1, 3]
    },
    {
        numbers: [-1, 0],
        target: -1,
        expected: [1, 2]
    }
];

TEST_CASES.forEach(({ numbers, target, expected }) => console.log(expected, twoSum(numbers, target)));