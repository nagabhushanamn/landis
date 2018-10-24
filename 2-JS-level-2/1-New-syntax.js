"use strict"

/*


    1. let & const keywords with block-scope
    2. string interpolation
    3. function with default & rest params
    4. OOP with class syntax
    
      -- refer 1-JS-level-1

*/

//--------------------------------------------------
// Object-literal enhancements
//--------------------------------------------------

// Es5
/* 
let name = "Nag";
let age = 35

let person1 = {
    name: name,
    age: age,
    address: 'chennai',
    sayName: function () {
        //..
    }
};


// Es6
let addressType = "office" // home | office | vacation
let prop = "Age";
let person2 = {
    name,
    age,
    [addressType + "-address"]: 'chennai',
    [1 + 2 + 3 + 4]: "ten",
    sayName() {
        //..
    },
    ['say ' + prop]() {

    }
}; */


//--------------------------------------------------
// Object de-structuring
//--------------------------------------------------

// a. object destructuring

// let person = {
//     name: 'Nag',
//     age: 35
// };

// es5
// let myName = person.name;
// let myAge = person.age;


//es6
// let { name: myName, age: myAge } = person;
// let { name: name, age: age } = person;
//or
// let { name, age } = person;

// let name;
// let age;
// ({ name, age } = person)


// b. array de-structuring

// let nums = [10, 20, 30, 40, 50, 60, [70, 70]]

//es5
// let n1 = nums[0];
// let n2 = nums[1];
// let n3 = nums[2];

// es6

// let [n1, n2, n3, n4 = 400, , n6, [n7, n8]] = nums;



//--------------------------------------------------
// spread operator
//--------------------------------------------------


/* function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let nums = [10, 20, 30];
func(nums[0], nums[1], nums[2]);  // es5
// or
func(...nums); // es6
 */

//e.g

// let arr = [1, 3, 5, 7, 9, 4, 6, 8, 10];
// let max = Math.max(...arr);
// console.log(max);


// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];

// let newArr = [...arr1, 4, 5, 6, ...arr2];



//--------------------------------------------------
// symbol type  & iterable objects & for=of loop
//--------------------------------------------------


/*

    ==> unique  & immutable value, used as object identifier propertyF

*/

// let javaSymbol = Symbol('java');
// let jsSymbol = Symbol('js');
// let dotNetSymbol = Symbol('.net');


// let e1 = { name: 'E1', [javaSymbol]: 'java,spring' };
// let e2 = { name: 'E2', [jsSymbol]: 'js,react' };


// e.g

// let menu = ["idly", "vada", "poori"];

// let newMenu = [...menu, "biryani"];
// let [m1, m2] = menu;
// for (let m of menu) {
//     console.log(m);
// }

// how to create custom iterable objects

// let idMaker = {
//     [Symbol.iterator]: function () {
//         let n = 0;
//         return {
//             next: function () {
//                 n++;
//                 return { value: n <= 10 ? n : undefined, done: n <= 10 ? false : true }
//             }
//         }
//     }
// };
// for (let item of idMaker) {
//     console.log(item);
// }

// let ids = [...idMaker];
// let [id1, id2mid3] = idMaker;



//--------------------------------------------------
// Arrow functions  / lambdas
//--------------------------------------------------


// let getPrice = function () {
//     return 100 + 200
// }

// or


// let getPrice = () => {
//     return 100 + 200
// }

// let getPrice = (count) => {
//     return count * (100 + 200)
// }
// or
// let getPrice = count => {
//     return count * (100 + 200)
// }

// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax
// }
//or
// let getPrice = (count, tax) => count * (100 + 200) + tax

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax
//     return total
// }



// when to use  arrow-function ?

// way-1 : to make compact function-argument

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (x, y) { return x - y });
// or
// nums.sort((x, y) => { return x - y });
// or
// nums.sort((x, y) => x - y);
// console.log(nums);


// way-2 : to capture 'this'

/* 
let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        // let askQues = function (q) {
        //     console.log(this.name + " answering " + q);
        // }
        // or
        let askQues = (q) => {
            console.log(this.name + " answering " + q);
        }
        console.log("teaching .js ends");
        return askQues;
    }
};
let askQues = tnr.doTeach();
askQues("Q1");
// askQues.call(tnr, "Q1")


let enemyTnr = {
    name: "Enemy"
}
askQues.call(enemyTnr, "Q2"); */




//---------------------------------------------------
/* 
let regularFunc = function () {
    console.log(this);
}
regularFunc();

let arrowFunction = () => {
    console.log(this);
}
arrowFunction();


let o1 = {
    name: 'O1',
    reg: regularFunc,
    arr: arrowFunction
}
o1.reg();
o1.arr();
 */
//---------------------------------------------------