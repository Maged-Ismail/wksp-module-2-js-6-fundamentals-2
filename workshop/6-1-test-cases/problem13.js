let verifyEquals = require('../../assets/verify-equals');

// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function f(str) {
    let rev = '';
    let words = str.split('');
    for ( let i=words.length-1; i>=0; i--){
        rev += words[i]; 
    }
    if (str === rev){
        return true;
    }
    else{
        return false;
    }

}

// Test cases
let inputs = ['bob', 'charles', 'press', 'james', 'pop'];
let outputs = [true, false, false, false, true];

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
