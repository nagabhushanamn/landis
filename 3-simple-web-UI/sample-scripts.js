
//#1
/* 
function foo(){}
function bar(){foo()}
function baz(){bar()}
baz()  
 */
// #2


// function foo() { throw new Error('oops') }
// function bar() { foo() }
// function baz() { bar() }
// baz() 

// #3

// function foo(){
//     foo()
// }
// foo()

// #4

// function longRunning() {
//     var i = 0;
//     while (i < 10) { console.log('im long...'); i++ }
// }
// function shortRunning() {
//     console.log('short...');
// }

// longRunning();
// shortRunning();


// #5


/*

    <button class="veg">Veg-1</button>
    <button class="veg">Veg-2</button>
    <button class="non-veg">Non-Veg</button>

*/

console.log('init..');

$.on('.veg', 'click', function vegHandler(e) {
    console.log('handling event on .veg elements');
});
$.on('.non-veg', 'click', function onVegHandler(e) {
    console.log('handling event on .non-veg elements');
});
console.log('cont with other work..');

function longRunning() {
    var i = 0;
    while (i < 10) { console.log('im long...'); i++ }
}
longRunning();


// #6 Non Blocking IO

console.log('init..');

// IO
setTimeout(function(){
    console.log('conumes IO Result..');
},2000);

console.log('cont. with other work..');

function longRunning() {
    var i = 0;
    while (i < 10) { console.log('im long...'); i++ }
}
longRunning();