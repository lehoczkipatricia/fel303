var diameterInput = document.querySelector("#diameter");
var calcButton = document.querySelector("#calcButton");
function calcArea(diameter) {
    var radius = diameter / 2;
    var area = Math.pow(radius, 2) * Math.PI;
    var areaPart = area / 2;
    return areaPart;
}
calcButton.addEventListener('click', function () {
    var diameter = Number(diameterInput.value);
    var areaPart = calcArea(diameter);
    console.log(areaPart);
});
