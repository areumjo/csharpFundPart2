/*
When to use interface
* create shorthand names for commonly used types (type checking benefit)
* drive consistency across as set of objects
* describg exsiting JS APIs (jQuery) and clarify functions params and return types

difference between interface vs type
* interface : a way to describe data shapes (object) // "extendable"
* type : a type of data (union/primitive/intersection/tuple) // can't be reopended to add new properties
    * can only use type alias to describe union/tuple

TS interface shouldn't start with the letter "I"

Extend an interface
* enables to copy the members of one interface into another // flexibility on separating interfaces into resuable componenets
    * 2 interfaces can have the same property if the property has the exact same name & type


*/

interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string; // optional property can prevent error when a property is omitted
}

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberrry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let myIceCream: Sundae = {
  flavor: "matcha",
  scoops: 3,
  sauce: "chocolate",
}

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
  } else {
      return 'Your order will be ready soon!';
  }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));


/*
indexable types
* index signature : describe the type you cnan use to index into the object, along with the corresponding return types when indexing
*/

interface IceCreamArray {
  [index: number]: string;
}

let myIceCreamArray: IceCreamArray;
myIceCreamArray = ['choco', 'vanilla', 'rasberry'];
let myStr: string = myIceCreamArray[0];

console.log(`index signature ${myStr}`);

/*
use interface to describe JS API
* interface can describe the shape of API data and return type

*/

const fetchURL = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}

async function showPost() {
  let posts = await fetchPost(fetchURL);
  let firstPost = posts[0];
  console.log(`The num of posts: ${posts.length}`);
  console.log(`Post #: ${firstPost.id}`);
  console.log(`Author: ${firstPost.userId == 1 ? "Admin" : firstPost.userId.toString()}`)
  console.log(`Body: ${firstPost.body}`);
}

// showPost();


console.log("########### LAB #############");

/* Module 3: Implement interfaces in TypeScript
 Lab Start  */

/*  EXERCISE 1
  TODO: Declare the Loan interface. */
interface Loan {
  principal: number,
  interestRate: number,
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan{
  months: number // total # of months
}


/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerm : Loan) {
  // Calculates the monthly payment of an interest only loan

  let payment:number  = loanTerm.principal * loanTerm.interestRate / 1200;
  return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerm : ConventionalLoan) {
  // Calculates the monthly payment of a conventional loan

  let interest: number = loanTerm.interestRate / 1200;
  let payment: number;
  payment = loanTerm.principal * interest / (1 - (Math.pow(1/(1 + interest), loanTerm.months)));

  return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
let conventionalPayment = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"
