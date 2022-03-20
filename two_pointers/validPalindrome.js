/*

A phrase is a palindrome if, after converting all the uppercase letters into lowercase letters and
removing all non-alphanumeric charachers, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or flase otherwise.

I - Input - s {string}
O - Output - true or false {boolean}
C - Constraints - 1 <= s.length <= 2 * 10^5
                - s consists only of printable ASCII characters.
E - Edge Cases - 

 * @param {string} s
 * @return {boolean}

*/

const isPalindrome = s => {
    s = s.split('').filter(character => isAlphaNumeric(character));
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    };
    return true;
};

const isAlphaNumeric = character => {
    return /^[a-zA-Z0-9]*$/.test(character);
};

const TEST_CASES = [
    {
        s: "A man, a plan, a canal: Panama",
        result: true
    },
    {
        s: "race a car",
        result: false
    },
    {
        s: " ",
        result: true
    }
];

TEST_CASES.forEach(({ s, result }) => console.log(result, isPalindrome(s)));