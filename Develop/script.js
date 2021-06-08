const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

const upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialOptions = [" ", "!", "\"", "#", "$", "%", "&", "@", "(", ")"];
const numericOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let passwordType = "";
let passwordLength = 0;
let password = [];
let finalPassword = "";

const createPassword = () => {
  if (passwordType === "lowercase") {
    for (let i = 0; i < passwordLength; i++) {
      const randomInt = Math.floor(Math.random() * 25);
      password.push(lowerCaseOptions[randomInt]);
    }
    finalPassword = password.join("");
    passwordText.value = finalPassword;
    console.log(finalPassword);
  }

  if (passwordType === "uppercase") {
    for (let i = 0; i < passwordLength; i++) {
      const randomInt = Math.floor(Math.random() * 25);
      password.push(upperCaseOptions[randomInt]);
    }
    finalPassword = password.join("");
    passwordText.value = finalPassword;
  }

  if (passwordType === "numeric") {
    for (let i = 0; i < passwordLength; i++) {
      const randomInt = Math.floor(Math.random() * 9);
      password.push(numericOptions[randomInt]);
    }
    finalPassword = password.join("");
    passwordText.value = finalPassword;
  }

  if (passwordType === "special") {
    for (let i = 0; i < passwordLength; i++) {
      const randomInt = Math.floor(Math.random() * 9);
      password.push(specialOptions[randomInt]);
    }
    finalPassword = password.join("");
    passwordText.value = finalPassword;
  }
}


const generatePassword = () => {
  password = [];
  finalPassword = "";
  const findPasswordLength = prompt("How long should your password be (8-128 characters)?");
    if (findPasswordLength < 8) {
      alert("Please enter a number equal to or greater than 8 characters");
    }
    else if (findPasswordLength > 128) {
      alert("Please enter a number equal to or less than 128 characters");
    }
    else {
      passwordLength = findPasswordLength;
      const findPasswordType = prompt("What kind of characters would you like your password to contain (lowercase, uppercase, numeric, or special)?").toLowerCase();
      if (findPasswordType === "lowercase") {
        passwordType = "lowercase";
      }
      else if (findPasswordType === "uppercase") {
        passwordType = "uppercase";
      }
      else if (findPasswordType === "numeric") {
        passwordType = "numeric";
      }
      else if (findPasswordType === "special") {
        passwordType = "special";
      }
      else {
        alert("Please input one of the listed options")
      }
    }
    assemblePassword();
}
generateBtn.addEventListener("click", writePassword);