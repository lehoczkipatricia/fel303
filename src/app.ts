const diameterInput = 
    document.querySelector("#diameter") as 
    HTMLInputElement;
const resultInput = 
    document.querySelector("#result") as 
    HTMLInputElement;

const calcButton = 
    document.querySelector("#calcButton");


function calcArea(diameter: number): number {
    let radius = diameter/2;
    let area = Math.pow(radius, 2) * Math.PI;
    let areaPart = area/2;
    return areaPart; 
}

calcButton.addEventListener('click', () => {
    let diameter = Number(diameterInput.value);
    let areaPart = calcArea(diameter);
    console.log(areaPart);
    resultInput.value = String(areaPart.toFixed(2));
})
