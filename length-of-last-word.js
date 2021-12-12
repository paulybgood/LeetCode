/*
 * @param {string} s
 * @return {number}
 */

// return the length of the last word in the string
    // must contain only non-space characters
    // Examples:
        // "Hello World" = 5
        // "     fly  me      to the      moon    " = 4
        // "luffy is still joyboy" = 6

// .trim() removes all of the white space before and after non-space characters in a string


 const lengthOfLastWord = (string) => {
     let newString = string.trim();
     let arr = newString.split(' ');
     return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord('   Hello there  '));