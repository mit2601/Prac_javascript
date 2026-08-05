// function mp(){
//     let a =10 ;
  
// }

// console.log(mp());


// const getUser = require("./4aug");
// import getUser from "./4aug.js";

// getUser(2)

// import {add,subtract,multiply,divide} from "./math.js"
// let a = 19;
// let b = 26;
// console.log(add(a,b));
// console.log(multiply(a,b))
// console.log(subtract(a,b))
// console.log(divide(a,b))

// import { employees } from "./employee.js";

// // console.log(employees)

// console.log(employees.employeeList[4].name)


// function x(){
//     let a = 10;

//     function y(){
//         console.log(a);
//     }
//     y();
// }

// x();


// function x(){
//     let a = 10;

// //    return function y(){
// //         console.log(a);
// //     }
// function y(){
//         console.log(a);
//     }
//     a=100;

//   return y;
// }

// const z = x();
// //console.log(z);
// // console.log(z());
// z();

// function sum(a) {

//     return function (b) {

//         return function (c) {

//             return a + b + c;

//         };

//     };

// }

// console.log(sum(10)(20)(30));


// function calculatePrice(tax) {

//     return function (price) {

//         return price + price * tax;

//     };

// }

// const gst18 = calculatePrice(0.18);

// console.log(gst18(1000));
// console.log(gst18(500));
// console.log(gst18(700));



// function greet(name) {

//     setTimeout(() => {
//         console.log(`Hello ${name}`);
//     }, 2000);

// }

// greet("Mit");