// 1
let arr = [1,2,3,4,5];
function reverseArr(){       
console.log("reverse Array: " + arr.reverse());
}
reverseArr( );

// 2
function filterNegativeNumbers(arr) {
    return arr.filter(function(num) {
        return num >= 0;
    });
}
const inputArray = [1, -2, 3, -4, 5];
const filteredArray = filterNegativeNumbers(inputArray);
console.log(filteredArray);


// 3
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);
console.log(vowelCount); 

// 4
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
}
const inputString1 = "kayak";
const inputString2 = "Hello, World!";
const inputString3 = "A man, a plan, a canal, Panama";

console.log(isPalindrome(inputString1));
console.log(isPalindrome(inputString2));
console.log(isPalindrome(inputString3)); 

// 5
function isInRange(num1, num2) {
    const isNum1InRange = num1 >= 50 && num1 <= 99;
    const isNum2InRange = num2 >= 50 && num2 <= 99;
    
    return isNum1InRange || isNum2InRange;
}
const value1 = 75;
const value2 = 100;

console.log(isInRange(value1, value2)); // Output: true

const value3 = 30;
const value4 = 45;

console.log(isInRange(value3, value4)); // Output: false

// 6 
function getMinValue(arr, mapFunction) {
    const mappedArray = arr.map(mapFunction);
    const minValue = Math.min(...mappedArray);

    return minValue;
}
const numbers = [1, 2, 3, 4, 5];
const squareFunction = num => num * num;

const minValue = getMinValue(numbers, squareFunction);
console.log(minValue); // Output: 1 (since the squares are [1, 4, 9, 16, 25])

// 7
function createUpdatedString(str) {
    if (str.length < 3) {
        throw new Error("String length must be 3 and above");
    }

    const lastThreeChars = str.slice(-3);
    const updatedString = lastThreeChars.repeat(4);

    return updatedString;
}
const originalString = "Javascript";
const result = createUpdatedString(originalString);
console.log(result); // Output: "iptiptiptipt"

// 8
function findAngleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}
const angle1 = 45;
const angle2 = 90;
const angle3 = 135;
const angle4 = 180;
const angle5 = 200;

console.log(findAngleType(angle1)); // Output: "Acute angle"
console.log(findAngleType(angle2)); // Output: "Right angle"
console.log(findAngleType(angle3)); // Output: "Obtuse angle"
console.log(findAngleType(angle4)); // Output: "Straight angle"
console.log(findAngleType(angle5)); // Output: "Invalid angle"

// 9
function smallestRoundNumber(num) {
    if (num % 10 === 0) {
        return num;
    }  
    return Math.ceil(num / 10) * 10;
}
const value_1 = 592;
const value_2 = 600;
const value_3 = 589;

console.log(smallestRoundNumber(value_1)); // Output: 600
console.log(smallestRoundNumber(value_2)); // Output: 600
console.log(smallestRoundNumber(value_3)); // Output: 590

// 10
function findIndex(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}
const array = [10, 20, 30, 40, 50];
const itemToFind = 30;

const index = findIndex(array, itemToFind);
console.log(index); // Output: 2
