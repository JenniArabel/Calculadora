let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("resultado").value = displayValue;
}

function calcular() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("resultado").value = displayValue;
    } catch (error) {
        document.getElementById("resultado").value = "Error";
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("resultado").value = "";
}