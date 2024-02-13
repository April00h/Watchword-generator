DOM element reference
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Function to obtain user input for password options and password length
function getPasswordOptions() {

var length = parseInt(prompt('How many characters would you like your password to contain?'), 10);
if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Conditional statement to check password length 
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Conditional statement to check password length 
  if (length > 128) {
    alert('Password length must be less than 128 characters');
    return null;
  }
  // Variable to store boolean 
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  var hasLowercaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  var hasUppercaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

    if (Number.isNaN(length) || length < 8 || length > 128) {
alert('Length must be a number between 8 and 128.');
}


var hasSpecialCharacters = confirm('Include special characters?');
var hasNumericCharacters = confirm('Include numeric characters?');
var hasLowercaseCharacters = confirm('Include lowercase characters?');
var hasUppercaseCharacters = confirm('Include uppercase characters?');


if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowercaseCharacters && !hasUppercaseCharacters) {
alert('Password must include at least one character type.');
return null;
}


var passwordOptions = {
length: length,
hasSpecialCharacters: hasSpecialCharacters,
hasNumericCharacters: hasNumericCharacters,
hasLowercaseCharacters: hasLowercaseCharacters,
hasUppercaseCharacters: hasUppercaseCharacters
};


return passwordOptions;
}


// Function to get a random element from array
function getRandom(arr) {
var randIndex = Math.floor(Math.random() * arr.length);
return arr[randIndex];
}


// Function to generate a password with given inputs
function generatePassword() {
var options = getPasswordOptions();
var currentArr = [];
if (options.hasSpecialCharacters) currentArr = currentArr.concat(specialCharacters);
if (options.hasNumericCharacters) currentArr = currentArr.concat(numericCharacters);
if (options.hasLowercaseCharacters) currentArr = currentArr.concat(lowerCasedCharacters);
if (options.hasUppercaseCharacters) currentArr = currentArr.concat(upperCasedCharacters);


console.log(currentArr)
// Generate random string password from new array
let pass = ""
let i = 0
while (i < options.length) {
  pass += getRandom(currentArr);
  i++
} 
return pass
}


function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


