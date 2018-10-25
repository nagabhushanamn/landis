console.log('-index.js-');

//----------------------------------------------------

//pack1/mod1.js
// var landis = landis || {};
// landis.mod1.doWork();


//----------------------------------------------------

let mod1 = require('landis-greet')
mod1.greetMe("en");
mod1.greetMe("es");
mod1.greetMe();

let lodash = require('lodash');

let arr1 = [1, 2, 3];
let arr2 = [2, 3];

let diff = lodash.difference(arr1, arr2);
console.log(diff);



//----------------------------------------------------
