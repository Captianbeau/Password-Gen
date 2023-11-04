// the #generate refers to the button
var generateBtn = document.querySelector("#generate");


function generatePassword() {

// pop ups start
  var char = window.prompt("How many characters between 8-128?");

// stops the code if user inputs wrong numbers
  if (8 > char || char > 128) {
    return "Must be between 8 and 128"
  }
  
  var num = window.confirm("Do you want numbers?");
  var charS = window.confirm("Do you want special characters?");
  var charU = window.confirm("Do you want uppercase letters");
  var charL = window.confirm("Do you want lowercase letters?");
// end pop ups

// arrays start
  var password = ""
  var specialCharacters = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '“', '“”', '_'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var lowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var requirements = []
//arrays end 

// if statements start
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
    } else {
      return "Must choose at least one character type"
    }
// end if statements
  return password
}
// end function generatePassword

function writePassword() {

// the #password refers to the text area
  var passwordText = document.querySelector("#password");
  
  var password = generatePassword();

  passwordText.value = password;
}
// end function writePassword
//event listener to generate button
generateBtn.addEventListener("click", writePassword);