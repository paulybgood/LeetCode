/*

Given a string s, reverse the order of characters in each word within a sentence while still
preserving whitespace and initial word order.

I - Input - s {string}
O - Output - s {string with its characters in reverse order}
C - Constraints - 1 <= s.length <= 5 * 10^4
                - s contains printable ASCII characters
                - s does not contain any leading or trailing spaces
                - there is at least one word in s
                - all the words in s are separated by a single space
E - Edge Cases - 

 * @param {string} s
 * @return {string}
 
*/

const reverseWords = (s) => {
    let arrOfWords = s.split(' ');
    let result = []
    for (let i = 0; i < arrOfWords.length; i++) {
        let tempWord = arrOfWords[i].split('');
        // console.log(tempWord);
        let left = 0;
        let right = tempWord.length - 1;
        while (left < right) {
            let temp = tempWord[left];
            tempWord[left] = tempWord[right];
            tempWord[right] = temp;
            left++;
            right--;
        }
        result.push(tempWord.join(''));
    };

    return result.join(' ');
};

const TEST_CASES = [
    {
        s: "Let's take LeetCode contest",
        expected: "s'teL ekat edoCteeL tsetnoc"
    },
    {
        s: "God Ding",
        expected: "doG gniD"
    }
];

TEST_CASES.forEach(({ s, expected }) => console.log(expected, reverseWords(s)));