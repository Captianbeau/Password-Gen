// need 8-128 char, lowercase, uppercase, numeric, and/or special characters
// Assignment Code
// the #generate refers to the button
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var char = window.prompt("How many characters between 8-128?");
  // figure out how to isolate char so you don't have to go through every thing
  if (8 > char || char > 128) {
    return "Must be between 8 and 128"
  }
  var password = ""
  var num = window.confirm("Do you want numbers?");
  var charS = window.confirm("Do you want special characters?");
  var charU = window.confirm("Do you want uppercase letters");
  var charL = window.confirm("Do you want lowercase letters?");


  var specialCharacters = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '“', '“”', '_'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var lowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var requirements = []

  if (num == true || charS == true || charU == true || charL == true) {
    if (num) {
      requirements = requirements.concat(numbers)
    }
    if (charS) {
      requirements = requirements.concat(specialCharacters)
    }
    if (charU) {
      requirements = requirements.concat(upLetters)
    }
    if (charL) {
      requirements = requirements.concat(lowLetters)
    } 
  for (i = 8; i <= char; i++) {
    var index = Math.floor(Math.random() * requirements.length);
    password = password + requirements[index]
  }
  return password
} else {
  return "Must choose at least one character type"
}
}
// Write password to the #password input
function writePassword() {


  // the #pass word refers to the text area
  var passwordText = document.querySelector("#password");
  
  var password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);