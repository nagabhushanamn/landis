"use strict"


//-------------------------------------------------------
/*
    this ==> owner of current execution-context/scope
*/
//-------------------------------------------------------
/* 
let pName = "Global";
let person = {
    pName: 'Nag',
    sayName: function () {
        let pName = "Local";
        console.log('im ' + pName); // reads scope hirarchy
        console.log('im ' + person.pName) // reads referencing obj's data
        console.log('im ' + this.pName); // reads scope owner's data
    }
};
// person.sayName();
let oldPerson = person;
person = { pName: 'Ria' }
oldPerson.sayName(); */

//-------------------------------------------------------

/*
    function-binding
    ------------------

    types
    ----------

    => static 
    => dynamic


*/

//-------------------------------------------------------
// static function-binding
//-------------------------------------------------------

/* function sayNameForAll() {
    console.log(this);
    console.log('im ' + this.name);
}

let p1 = {
    name: 'Nag',
    sayName: sayNameForAll
};
let p2 = {
    name: 'Ria',
    sayName: sayNameForAll
};
//sayNameForAll(); // error , becoz 'this' ==> undefined
p1.sayName(); // im Nag
p2.sayName(); // im Ria
 */

//---------------------------------------------------------
// dynamic function-binding
//---------------------------------------------------------
/* 
let tnr = { name: 'Nag' }

function ibmTraining(sub, duration) {
    console.log(this.name + " giving training to IBM  on " + sub + " : " + duration)
}

function landisTraining(sub, duration) {
    console.log(this.name + " giving training to Landis " + sub + " : " + duration)
}


// way-1:  ==> call
ibmTraining.call(tnr, "devops", 5);
landisTraining.call(tnr, "UI", 3)

//way-2:  ==> apply
ibmTraining.apply(tnr, ["devops", 5])
landisTraining.apply(tnr, ["UI", 3])

// way-3:  ==> bind
let landisTrainingByNag = landisTraining.bind(tnr, "UI", 3)
landisTrainingByNag()
landisTrainingByNag();

let ibmTrainingByNag = ibmTraining.bind(tnr);
ibmTrainingByNag('scala', 10);
ibmTrainingByNag('spark', 5);

 */



// summary

/* function func() {
    console.log(this);
}
func();
let o1 = { name: 'O1', f: func }  // static function-binding
o1.f();
let o2 = { name: 'O2' }
func.call(o2)   // dynamic function-binding
 */


//---------------------------------------------------------------


// Quiz

// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         let self = this;
//         let doLearn = function () {
//             console.log(this.name + " learning .js from " + self.name);
//         }
//         console.log(" teaching .js ends");
//         return doLearn;
//     }
// };

// let e1 = { name: 'E1' }

// // week-1
// let doLearn = tnr.doTeach();
// // doLearn(); // error
// doLearn.call(e1);

// //week-2
// let tempTnr = { name: "Ria" }
// doLearn = tnr.doTeach.call(tempTnr);
// doLearn.call(e1);



//---------------------------------------------------------------


// mini-app


function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching .js");
            let self = this;
            let doLearn = function () {
                console.log(this.name + " learning .js from " + self.name);
            }
            console.log('teaching ends');
            return doLearn
        }
    }
    function Employee(name) {
        this.name = name;
    }
    let tnr = new Trainer('Nag');
    let e1 = new Employee('E1')
    let e2 = new Employee('E2')
    let doLearn = tnr.doTeach();
    doLearn.call(e1)
    doLearn.call(e2)
}
sessionStart();





