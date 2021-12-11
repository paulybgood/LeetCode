/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 const twoSum = function(nums, target) {
    for (let firstNum = 0; firstNum < nums.length - 1; firstNum++) {
        for (let secondNum = firstNum + 1; secondNum < nums.length; secondNum++) {
            if (nums[firstNum] + nums[secondNum] === target) {
                return [firstNum, secondNum]
            }
        }
    }
};



// tests
const test1 = {
    nums: [2, 7, 11, 15],
    target: 9
}

const test2 = {
    nums: [3, 2 , 4],
    target: 6
}

const test3 = {
    nums: [3, 3],
    target: 6
}

const test4 = {
    nums: [2, 4, 7, 8, 10],
    target: 15
}

const test5 = {
    nums: [1, 5, 9, 13, 16, 22, 24, 29, 33, 35],
    target: 37
}

const test6 = {
    nums: [2, 5, 5, 11],
    target: 10
}

console.log('test1 output: [0,1]: ', twoSum(test1.nums, test1.target))
console.log('test2 output: [1,2]: ', twoSum(test2.nums, test2.target))
console.log('test3 output: [0,1]: ', twoSum(test3.nums, test3.target))
console.log('test4 output: [2,3]: ', twoSum(test4.nums, test4.target))
console.log('test5 output: [3,6]: ', twoSum(test5.nums, test5.target))
console.log('test6 output: [1,2]: ', twoSum(test6.nums, test6.target))

