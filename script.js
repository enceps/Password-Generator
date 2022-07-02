// Assignment code here

// stings of characters users may choose
const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

//function starts upon event click
 function generatePassword() {
  var passwordCharSet = "";

  var length = window.prompt("Length of Password");

  //restart password prompts if length is under 8 or over 128

  if (length <= 8) {
    alert("password must be more than 8 characters and under 128 characters");
generatePassword();

  } 
  else if (length >= 128) {
    alert("password must be more than 8 characters and under 128 characters");
generatePassword();
  }
  
//prompts continue if length is legal

  else {

  var lowercase = window.confirm("Use Lowercase?");



  if (lowercase) {
    passwordCharSet += key_strings.lowercase;
  };

  var uppercase = window.confirm("Use Uppercase?");
  if (uppercase) {
    passwordCharSet += key_strings.uppercase;
  };

  var symbols = window.confirm("Use symbols?");
  if (symbols) {
    passwordCharSet += key_strings.symbol;
  };

  var numbers = window.confirm("Use numbers?");
  if (numbers) {
    passwordCharSet += key_strings.number;
  };

 if (!numbers && !symbols && !uppercase && !lowercase){
  alert("choose atleast one");
 }
 



var password = "";

  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }

  return password



      
}
  }
 
console.log(generatePassword)

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
