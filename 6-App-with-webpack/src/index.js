
require('./css/style.css')
let util = require('./util');  // common-js module
console.log(util.add(1, 2));



// import { item1,item2 } from './hotel/menu'; // ES module

// console.log(item1)
// console.log(item2)


// or



// import { item1 as nVeg,item2 as veg } from './hotel/menu'; // ES module

// console.log(nVeg)
// console.log(veg)


// or

// import * as items from './hotel/menu';
// console.log(items.item1);
// console.log(items.item2);
// items.item1=null // error
// items.item1.price=0;


//

import primaryItem, { item1, item2 } from './hotel/menu'