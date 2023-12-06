import { message,user,test } from "./library.js";
console.log(message);


// document.body.innerHTML=message;        //to write in document
user("Shehroz");

let a =new test();                      //make object of test class





// we can also use Alice (short name for functions) in this way too 
// import { message,user as us,test } from "./library.js";

// console.log(message);


// // document.body.innerHTML=message;        //to write in document
// us("Shehroz");

// let a =new test();                      //make object of test class





// if we want to import all functions, variables and class of library file then we use 

// import * as all from "./library.js";

// console.log(all.message);


// // document.body.innerHTML=message;        //to write in document
// all.user("Shehroz");

// let a =new all.test();                      //make object of test class


// impoting default function 
import {default as yahoo} from './library.js'        //we alise default function as yahoo to call
// import yahoo from './library.js'               //we can also use this way default function
yahoo();


// For aggregate modules
import { show } from "./bridge.js";
show();