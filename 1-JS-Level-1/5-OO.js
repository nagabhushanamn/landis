"use strict"


// ES5

/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old");
} */


//------------------------------------------------

// Es6
/* 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.address = ""
        console.log('Person::constructor');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

// let p1 = new Person('Nag', 35)

class Employee extends Person {

    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary;
        console.log('Employee::constructor');
    }
    saySalary() {
        console.log('i wont');
    }
    askForRaise() {
        return this.salary * 0.02;
    }
}

// let e1 = new Employee('Nag', 35, 1000.00)

class Boss extends Employee {

    askForRaise() {
        return this.salary * 0.2 + super.askForRaise();
    }

}

let boss = new Boss('Nag', 35, 1000)




class Abc {
    static staMethod() {
        //..
    }
}
Abc.staVar1 = 1;
Abc.staVar2 = 2;

Abc.staMethod();
 */


//--------------------------------------------------------

// Obj's constraints

// let person = {
//     name: 'Nag',
//     age: 53
// }
// Object.preventExtensions(person);
// Object.seal(person);
//Object.freeze(person);


// person.newProperty = "bla bla"
// delete person.age;
// person.age = -10;