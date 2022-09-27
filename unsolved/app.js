console.log('Your JS file is linked!');

//1. FizzBuzz
// Create variable myNumber
// Check that the value of the myNumber is of type number
// If myNumber is not a number, print 'This is not a number' to the console.
// If value of myNumber is a multiple of 3 print 'Fizz' to the console
// If value of myNumber is a multiple of 5 print 'Buzz' to the console
// If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print FizzBuzz to the console
// If the value of myNumber is any other number print the value of myNumber to the console.
// Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9

//Write your code for FizzBuzz below this line:
let myNumber
typeof myNumber
if (isNaN (myNumber))  {
    console.log ('This is not a number'); 
}
    
  if (myNumber % 3 === 0
    ) {
    console.log('Fizz');
  }

  if (myNumber % 3 === 0
    ) {
    console.log('Buzz');
  }

  if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log('FizzBuzz');
  }

  else {
    console.log(myNumber);
  }



//2. E-Commerce Item list

// Use a swtich statement to print the price of the each item in the store to the console.
// Ex. If the value of the variable is 'shoes' then, the statement "Shoes are $50" should be printed to the console.
// Reference: Codecademy lesson 10
// Items:
// Shoes- $50
// Jeans- $25
// Hat- $12
// Socks- $2
// If the variable input is not an item in the store, then print 'Invalid Item' to the console.

//Write your code for the E-Commerce item list below this line:

let itemPrice = 'shoes';
 
switch (itemPrice) {
  case 'shoes':
    console.log('Shoes are $50');
    break;
  case 'jeans':
    console.log('Jeans are $25');
    break;
  case 'hat':
    console.log('Hats are $12')
  case 'socks':
    console.log('Socks are $2')
  default:
    console.log('Invalid item');
    break;
}



//3. Print a random integer (whole number) between 50(inclusive) and 100(exclusive) to the console
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:

function getRandomInt(min, max) {
    min = Math.ceil(50);
    max = Math.floor(100);
    return Math.floor(Math.random() * (100 - 50) + 50); // The maximum is exclusive and the minimum is inclusive
  }