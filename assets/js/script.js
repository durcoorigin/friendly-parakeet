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

var CharNum = prompt("How many characters (8-128) do you want?");
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', ']', '[', '\', ^', '_', '`', '{', '|', '}', '~'];
var lowercaseChar = ['z', 'a', 'q', 'x', 's', 'w', 'c', 'd', 'e', 'v', 'f', 'r', 'b', 'g', 't', 'n', 'h', 'y', 'm', 'j', 'u', 'k', 'i', 'l', 'o', 'p'];
var uppercaseChar = ['L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'M', 'N', 'B', 'V', 'C', 'X', 'Z', 'P', 'O', 'I', 'U', 'Y', 'T', 'R', 'E', 'W', 'Q'];
var numbers = ['0', '9', '7', '3', '1', '6', '8', '4', '2', '5'];

// ****** Function to select number of characters
var chooseCharNum =  function() {
    if (CharNum > 7 && CharNum < 129) {
      confirm("You chose " + CharNum + " characters.");
    }

    else {
      confirm("Please enter a number from 8 to 128.");
    }
}


// ****** Function to select Special Characters
var chooseSpecial = function() {
  var special = confirm("Do you want to include special characters?");
  
  if (special) {
    confirm("You have selected special characters");
  specialChoice = specialChar[Math.floor(Math.random() * specialChar.length)];
    console.log("special character: " + specialChoice);
  }
  else  {
    confirm("You will not have special characters");
  }
}


// ****** Function to select lowercase letters
var chooseLowerCase = function() {
  var selLowercaseChar = confirm("Do you want to include lowercase letters?");

  if (selLowercaseChar) {
    confirm("You have selected lowercase letters");
  lowerChoice = lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
    console.log("lower: " + lowerChoice);
  }
  else  {
    confirm("You will not have lowercase letters");
  }
}


// ****** Function to select uppercase letters
var chooseUpperCase = function() {
var selUppercaseChar = confirm("Do you want to include lowercase letters?");

 if (selUppercaseChar) {
   confirm("You have selected uppercase letters");
  upperChoice = uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
   console.log("upper: " + upperChoice);
 }
 else  {
   confirm("You will not have uppercase letters");
 }
}


// ****** Function to select numerical characters
var chooseNumbers = function() {
  var selNumbers = confirm("Do you want to include numbers?");

  if (selNumbers) {
    confirm("You have selected numbers");
  numberChoice = [Math.floor(Math.random() * 10) + 1];
    console.log("number: " + numberChoice);
  }

  else  {
    confirm("You will not have numbers");
    return;
  }
}



//  ****** Generate random characters

chooseNumbers();
chooseUpperCase();
chooseLowerCase();
chooseSpecial();
chooseCharNum();

window.confirm(numberChoice + upperChoice + lowerChoice + specialChoice);





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
