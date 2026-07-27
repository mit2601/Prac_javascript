//check odd even

// let a = 13;

// if (a%2===0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }


//Largest of three


// let a = 255;
// let b = 215;
// let c = 7000;


//with ternary operator
// function largest(a,b,c){
// let large = (a>b)?(a>c?a:c):(b>c?b:c);

// console.log(large);
// }
// largest(a,b,c);


//with if else

// function LARGE(a,b,c){
// if (a>b){
//     if(a>c){
//         return a;
//     }
//     else{
//         return c;
//     }
// }
// else{
//    if(b>c){
//     return b;
//    }
//    else{
//     return c;
//    }
// }
// }

// console.log(LARGE(a,b,c));




//string reverse

//with methods 
// let str = "john snow ";
// const strrev=(str)=>str.split("").reverse().join("");// in arrow function if we need explicit return so we have to use {}
//                                                        // and if we implicit so no need of{}
// console.log(strrev(str));


// let rev = str.split("").reverse().join("");
 // here first string is coverted into array and then reverse it an dthen join it with using of inbuilt methods
// console.log(rev);



//with using of loop

// let str = "TonyStark"
// //let rev;// we cant initialize like this and also we have to declare in global place
// let rev="";
// for (let i=str.length-1;i>=0;i--){

// rev=rev+str[i];

// }
// console.log(rev);



//palindrome 


// let str1 = "madam"
// let str2="captain"

// function ispalindrome(str){
//     let reverse=str.split("").reverse().join("");
   
//     return str===reverse;

// }

// if(ispalindrome(str2)){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }


// with using of for loop


// let str1="madam"
// function ispalindrome(str){
//     let rev = "";
//     let len= str.length -1;
//     for ( let i =len;i>=0;i--){
//           rev = rev + str[i];
//     }
//     return rev===str;
// }
// if(ispalindrome(str1)){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }


// function for basic calculator opration

// let num1=26;
// let num2=19;
// function calculator(operation){
//     return operation(num1,num2);
// }

// sum = (num1,num2)=>num1+num2;
// sub = (num1,num2)=>num1-num2;
// div = (num1,num2)=>num1/num2;
// multi = (num1,num2)=>num1*num2;

// console.log(calculator(sum));
// console.log(calculator(div));
// console.log(calculator(multi));


const originalCars = [
  "BMW",
  "Audi",
  "Tesla",
  "Toyota",
  "Honda",
  "Mercedes",
  "Kia",
  "Hyundai"
];

// push() - Adds one or more elements to the end of the array
let cars = [...originalCars];
cars.push("Ford");
console.log(cars);

// pop() - Removes and returns the last element
cars = [...originalCars];
console.log(cars.pop());
console.log(cars);

// unshift() - Adds one or more elements to the beginning
cars = [...originalCars];
cars.unshift("Ferrari");
console.log(cars);

// shift() - Removes and returns the first element
cars = [...originalCars];
console.log(cars.shift());
console.log(cars);

// includes() - Checks whether an element exists in the array
cars = [...originalCars];
console.log(cars.includes("Tesla"));

// indexOf() - Returns the index of the first matching element
cars = [...originalCars];
console.log(cars.indexOf("Toyota"));

// lastIndexOf() - Returns the index of the last matching element
cars = [...originalCars];
cars.push("BMW");
console.log(cars.lastIndexOf("BMW"));

// slice() - Returns a shallow copy of a portion of the array
cars = [...originalCars];
console.log(cars.slice(2, 5));
console.log(cars);

// splice() - Adds, removes, or replaces elements in the original array
cars = [...originalCars];
cars.splice(2, 2, "Ford", "Volvo");
console.log(cars);

// sort() - Sorts the array alphabetically or by custom logic
cars = [...originalCars];
cars.sort();
console.log(cars);

// reverse() - Reverses the order of the array
cars = [...originalCars];
cars.reverse();
console.log(cars);

// join() - Converts an array into a string
cars = [...originalCars];
console.log(cars.join(" | "));

// concat() - Merges two or more arrays
cars = [...originalCars];
const luxuryCars = ["Rolls Royce", "Bentley"];
console.log(cars.concat(luxuryCars));
