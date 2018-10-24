

/*
  How to create function in .js-lang?

  2 ways

  1. function declaration

    => Named function
    => function-obj created at scope-creation-phase
    => always get hoist function-obj

  2. function expression

    => anonymous function
    => function-obj created at scope-execution-phase
    => we can invoke after function-expression

*/

//-------------------------------------------------------
// 1. function declaration
//-------------------------------------------------------

/* console.log(add(12, 13));

function add(n1, n2) {
    return n1 + n2;
}

console.log(add(12, 13)); */


//-------------------------------------------------------



//-------------------------------------------------------
// 2. function expression / anonymous-function 
//-------------------------------------------------------
/* console.log(add(12, 13)); // error
let add = function (n1, n2) { return n1 + n2 }
console.log(add(12, 13)); */



//-------------------------------------------------------
// function parameters
//-------------------------------------------------------

/* function func(a,b,c) {
    console.dir(arguments[0]);
    console.dir(arguments[1]);
    console.dir(arguments[2]);
}
func()
func(12);
func(12, 13, 14) */



//  can we overload functions?  No

/* function getFood() {
    return "No Food"
}
function getFood(pay) {
    if (arguments.length === 0) return "get out"
    return "Biryani"
} */

// console.log(getFood())

//-------------------------------------------------------
// function with default params  & rest params ( es6 )
//-------------------------------------------------------

/* function func(a = 1, b = 2, ...rest) {
    // if (!a) a = 1
    // if (!b) b = 2
    // or
    // a = a || 1;
    // b = b || 2;
    console.log(a);
    console.log(b);
    console.log(Array.isArray(rest))
    console.log(rest)
}
func(undefined, 20, 30, 40); */



//-------------------------------------------------------
//  FP principles
//-------------------------------------------------------

/*

in .js-lang,  

        by default, functions are first-class values/citizens
   
        - A function can be stored in a variable or value/object
        - A parameter of a function can be a function
        - The return value of a function can be a function

*/

//-------------------------------------------------------
// - A function can be stored in a variable or value
//-------------------------------------------------------

/* function greet() {
    console.log("hello");
}

let sayHello = greet;
sayHello(); */

//-------------------------------------------------------
// - A parameter of a function can be a function
//-------------------------------------------------------

/* function greet(f) {
    if (f) {
        f(); return
    }
    console.log("Hello...");
}
greet();
let hi = function () { console.log("Namasthe") }
let tn = function () { console.log("Vanakkam") }
greet(hi)
greet(tn) */

// e.g
/* let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort();
let asc = function (x, y) { return x - y }
nums.sort(asc);
let desc = function (x, y) { return y - x }
nums.sort(desc); */


//-------------------------------------------------------
// - The return value of a function can be a function
//-------------------------------------------------------

/* function teach() {
    console.log('teaching...');
    let learn = function () { console.log('learning...') }
    console.log('teaching...ends');
    return learn;
}

let learnFunc = teach();
learnFunc()
learnFunc(); */


//-------------------------------------------------------
// Higher-Order-function
//-------------------------------------------------------

/*

    -> function can take another-function as param
    //or
    -> function can return another-function as output

*/

//------------------------------------------------------
// Function Closure
//------------------------------------------------------

/*


A closure is a function having access to the parent scope, 
even after the parent function has closed

*/

/* function teach(sub) {
    console.log(`teaching ${sub}`)
    let notes = `${sub}-notes`
    let fun = "bla bla bla"
    function learn() {
        console.log(`learning with ${notes}`);
    }
    //learn();
    console.log('teaching ends');
    return learn;
} 

let learnFunc = teach('.js');
learnFunc();
*/



/*
    where/why we need closures ?

    => to abstract public-behav of any module to others

        e.g counter-module

        - count
        - doCount
        - getCount

*/


// e.g counter-module
//------------------------------------------------------

// self-executable function  // IIFE  ==> module-design pattern

/* const counter = (function() {
    let count = 0; // private
    function doCount() {
        count++
    }
    function getCount() {
        return count;
    }
    return {
        inc: doCount,
        get: getCount
    }
})() */


//------------------------------------------------------





