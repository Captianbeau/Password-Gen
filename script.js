// need 8-128 char, lowercase, uppercase, numeric, and/or special characters
// Assignment Code
// the #generate refers to the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword(){
    var char = window.prompt("How many characters between 8-128?");
    // figure out how to isolate char so you don't have to go through every thing
    var num = window.confirm("Do you want numbers?");
    var charS = window.confirm("Do you want special characters?")
    var charU = window.confirm("Do you want uppercase letters")
    var charL = window.confirm("Do you want lowercase letters?")
    
    // var num = false
    // var charS = false
    // var charU = false
    // var charL = false

    var specialCharacters = ['@','$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '“', '“”', '_'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var upLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    if(num == true || charS == true || charU == true || charL == true){
      // add all possibilities into the switch
    switch(true){
      case num == charS == charU == charL:
        var requirements = numbers.concat(specialCharacters,upLetters,lowLetters)
        for( i = 8 ; i <= char; i++ ){
        var index = Math.floor(Math.random() * requirements.length);
        password = password + requirements[index]
        }
      break;
      case num == charS == charU:
        var requirements = numbers.concat(specialCharacters,upLetters)
        for( i = 8 ; i <= char; i++ ){
        var index = Math.floor(Math.random() * requirements.length);
        password = password + requirements[index]
        }
      break;
      case charS:
          
      break;
      case charU:
          
      break;
      case charL:
          
      break;
      case num:
          
      break;
      default:
        
          

  
    }
  }  else if( 8 > char || char > 128 && num != true || charS != true || charU != true || charL != true){
    password = "Must be between 8 and 128 and Must choose at least one character type"
  } else if ( 8 > char || char > 128){
    password = "Must be between 8 and 128"
  } else{
    password = "Must choose at least one character type"
  }
  return password
  }
  
  // the #pass word refers to the text area
  var passwordText = document.querySelector("#password");
  var password = "";
  password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);