// need 8-128 char, lowercase, uppercase, numeric, and/or special characters
// Assignment Code

  var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var gen = true;

  var specialCharacters = ['@','$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '“', '“”', '_'];
  var numbers = ['1','2','3','4','5','6','7','8','9'];
  var upletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lowletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  while (gen == true){
  var char = window.prompt("How many characters between 8-128?");
  var num = window.alert("Do you want numbers?");
  var charS = window.alert("Do you want special characters?")
  var charU = window.alert("Do you want uppercase letters")
  var charL = window.alert("Do you want lowercase letters?")
  var password = generatePassword(){
    for ( i = 0; i <char;i++){

    }

  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt("Enter Password")
// if(prompt == true){
// return Math.random(specialCharacters)
//}
//  for (var i = 8; i<= 128; i++){}

// function makeid(length) {
//   let result = '';
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const charactersLength = characters.length;
//   let counter = 0;
//   while (counter < length) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     counter += 1;
//   }
//   return result;
// }
