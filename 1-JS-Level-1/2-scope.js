

/*

    //---------------------------------------------------
    scope / execution-context
    //---------------------------------------------------

    memory/stack-frame with arg & local variables to execute function

    phase-1: creation / push 

     =>  all variables declared with 'var' keyword any-where in scope,
         always get hoist with default value  

    phase-2: execution / pop

     => instructin execures in seq.

     //---------------------------------------------------

     by default, .js-runtime has one default/global-scope 

     //---------------------------------------------------

     imp-note :

     every function invocation creates new-scope, 
     which is child of in which scope that function has declared or created

*/

//---------------------------------------------------

// console.log(v);
// var v = 12;

//---------------------------------------------------

/* var v = 12;
function f1() {
    console.log(v);  // undefined..
    var v = 13;
}
f1(); // f1-scope  <-- global-scope */

//---------------------------------------------------

//  Quiz

/* var v = 12;
function f1() {
    function f2() {
        console.log(v);
    }
    f2();
    var v = 13;
}
f1(); */

//---------------------------------------------------

// var v=12;
// var v=12;

//---------------------------------------------------

/* var v = 12;
if (true) {
    var v = 13;
}
console.log(v); */

//---------------------------------------------------


// problems with 'var' keyword

/*

    => always get hoist
    => we can re-declare same variable within scope
    => no block-scope

    soln : using 'let' & 'const' kyewords with block-scope  ( ES6 )

*/

//---------------------------------------------------

// console.log(v);
// let v = 12;

//---------------------------------------------------

// let v=12;
// let v=12;

//---------------------------------------------------

/* var v = 12;
if (true) {
    let v = 13;
}
console.log(v); */


//---------------------------------------------------

// const v = 100;
// v = 200;

//---------------------------------------------------

// const tnr = {
//     name: 'Nag'
// };
// tnr.name = "New Tnr"

//---------------------------------------------------

// summary :

/*

    => use 'let' for mutable references
    => use 'const' for immutable references
    => avoid using 'var' keyword

*/


//---------------------------------------------------