// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Variable Arrays.

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var symbols = ['~', '!', '#', '$', '%', '^', '&', '*', '-', '_'] 

var newChar = [];

//Button that opens prompt when clicked.
document.querySelector('#generate').addEventListener('click', generatePassword);

function generatePassword() {

  //Confirm using lower case in password.
  var lowCase = confirm("Would you like to use lower case letters in your password?");

  //Confirm using upper case in password.
  var upCase = confirm("Would you like to use upper case letters in your password?");

  //Confirm using numbers in password.
  var num = confirm("Would you like to use numeric characters in your password?");
  
  //Confirm using special characters in password.
  var specChar = confirm("Would you like to use special characters in your password?");

  while(lowCase === false && upCase === false && num === false && specChar === false){
    alert("Please select at least one type of character.")
    var lowCase = confirm("Would you like to use lower case letters in your password?");
    var upCase = confirm("Would you like to use upper case letters in your password?");
    var num = confirm("Would you like to use numeric characters in your password?");
    var specChar = confirm("Would you like to use special characters in your password?");
  }

  // If the character type is selected, then the characters are stored into a new array.
  if (lowCase === true){
    newChar.push(lowerCase);
  }

  if (upCase === true){
    newChar.push(upperCase);
  }

  if (num === true){
    newChar.push(numbers);
  }

  if (specChar === true){
    newChar.push(symbols);
  }

  // console.log(newCharacters) <-- test to see if characters appear in newCharacters array.

  //Length of the password loops if number of characters is <=7 or >=129 or not a number, loops if canceled.
  var passLength = prompt("How many characters would you like your password to contain?");
  while (passLength <= 7 || passLength >= 129 || passLength === null || isNaN(passLength)) {
    alert("Password length must be at least 8 characters to 128 characters");
    var passLength = prompt("How many characters would you like your password to contain?");
  
    
  }

  // console.log(passLength) <-- test to see if passLength is confirmed.

  var newPassword = "";

  for (i=0; i<passLength.length; i++){
    newPassword = newPassword + newChar.charAt(Math.floor(Math.random() *newChar.length));
  }

  return newPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}