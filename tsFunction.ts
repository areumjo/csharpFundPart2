/* functions */

// named functions
function addNumber (x:number, y:number): number {
  return x + y;
}
addNumber(20, 23);

// anonymous functions
let addNumberAnony = function (x:number, y:number): number {
  return x + y;
}
addNumberAnony(3,2);

let sum = function (input: number[]): number {

  let total:number = 0;
  for (let i=0; i<input.length; i++) {
    if (isNaN(input[i])) continue;
    total += Number(input[i]);
  }
  return total;
}

console.log(sum([3,2342,235,23]));
// console.log(sum([1, 'two', 3]); // not assignable

// arrow functions
let addNumber2 = (x: number, y: number, z?: number): number => {
  if ((z === undefined)) return x + y;
  else return x+y+z;
}

function displayAlert(message: string | number) {
  if (typeof(message) == "string") console.log('The message is ' + message);
  else console.log("Number was entered.");
}

displayAlert("HELLO world");
displayAlert(234);

console.log(addNumber2(10,20,30));
console.log(addNumber2(10,20));


// rest params
let addAllNumbers = (firstNumber: number, ... restOfNumbers: number[]): number => {

  let total: number = firstNumber;
  for (let numb in restOfNumbers) {
    total += restOfNumbers[numb];
  }
  return total;
}
// addAllNumbers(2, 3, "three");  // not assignable
console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7));
console.log(addAllNumbers(2));

// deconstructed object params
interface Message {
  text: string;
  sender: string;
}

function displayMessage ({text, sender}: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});


// define a function type using `type` alias or `interface`
// - difference between type vs interface
// - interface can be extended, but type alias can't
type calculator = (x: number, y: number) => number;
// interface Calculator {
//   (x: number, y: number): number;
// }

let addNumbers: calculator = (x: number, y:number): number => x + y;
let subtractNumbers: calculator = (x: number, y:number): number => x - y;

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
  if (operation === 'add') return addNumbers;
  else return subtractNumbers;
}

console.log(doCalculation('add')(1, 2))




/* Module 4: Develop typed functions using TypeScript Lab Start  */

/*  EXERCISE 1
    TODO: Declare a new function type for the sortDescending and sortAscending functions. */
type comparingFunction = (a: number, b: number) => number;

/*  TODO: Convert the sortDescending and sortAscending functions to arrow
    functions. */
let sortDescending: comparingFunction = (a: number, b: number) => {
  if (a > b) return -1;
  else if (b > a) return 1;
  else return 0;
}

let sortAscending: comparingFunction = (a, b) => {
  if (a > b) return 1;
  else if (b > a) return -1;
  else return 0;
}

/*  The buildArray function builds an array of unique random numbers containing the number
    of items based on the number passed to it. The sortOrder parameter determines
    whether to sort the array in ascending or descending order. */

/*  TODO: Update the BuildArray function. */

function buildArray(items:number, sortOrder:string) {
    let randomNumbers = [];
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
        } else {
          counter--;
        }
        // console.log(`check: ${nextNumber}, ${randomNumbers}, ${counter}`);
    }
    if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
}

let myArray1 = buildArray(3, 'ascending'); // [ 3, 10, 77 ]
let myArray2 = buildArray(4, 'descending'); // [ 81, 46, 36, 11 ]


/*  EXERCISE 2
    TODO: Update the LoanCalculator function. */

function loanCalculator (principle: number, interestRate: number, months = 12) {
    let interest = interestRate / 1200;   // Calculates the monthly interest rate
    let payment;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}

console.log(loanCalculator(1000, 5));
