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
var numericArr = ['9', '8', '7', '3', '2', '1', '6', '5', '4', '0'];


// ****** Function to select the characters for the password
function buildPassword() {
  var lengthChoice = prompt("Enter the number of characters (from 8-128) you would like your password to be.");

  if (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
    lengthChoice = alert("You must enter an number from 8 to 128.  Please try again.");
    buildPassword();
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
//  debugger;
  var passwordSelections = buildPassword();
  var passwordChar = [];
    
      var specialChar = [];
      if (passwordSelections.hasSpecial) {    
        for (var i=0; i < passwordSelections.length; i++) {
          var specialChar = specialArr[Math.floor(Math.random() * i)];
          passwordChar.push(specialChar[i]);
        }
      }    

      var lowerChar = [];
      if (passwordSelections.hasLower) {    
        for (var i=0; i < passwordSelections.length; i++) {
          var lowerChar = lowercaseArr[Math.floor(Math.random() * i)];
          passwordChar.push(lowerChar[i]);
        }
      }    

      var upperChar = [];
      if (passwordSelections.hasUpper) {    
        for (var i=0; i < passwordSelections.length; i++) {
          var upperChar = uppercaseArr[Math.floor(Math.random() * i)];
          passwordChar.push(upperChar[i]);
        }
      }    

      var numericChar = [];
      if (passwordSelections.hasNumeric) {    
        for (var i=0; i < passwordSelections.length; i++) {
          var numericChar = numericArr[Math.floor(Math.random() * i)];
          passwordChar.push(numericChar[i]);
        }
      }    

  //var passwordChar = [specialChar, lowerChar, upperChar, numericChar];
  var final=passwordChar[Math.floor(Math.random()  * passwordSelections.length)];
  console.log(specialChar);
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
