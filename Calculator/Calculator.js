const additional = "+";
const subtraction = "-";
const multiplication = "x";
const division = ":";
const clear = "C";
const equal = "=";
var hasChooseOperand = false;
var statement = "";
var result = document.getElementById('result');

function enterNumber(number) {
    hasChooseOperand = false;
    result.value += number;
    statement += number;
} 
function enterOperator(operator) {
    if (hasChooseOperand == false) {
        switch (operator) {
            case clear: {
                result.value = "";
                statement = "";
                hasChooseOperand = true;
                break;
            }
            case additional: 
            case subtract: {
                result.value += operator;
                statement += operator;
                hasChooseOperand = true;
                break;
            }
            case multiplication: {
                result.value += operator;
                statement += "*";
                hasChooseOperand = true;
                break;
            }
            case equal: {
                result.value = eval(statement);
                statement = "";
                hasChooseOperand = false;
                break;
            }
        }
    }
}




