// Q1
const myBoolean = true;

// Q2
const myString = 'hello world';

// Q3
const firstNumber = 20;

// Q4 
let secondNumber = 40;

// Q5
secondNumber = 80;

// Q6
const myArray = [myBoolean, myString];

// Q7
const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber
};

// Q8
console.log(myObject);

// Q9
const sumProp = myObject.sumProperty;
console.log(sumProp);

// Q10 - Alternate solution
console.log(myObject.firstProperty[1]);