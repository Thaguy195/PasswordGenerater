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


