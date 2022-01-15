// global dom for password button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Welcome Message
  window.alert("Welcome to Generate Password");

  //ask how many charactors the password will be
  var passwordCount = window.prompt(
    "How many charactors do you want your password to have (between 8-128)?"
  );
  while (passwordCount <= 7 || passwordCount >= 129) {
    passwordCount = window.prompt(
      "Please try again - choose a number between 8-128"
    );
  }

  console.log([passwordCount]);

  //if charactor length is under 8 or over 128, then reset to beginning

  var upperCase = window.confirm(
    "Do you want Uppercase Letters in your password?"
  );
  console.log([upperCase]);
  var lowerCase = window.confirm(
    "Do you want Lowercase Letters in your password?"
  );
  console.log([lowerCase]);
  var number = window.confirm("Do you want Numbers in your password?");
  console.log([number]);
  var symbol = window.confirm("Do you want Symbols in your password?");
  console.log([symbol]);

  const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCases = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*<>?/+";

  var useChar = "";
  if (upperCase) {
    useChar = useChar + upperCases;
  }
  if (lowerCase) {
    useChar = useChar + lowerCases;
  }
  if (number) {
    useChar = useChar + numbers;
  }
  if (symbol) {
    useChar = useChar + symbols;
  }

  var generatedPassword = "";
  for (var i = 0; i < passwordCount; i++) {
    const randomTinyFloat = Math.random(); // returns a random floating point value between 0 and .9 repeating
    const randomFloat = randomTinyFloat * useChar.length; // turns that into a floating point number between 0 and useChar.length
    const randomInteger = Math.floor(randomFloat); // removes any decimal places and gives just the integer
    const letter = useChar.charAt(randomInteger); // gives the letter in useChars and index provided
    generatedPassword = generatedPassword + letter; // append that letter to the new password
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
