let verifyEquals = require('../../assets/verify-equals');

// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line. 
// This means you'll have to insert a newline \n character after every 40 characters in the input string. 
// If the next character after a cut is a space, then do not display it. 

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
//      Lorem ipsumos dolor sit amet consectetur
//      adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing

function f(str) {
  let newStr = '';
  let charact = str.split('');

  for (let i=39; i<str.length; i+=40){
    if (str.charAt(i) === ' '){
      charact.splice(i, 1, '');
      charact.splice(i+2, 0, '\n');
    }
    else {
      charact.splice(i+2, 0, '\n');
  }
}
for (let i=0; i<charact.length; i++){
newStr += charact[i];
}
return newStr;
}

// Test cases
let inputs = ['Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam','01234567890123456789012345678901234567890123456789' ];
let outputs = ['Lorem ipsumos dolor sit amet consectetur \nadipisicing elit. Magni quisquam','01234567890123456789012345678901234567890\n123456789'];

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
// runTest(2);
// runTest(3);
// runTest(4);

console.log('All tests passed for ' + __filename);
