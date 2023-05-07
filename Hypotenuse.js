const sideInput = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-button");
const outputMessage = document.querySelector("#output-message")

function calculateSumOfSquares(a,b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares
}



function calculateHypotenuse() {
   const sumOfSquares = calculateSumOfSquares(Number(sideInput[0].value),Number(sideInput[1].value));
   const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
   outputMessage.innerText = "The length of hypotenuse is " + lengthOfHypotenuse
}

calculateBtn.addEventListener("click",calculateHypotenuse)