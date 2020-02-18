let verifyEquals = require('../../assets/verify-equals');

// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS: 
//    - You'll need to use the split string method
//    - A for loop might be helpful

function f(str) {
    if (typeof str !== 'string'){
        return undefined;
    }
    else if (str === ''){
        return str;
    }
    else {
        let words = str.split(' ');
        let longestWord = '';

        for (let i=0; i<words.length; i++){
            let j=i+1
            let firstWord = words[i];
            let nextWord = words[j];
            if (nextWord === undefined){
                return longestWord;
            }
            else if (firstWord.length > nextWord.length){
                longestWord = firstWord;
            }
            else {
                longestWord = nextWord;
            }
        }
        return longestWord;
    }
}

// Test cases
let inputs = ['Hello Everyone', '', 46, 'Is that it', 'last runned test'];
let outputs = ['Everyone', '', undefined, 'that', 'runned'];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
