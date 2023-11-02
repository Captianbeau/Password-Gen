// need 8-128 char, lowercase, uppercase, numeric, and/or special characters
// Assignment Code
// the #generate refers to the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword(){
    var char = window.prompt("How many characters between 8-128?");
    var num = window.confirm("Do you want numbers?");
    var charS = window.confirm("Do you want special characters?")
    var charU = window.confirm("Do you want uppercase letters")
    var charL = window.confirm("Do you want lowercase letters?")

    var specialCharacters = ['@','$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '“', '“”', '_'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var upletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var lowletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    switch(true){
      case num == charS == charU == charL:
         console.log(numbers+specialCharacters+upletters+lowletters)
      break;
      case charS:
          console.log(specialCharacters)
      break;
      case charU:
          console.log(upletters)
      break;
      case charL:
          console.log(lowletters)
      break;
      case num:
          console.log(numbers)
      break;
      default:
          console.log("No requirements selected")

  }

  }
  // the #pass word refers to the text area
  var passwordText = document.querySelector("#password");
  var password = generatePassword();


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);