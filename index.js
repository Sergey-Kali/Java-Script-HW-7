function showInDOM(className, result) {
  const element = document.querySelector(`.${className}`);
  element.textContent = " " + result;
  if (result >= 0) {
    element.style.color = "green";
  } else {
    element.style.color = "red";
  }
}

function addition(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return console.error(
      `"${firstNumber}" or "${secondNumber}" - is not a number`
    );
  } else {
    const result = firstNumber + secondNumber;
    showInDOM("addition", result);
  }
}

addition(55, 600);

function subtraction(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return console.error(
      `"${firstNumber}" or "${secondNumber}" - is not a number`
    );
  } else {
    const result = firstNumber - secondNumber;
    showInDOM("subtraction", result);
  }
}

subtraction(10, 17);

function multiplication(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return console.error(
      `"${firstNumber}" or "${secondNumber}" - is not a number`
    );
  } else {
    const result = firstNumber * secondNumber;
    showInDOM("multiplication", result);
  }
}

multiplication(5, 8);

function division(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return console.error(
      `"${firstNumber}" or "${secondNumber}" - is not a number`
    );
  } else {
    const result = firstNumber / secondNumber;
    showInDOM("division", result);
  }
}

division(21, 7);

// ------------------------------------------------------------------------------

function showInDOM2(className, result) {
  const element = document.querySelector(`.${className}`);
  element.textContent = " " + result;
  if (result >= 0 && result <= 10) {
    element.style.color = "rgb(0, 255, 0)";
  } else if (result >= 11 && result <= 100) {
    element.style.color = "rgb(0, 187, 0)";
  } else if (result >= 101 && result <= 1000) {
    element.style.color = "rgb(0, 48, 0)";
  } else if (result < 0 && result >= -10) {
    element.style.color = " rgb(255, 156, 156)";
  } else if (result <= -11 && result >= -100) {
    element.style.color = "rgb(253, 0, 0)";
  } else if (result <= -101 && result >= -1000) {
    element.style.color = "rgb(121, 0, 0)";
  } else {
    element.style.color = " rgb(0, 24, 0)";
  }
}

const array = [51, NaN, 337, undefined, 876, 38, "Яблуко", 495, null, 154];

function maximumNumber(newArr) {
  let max = newArr[0];
  for (i = 0; newArr.length > i; i++) {
    if (typeof newArr[i] === "number") {
      if (max < newArr[i]) {
        max = newArr[i];
      }
    }
  }
  showInDOM2("max-value", max);
}

maximumNumber(array);

function minimumNumber(newArr) {
  let min = newArr[0];
  for (let element of newArr) {
    if (typeof element === "number") {
      if (min > element) {
        min = element;
      }
    }
  }
  showInDOM2("min-value", min);
}

minimumNumber(array);
