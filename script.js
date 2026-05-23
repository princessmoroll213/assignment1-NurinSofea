// Calculator

function add(){

    let num1 =
    parseFloat(document.getElementById("num1").value);

    let num2 =
    parseFloat(document.getElementById("num2").value);

    let result = num1 + num2;

    document.getElementById("calcResult").innerHTML =
    "Result: " + result;
}

function subtract(){

    let num1 =
    parseFloat(document.getElementById("num1").value);

    let num2 =
    parseFloat(document.getElementById("num2").value);

    let result = num1 - num2;

    document.getElementById("calcResult").innerHTML =
    "Result: " + result;
}

function multiply(){

    let num1 =
    parseFloat(document.getElementById("num1").value);

    let num2 =
    parseFloat(document.getElementById("num2").value);

    let result = num1 * num2;

    document.getElementById("calcResult").innerHTML =
    "Result: " + result;
}

function divide(){

    let num1 =
    parseFloat(document.getElementById("num1").value);

    let num2 =
    parseFloat(document.getElementById("num2").value);

    let result = num1 / num2;

    document.getElementById("calcResult").innerHTML =
    "Result: " + result;
}

// BMI

function calculateBMI(){

    let weight =
    parseFloat(document.getElementById("weight").value);

    let height =
    parseFloat(document.getElementById("height").value);

    let bmi = weight / (height * height);

    document.getElementById("bmiResult").innerHTML =
    "BMI: " + bmi.toFixed(2);
}

// Tax

function calculateTax(){

    let income =
    parseFloat(document.getElementById("income").value);

    let tax = income * 0.05;

    document.getElementById("taxResult").innerHTML =
    "Estimated Tax: RM " + tax;
}

// Unit Converter

function cmToM(){

    let value =
    parseFloat(document.getElementById("unitInput").value);

    let result = value / 100;

    document.getElementById("unitResult").innerHTML =
    result + " metre";
}

function mToCm(){

    let value =
    parseFloat(document.getElementById("unitInput").value);

    let result = value * 100;

    document.getElementById("unitResult").innerHTML =
    result + " cm";
}

function mToKm(){

    let value =
    parseFloat(document.getElementById("unitInput").value);

    let result = value / 1000;

    document.getElementById("unitResult").innerHTML =
    result + " km";
}

function kmToM(){

    let value =
    parseFloat(document.getElementById("unitInput").value);

    let result = value * 1000;

    document.getElementById("unitResult").innerHTML =
    result + " metre";
}