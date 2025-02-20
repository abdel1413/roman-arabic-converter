const inputValue = document.getElementById("number");
console.log(inputValue.value);
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const converter = () => {
  let romLetter = "";
  if (!inputValue.value) {
    console.log("something went wrong");
    output.innerText = "Please enter a valid number";
  } else if (inputValue.value < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (inputValue.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    while (inputValue.value > 0) {
      if (inputValue.value < 4) {
        console.log(inputValue);
        romLetter += "I";
        inputValue.value -= 1;
        // output.innerText = romLetter
      } else if (inputValue.value == 4) {
        romLetter += "IV";
        inputValue.value -= 4;
        // output.innerText = romLetter
      } else if (inputValue.value >= 5 && inputValue.value < 9) {
        romLetter += "V";
        inputValue.value -= 5;
        //  output.innerText = romLetter;
      } else if (inputValue.value == 9) {
        romLetter += "IX";
        inputValue.value -= 9;
        //  output.innerText = romLetter
      } else if (inputValue.value >= 10 && inputValue.value < 40) {
        romLetter += "X";
        inputValue.value -= 10;
        //  output.innerText = romLetter
      } else if (inputValue.value == 40) {
        romLetter = "XL";
        inputValue.value -= 40;
        //  output.innerText = romLetter
      } else if (inputValue.value >= 40 && inputValue.value < 50) {
        romLetter += "XL";
        inputValue.value -= 40;
        //  output.innerText = romLetter
      } else if (inputValue.value == 50) {
        romLetter += "L";
        inputValue.value -= 50;
        // output.innerText = romLetter
      } else if (inputValue.value >= 50 && inputValue.value < 90) {
        romLetter += "L";
        inputValue.value -= 50;
        //  output.innerText = romLetter;
      } else if (inputValue.value >= 90 && inputValue.value < 100) {
        romLetter += "XC";
        inputValue.value -= 90;
        //  output.innerText = romLetter;
      } else if (inputValue.value == 90) {
        romLetter = "XC";
        inputValue.value -= 90;
        //  output.innerText = romLetter;
      } else if (inputValue.value >= 100 && inputValue.value < 400) {
        romLetter += "C";
        inputValue.value -= 100;
        //  output.innerText = romLetter;
      } else if (inputValue.value == 100) {
        romLetter = "C";
        inputValue.value -= 100;
        // output.innerText = romLetter;
      } else if (inputValue.value == 400) {
        romLetter = "CD";
        inputValue.value -= 400;
        //  output.innerText = romLetter;
      } else if (inputValue.value >= 400 && inputValue.value < 500) {
        romLetter += "CD";
        inputValue.value -= 400;
        //  output.innerText = romLetter;
      } else if (inputValue.value == 500) {
        romLetter = "D";
        inputValue.value -= 500;
        //  output.innerText = romLetter;
      } else if (inputValue.value >= 500 && inputValue.value < 900) {
        console.log("somthing here", inputValue.value);
        romLetter += "D";
        inputValue.value -= 500;
        //  output.innerText = romLetter;
      } else if (inputValue.value == 900) {
        romLetter = "CM";
        inputValue.value -= 900;
        //  output.innerText = romLetter;
      } else if (inputValue.value >= 900 && inputValue.value < 1000) {
        romLetter += "CM";
        inputValue.value -= 900;
        //  output.innerText = romLetter;
      } else if (inputValue.value == 1000) {
        romLetter = "M";
        inputValue.value -= 1000;
        //  output.innerText = romLetter;
      } else if (inputValue.value >= 1000) {
        romLetter += "M";
        inputValue.value -= 1000;
        //  output.innerText = romLetter;
      } else {
        inputValue.value -= 1;
      }
    }
    output.innerText = romLetter;
  }
};

convertBtn.addEventListener("click", converter);
