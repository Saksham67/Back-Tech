console.log("importing function from utils.js");

// const {sum, sub, multi, div} = require("./utils.js")

import {sum, sub, multi, div} from './utils.js'

console.log("sum is: ", sum(8,2));
console.log("sub is: ",sub(8,2));
console.log("multi is: ",multi(8,2));
console.log("div is: ",div(8,2));

