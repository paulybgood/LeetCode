/*

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

I - Input - s {array of characters that make up a string}
O - Output - nothing, but the array s is expected to be reversed
C - Constraints - 1 <= s.length <= 10^5
                - s[i] is a printable ascii character
E - Edge Cases - 

 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.

 */

const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};

const TEST_CASES = [
    {
        s: ["h", "e", "l", "l", "o"],
        expected: ["o", "l", "l", "e", "h"]
    },
    {
        s: ["H", "a", "n", "n", "a", "h"],
        expected: ["h", "a", "n", "n", "a", "H"]
    }
];

TEST_CASES.forEach(({ s, expected }) => console.log(expected, reverseString(s)));