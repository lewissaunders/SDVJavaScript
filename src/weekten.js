//Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers
// calFunc(3, "+", 4) -> 7


function calcFunc(num1, operator, num2) {
    operator: {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    return operations[operator] (num1, num2)
}


console.log(calcFunc(3, "+", 4));