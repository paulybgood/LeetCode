/*
 * @param {number} x
 * @return {boolean}
 */

// A palindrome is a number that reads the same forward as it does backwards
    // Example
        // x = 121 is a palindrome because it reads 121 forward and backward
        // x = 123 is not a palindrome because it reads 321 backward
        // x = -121 is also not a palindrome because it reads 121- backward

 const isPalindrome = (x) => {
    let y = x.toString();
    let z = "";
    for (let i = y.length - 1; i >= 0; i--) {
        z += y[i];
    }
    if (z === y) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(1001001001));