// Assignment code here
//User selects password content criteria
//    * User selects uppercase, lowercase, numeric, and/or special characters
//    * User's selection is verified 
//        - User either confirms criteria or returns to selection screen
//User selects password length
//    * User selects password length
//    * User's selection is verified 
//        - User either confirms criteria or returns to selection screen
//User's password is displayed 
//    * User is presented with the option to generate another password

 
// ****** Character options

var specialArr = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', ']', '[', '\', ^', '_', '`', '{', '|', '}', '~'];
var lowercaseArr = ['z', 'a', 'q', 'x', 's', 'w', 'c', 'd', 'e', 'v', 'f', 'r', 'b', 'g', 't', 'n', 'h', 'y', 'm', 'j', 'u', 'k', 'i', 'l', 'o', 'p'];
var uppercaseArr = ['L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'M', 'N', 'B', 'V', 'C', 'X', 'Z', 'P', 'O', 'I', 'U', 'Y', 'T', 'R', 'E', 'W', 'Q'];
var numericArr = ['0', '9', '7', '3', '1', '6', '8', '4', '2', '5'];


// ****** Function to select the characters for the password
function buildPassword() {
  var lengthChoice = prompt("Enter the number of characters (from 8-128) you would like your password to be.");

  if (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
    lengthChoice = prompt("You must enter an number from 8 to 128.  Please try again.");
  }
 
  var special = confirm("Include Special characters? (ex: @, &, %, etc.)");
  var lower = confirm("Include lowercase characters?");
  var upper = confirm("Include UPPERCASE characters?");
  var numeric = confirm("Include Numbers (0-9)?");
  
  var passwordSelections = {
    length: lengthChoice,
    hasSpecial: special,
    hasLower: lower, 
    hasUpper: upper,
    hasNumeric: numeric
  }

  return passwordSelections;

}


function generatePassword() {
  var passwordSelections = buildPassword();
  console.log(passwordSelections);
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
