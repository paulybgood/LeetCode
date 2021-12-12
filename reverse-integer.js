/*
 * @param {number} x
 * @return {number}
 */

// Given a signed 32-bit integer, return that integer with its digits reversed
// If reversing the integer causes the value to go outside the signed 32-bit range
    // [-2^31, 2^31 - 1], then return 0

 const reverse = (num) => {
    let isNegative = false;
    if (num < 0) {
        isNegative = true;
    }
    let numStr = Math.abs(num).toString();
    let newNumStr = '';
    for (let i = numStr.length - 1; i >= 0; i--) {
        newNumStr += numStr[i];
    }
    if (isNegative) {
        newNumStr = "-" + newNumStr;
    }
    if ((Number(newNumStr) <= (-2)**31) || (Number(newNumStr) >= 2**31 - 1)) {
        return 0;
    } else {
        return Number(newNumStr);
    }
};

const TEST_CASES = [-400, 12345678, 987654321, 0]

TEST_CASES.forEach(num => console.log(reverse(num)));