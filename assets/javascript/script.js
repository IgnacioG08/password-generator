// Below we have all the global variables that will be referenced in this project.
var numericalChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allChar = [];
var returnValue;

/*function generatePassword will create our first prompt gathering the users choice in characters and return the value of those choices
in a randomized order*/
function generatePassword() {
  var userChoice = window.prompt("Enter password length within the range of 8-128 characters");
  var userChoiceNum = parseInt(userChoice, 10);
  if (isNaN(userChoiceNum) || userChoiceNum < 8 || userChoiceNum > 128) {
    window.alert("Invalid password length. Please try again.");
    generatePassword();
    return;
  } else {
    charOptions();
    returnValue = randomize(userChoiceNum);
    window.alert("Password generated")
  } return returnValue;
}

/* function charOptions will gather the types of characters that the user will be using in their password and storing them inside an array */
function charOptions() {
  allChar = [];
  if (window.confirm("Would you like to include uppercase letters?")) {
    allChar = allChar.concat(upperCaseChar);
  }
  if (window.confirm("Would you like to include lowercase letters?")) {
    allChar = allChar.concat(lowerCaseChar)
  }
  if (window.confirm("Would you like to include numbers?")) {
    allChar = allChar.concat(numericalChar)
  }
  if (window.confirm("Would you like to include special characters?")) {
    allChar = allChar.concat(specialChar)
  }
}

/* function randomize will be responsible for looping and randomizing all the choices in the function prior to it */
function randomize(userChoiceNum) {
  var returnValue = ""
  for (var i = 0; i < userChoiceNum; i++) {
    returnValue += allChar[Math.floor((Math.random() * allChar.length))]
  } return returnValue;
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);