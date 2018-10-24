

/*

    data-types

    1. simple / primitives ==> values
        a. undefined
        b. string
        c. number
        d. boolean
    2. complex/reference   ==> objects

*/

//---------------------------------------------------
// 1. simple / primitives ==> values
//---------------------------------------------------

//---------------------------------------------------
// a. undefined
//---------------------------------------------------

var v 

//---------------------------------------------------
// b. string
//---------------------------------------------------
var name = "Nag" 
var company = 'Landis' 
var dynamicString1 = "the trainer " + name + " teaching in " + company 
var dynamicString2 = `the trainer ${name} `  // ES6 => string interpolation

var htmlTemplate = `

    <div>
        <h1>${name}</h1>
    </div>

` 

//---------------------------------------------------
//  c. number
//---------------------------------------------------

var count = 12 
var cost = 12.12 


//---------------------------------------------------
// d. boolean
//---------------------------------------------------

var isFound = true 

// imp-note:

// falsy values  ==> false,0,undefined,null,"",NAN


//---------------------------------------------------
// 2. complex/reference   ==> objects
//---------------------------------------------------

/*
    syntax:
    val ref=new Constructor() 
*/

// in ES5,

function Person(name, age) {
    this.name = name 
    this.age = age 
}

var p1 = new Person("Nag", 35) 
var p2 = new Person("Ria", 3) 


// in ES6
class NewPerson {
    constructor(name, age) {
        this.name = name 
        this.age = age 
    }
}


var p3 = new NewPerson("Nag", 35) 
var p4 = new NewPerson("Ria", 3) 


// imp-Note :

/*

    by default,

    all .js-objects are extensible  & configurable

*/

p3.address = "chennai" 
delete p4.age



//---------------------------------------------------
// literal-style objects
//---------------------------------------------------

//---------------------------------------------------
// a. Object
//---------------------------------------------------

var config = new Object() 
config.url = "http://"
config.httpMethod = "GET"
config.onSuccess = function () {
    console.log('im running on success')
}

// or   literal-style

var newConfig = {
    url: "http://",
    httpMethod: 'GET',
    onSuccess: function () {
        console.log('im running on success')
    }
}

//---------------------------------------------------
// b. Array / List
//---------------------------------------------------

var arr = new Array() 
arr[0] = "item-1" 
arr.push("item-2")

// or

var newArr = ["item-1", "item-2"] 

//---------------------------------------------------


//---------------------------------------------------
// c. RegExp
//---------------------------------------------------

var re = new RegExp("\\d{10}") 

// or

var newRe = /\d{10}/ 
var adharPattern = /\d{4}-\d{4}-\d{4}/



//---------------------------------------------------
// c. Function
//---------------------------------------------------

var add = new Function('n1', 'n2', 'var result=n1+n2; return result') 

// or

function add(n1, n2) {
    var result = n1 + n2;  return result
}

//-------------------------------------------------------


// How to access obj's prperties ?

/*

    way-1 : '.' notation, 
    way-2 : '[]' notation , if property has 'space' or 'dash' or 'digit'

*/

var person = {
    name: 'Nag',
    'home-address': 'chennai',
    1: "one",
    100: 'hundred'
} 

person.name = "Nag N" 
console.log(person.name) 

person["home-address"] = "delhi"
console.log(person["home-address"]) 


console.log(person[1]) 


//-------------------------------------------------------

