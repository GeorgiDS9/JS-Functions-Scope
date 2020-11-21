// FUNCTIONS/SCOPING

// a. Passing functions as arguments

// 1. Example
function printVar (variable) {
  console.log(`Hello, ${variable}`);
}

function func (x) {
  x ('Hi world');
}

func (printVar); 

printVar(78);

// 2. Example
function sumCallback (a, b, callback) {
  callback(a + b);
}

function handleSum (sum){
  console.log(sum);
}

sumCallback (1, 2, handleSum);

// 3. Example

function printVar (variable) {
    console.log(variable);
  }

function printName (name, callback) {
  callback (`Hello, ${name}`);
}

// printName('Georgi', printVar);

// Or we can write this way:

printName('Georgi', function (variable){
  console.log(variable);
});


// b. ARROW FUNCTIONS

// 1. Example

function sum (a, b) {
  return a + b;
}
// Instead of the word "function", we set it as a variable
let sumArrow = (a, b) => a + b;

console.log(sumArrow(1, 2)); // 3

console.log(sumArrow); // (a, b) => a + b

// 2. Example

// ES5 function
function printName (name) {
  console.log(name);
}

// ES6 Arrow function
let printNameArrow = name => {console.log(name)};

printNameArrow ('Georgi');

// 3. Example
function printHi(name) {
  return "Hi" + name;
}

// Arrow function version
let printHiArrow = name => `Hi ${name}`;

console.log(printHiArrow('Alex')); // Hi Alex

// 4. Example
function hi(){
  console.log ('hi');
}

let hiArrow = () => console.log ('hi');

hiArrow ();

// 5. Example

function funct (x, callback){
  callback(x);
}

funct (10, function (variable){
  console.log(variable);
})

// Arrow function version
funct (10, variable => console.log(variable));


// c. Stack Trace and Call stack ~ great tools for debugging!

// 1. Example

function doStuff (a, b, name) {
  print(sum(a, b));
  print(sayHi(name));
}

function print (variable){
  console.log(variable);
}

function sum(a, b){
  return a + b;
}

function sayHi(name){
  return `Hi ${name}`;
}

doStuff(1, 2, 'Georgi');

// d. Hoisting ~ JS moves the files at the top, before the console.log; it does NOT work with arrow functions because variables never get hoisted;

// 1. Example

console.log(sum(1, 2));

function sum (a, b){
  return a + b;
}

// let sumArrow = (a, b) => a + b;

// console.log(sum(1, 2));


// e. Scoping ~ 

// 1. Example

// The sayHello function has access to the global scope, but the outer scope does not have access to the local scope (the function)

function sayHello (name){
  let a = 2;
  let result = `Hello ${name} ${a}`;
  console.log(result);
}
let a = 1;
sayHello ('Georgi'); // Hello Georgi 2

// Scope can be defined by writing codein {}

// 3 scopes below. The var "a" is not defined in the outer scope, only locally.

{
  let a = 1;
  console.log(a);
}

{
  let a = 2;
  console.log(a);
}

{
  let a = 3;
  console.log(a);
}

// f. Closures

// 1. Example

// the Inner scope can access the outer scope and is able to access the var 'c', 'variable' and 'variable2' which is inside the scope. Thsi is a closure.

function print(variable){

  let c = 3;
  return function func (variable2){
    console.log(variable);
    console.log(variable2);
    console.log(c);
  }
}

let b =  print(1);
b(2);

