/*
* @param {string} s
* @return {number}
*
* Directions:
*   1. Read in and ignore any leading whitespace.
*   2. Check if the next character (if not already at the end of the string) 
*       is '-' or '+'. Read this character in if it is either. This determines 
*       if the final result is negative or positive respectively. Assume the 
*       result is positive if neither is present.
*   3. Read in next the characters until the next non-digit character or the end
*       of the input is reached. The rest of the string is ignored.
*   4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). 
*       If no digits were read, then the integer is 0. Change the sign as 
*       necessary (from step 2).
*   5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], 
*       then clamp the integer so that it remains in the range. Specifically, 
*       integers less than -2^31 should be clamped to -2^31, and integers greater 
*       than 2^31 - 1 should be clamped to 2^31 - 1.
*   6. Return the integer as the final result.
* Note:
*   Only the space character ' ' is considered a whitespace character.
*   Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/

 const myAtoi = (string) => {
    const min = (-2)**31;
    const max = 2**31 - 1;
    let isNegative = false;
    let index = 0;
    let num = 0

    // Reading all of the white space at the beginning of the string
    while (index < string.length && string[index] === ' ') {
        index++;
    }

    // Checking to see if the string has a '+' or a '-' in it after the whitespace is read
    if (string[index] === '+') {
        index++;
    } else if  (string[index] === '-') {
        isNegative = true;
        index++;
    }

    // After '+' and '-' are checked for, looking for numbers that come after it until spaces or
        // non-digit cahracters are found
    for (index; index < string.length && string[index] >= '0' && string[index] <= '9'; index++) {
        num = num + string[index];
    }

    if (isNegative) {
        num = '-' + num;
    }

    // Checking to see if the new number is out of the 32-bit signed integer range
    num = Number(num);
    if (num < min) {
        num = min; 
    } else if (num > max) {
        num = max
    }

    return num;
};

const TEST_CASES = ["+42", "    -42", "4193 with words", "words and 987", "-91283472332"]
TEST_CASES.forEach(string => console.log(myAtoi(string)));