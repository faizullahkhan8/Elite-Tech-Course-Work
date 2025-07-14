// VARIABLE DECLARATION:
var variable_with_var = 0; // old keyword, can be redeclare with the same name, and can be accessed out of scope.
let variable_with_let = 0; // new keyword, cannot be redeclare with the same name, cannot be accessed out of scope.
const variable_with_const = 2.27; // once initiallized cannot be changed during program execution.

// DATA TYPES:
let number = 10; // can be used for both integer and floot.
let string = "Hello world!";
let boolean = true; // true = 1 and false = 0.
let undefined_variable = undefined; // if don't know in start and want to set later on.
let null_variable = null; // nothing

// ARTHIMATIC OPERATOR
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);

// COMPERISON OPERATOR
5 === 5; // check both value and datatype
5 == 5; // check only value
5 !== 5; // not equal to.
5 != 5; // not equal to.
5 > 5; // greater then
5 < 5; // less then
5 >= 5; // greater then or equal to
5 <= 5; // less then or eqaul to

// LOGICAL OPERATOR
5 > 5 && 5 < 5; // AND: should true bothside.
5 > 5 || 5 < 5; // OR: should true atleast one side.
!true; // negation: invert the value.

// CONDITIONAL STATEMENTS
let age = 18;
if (age >= 18) {
    console.log("You are adult now!");
} else if (age > 10 && age < 18) {
    console.log("You are teen boy");
} else {
    console.log("You are child");
}

// LOOPS
for (let i = 0; i < 100; i++) {
    console.log(`Loading ${i}%`);
}

let j = 100;
while (j < 100) {
    console.log(`Loading ${j}%`);
}

// FUNCTIONS
//[METHOD 1]:
function myFunction(num_1, num_2) {
    return num_1 + num_2;
}

// [METHOD 2];
const greeting = (name) => {
    console.log(`Hello ${name}!`);
};

console.log(myFunction(12, 12));
greeting("Faiz Ullah Khan");
