var numericalChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allChar = [];


function generatePassword() {
  var userChoice = window.prompt("Enter password length within the range of 8-128 characters");
  var userChoiceNum = parseInt(userChoice, 10);
 

  if (isNaN(userChoiceNum) || userChoiceNum < 8 || userChoiceNum > 128) {
    window.alert("Invalid password length. Please try again.");
    generatePassword();
    return;
  } else {
    charOptions()
  }
}

  function charOptions () {
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


  function randomize () { 
  // randomly select values from the allChar array
  for (var i = 0; i < userChoiceNum; i++) {
    allChar = Math.floor((Math.random() * userChoiceNum));
  }   return password;
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