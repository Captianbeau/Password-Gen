var specialCharacters = ['@','$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '“', '“”', '_'];
var numbers = ['1','2','3','4','5','6','7','8','9'];
var upletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var char = 15
var num = true
var charS = true
var charU = true
var charL = true

if (num && charS && charU && charL){
    var requirements = lowletters.concat(specialCharacters,upletters,numbers)
   
   
} else(num! &&  charS && charU && charL){
    var requirements = lowletters.concat(specialCharacters,upletters,)

} 
for( i = 0; i < char; i++){
var password = requirements[Math.floor(Math.random() * requirements.length)];
    }
    console.log(password)