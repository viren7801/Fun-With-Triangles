const areaInput = document.querySelectorAll("#area-input");
const calculateBtn = document.querySelector("#calculate-button");
const outputMessage = document.querySelector("#output-message")


function calculateAreaOfTriangle(a,b){
    const sumOfArea = a*b/2
    return sumOfArea
}

function calculateArea() {
    const sumOfArea = calculateAreaOfTriangle(Number(areaInput[0].value),Number(areaInput[1].value))
    // const areaOfTriangle = Math.sqrt(sumOfArea);
   outputMessage.innerText = "The area of the triangle is " + sumOfArea + "㎠"
}



calculateBtn.addEventListener("click",calculateArea)