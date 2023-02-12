/* functions */
// named functions
function addNumber(x, y) {
    return x + y;
}
addNumber(20, 23);
// anonymous functions
var addNumberAnony = function (x, y) {
    return x + y;
};
addNumberAnony(3, 2);
var sum = function (input) {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i]))
            continue;
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([3, 2342, 235, 23]));
// console.log(sum([1, 'two', 3]); // not assignable
// arrow functions
var addNumber2 = function (x, y, z) {
    if ((z === undefined))
        return x + y;
    else
        return x + y + z;
};
function displayAlert(message) {
    if (typeof (message) == "string")
        console.log('The message is ' + message);
    else
        console.log("Number was entered.");
}
displayAlert("HELLO world");
displayAlert(234);
console.log(addNumber2(10, 20, 30));
console.log(addNumber2(10, 20));
// rest params
var addAllNumbers = function (firstNumber) {
    var restOfNumbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNumbers[_i - 1] = arguments[_i];
    }
    var total = firstNumber;
    for (var numb in restOfNumbers) {
        total += restOfNumbers[numb];
    }
    return total;
};
// addAllNumbers(2, 3, "three");  // not assignable
console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7));
console.log(addAllNumbers(2));
function displayMessage(_a) {
    var text = _a.text, sender = _a.sender;
    console.log("Message from ".concat(sender, ": ").concat(text));
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
// interface Calculator {
//   (x: number, y: number): number;
// }
var addNumbers = function (x, y) { return x + y; };
var subtractNumbers = function (x, y) { return x - y; };
var doCalculation = function (operation) {
    if (operation === 'add')
        return addNumbers;
    else
        return subtractNumbers;
};
console.log(doCalculation('add')(1, 2));
/*  TODO: Convert the sortDescending and sortAscending functions to arrow
    functions. */
var sortDescending = function (a, b) {
    if (a > b)
        return -1;
    else if (b > a)
        return 1;
    else
        return 0;
};
var sortAscending = function (a, b) {
    if (a > b)
        return 1;
    else if (b > a)
        return -1;
    else
        return 0;
};
/*  The buildArray function builds an array of unique random numbers containing the number
    of items based on the number passed to it. The sortOrder parameter determines
    whether to sort the array in ascending or descending order. */
/*  TODO: Update the BuildArray function. */
function buildArray(items, sortOrder) {
    var randomNumbers = [];
    var nextNumber;
    for (var counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
        console.log("check: ".concat(nextNumber, ", ").concat(randomNumbers, ", ").concat(counter));
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
var myArray1 = buildArray(3, 'ascending'); // [ 3, 10, 77 ]
var myArray2 = buildArray(4, 'descending'); // [ 81, 46, 36, 11 ]
/*  EXERCISE 2
    TODO: Update the LoanCalculator function. */
function loanCalculator(principle, interestRate, months) {
    if (months === void 0) { months = 12; }
    var interest = interestRate / 1200; // Calculates the monthly interest rate
    var payment;
    payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return payment.toFixed(2);
}
console.log(loanCalculator(1000, 5));
