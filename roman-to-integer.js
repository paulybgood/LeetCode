/*
* @param {string} s
* @return {number}
* 
*
* Roman numerals are usually written largest to smallest from left to right. However, 
* the numeral for four is not IIII. Instead, the number four is written as IV. Because 
* the one is before the five we subtract it making four. The same principle applies to 
* the number nine, which is written as IX. There are six instances where subtraction is used:
*
* I can be placed before V (5) and X (10) to make 4 and 9. 
* X can be placed before L (50) and C (100) to make 40 and 90. 
* C can be placed before D (500) and M (1000) to make 400 and 900.
* Given a roman numeral, convert it to an integer.
*/

 const romanToInt = (string) => {
     // Split the string by '' into an array to be able to iterate over each value
    const arrOfRomans = string.split('');
    let result = 0
    for (let i = 0; i < arrOfRomans.length; i++) {
        if (arrOfRomans[i] === 'I') {
            // Check to see if the value after 'I' is 'V' or 'X' for subtraction
            if (arrOfRomans[i + 1] === 'V' || arrOfRomans[i + 1] === 'X') {
                result += -1;
            } else {
                result += 1;
            }
        } else if (arrOfRomans[i] === 'V') {
            result += 5;
        } else if (arrOfRomans[i] === 'X') {
            // Check to see if the value after 'X' is 'L' or 'C' for subtraction
            if (arrOfRomans[i + 1] === 'L' || arrOfRomans[i + 1] === 'C') {
                result += -10;
            } else {
                result += 10;
            }
        } else if (arrOfRomans[i] === 'L') {
            result += 50;
        } else if (arrOfRomans[i] === 'C') {
            // Check to see if the value after 'C' is 'D' or 'M' for substraction
            if (arrOfRomans[i + 1] === 'D' || arrOfRomans[i + 1] === 'M') {
                result += -100;
            } else {
                result += 100;
            }
        }else if (arrOfRomans[i] === 'D') {
            result += 500; 
        } else if (arrOfRomans[i] === 'M') {
            result += 1000;
        }
    }

    return result;
};


const TEST_CASES = ['III', 'IV', 'IX', 'LVIII', 'MCMXCIV'];
TEST_CASES.forEach(string => console.log(romanToInt(string)));