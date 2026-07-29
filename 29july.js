// objects 
const sym = Symbol("key1");
const user = {  // we declare object as const but it is still can be change because it ref to the object an dif we want 
                // to make completely unchangeble so we can use freeze method
    name : "mit",
    "fullname":"Mit Patel",
    tech:"MERN",
     age: 21,
     [sym] : "vijapur",
     email : "mit.patel@google.com",
     fullname:{
        Full : "Mit A. patel"
     }
}

// console.log(user.name);
// console.log(user["fullname"]);
// console.log(user.age);
// console.log(user.sym); // we cannot access symbol like this 
// console.log(user[sym]);
// console.log(user.email);
// user.email="pmeet57@gmail.com"
// console.log(user.email);


// Object.freeze(user);  // after freeze object value will not change
// user.name = "rahul";
// console.log(user.name);

// user.greet = function(){
//   return `hello ${user.name}`;
// }
//console.log(user.greet()); // it will also print undefined because function is not return any thing
//user.greet(); // it will take return value and execute console.log

//console.log(user.greet());

// console.log(user);

// console.log(user.fullname);    // we can also access nested object as well
// console.log(user.fullname.Full);

// console.log(Object.keys(user)); // we can retrive keys 

// console.log(Object.values(user));


const obj1 = {a:"1",b:"2"}
const obj2 = {c:"3",d:"4"}

// // obj3 = {obj1,obj2}
// // // console.log(obj3);

// // const obj3 = Object.assign({},obj1,obj2); //here we pass { } for guranteed format
// // console.log(obj3);

// // with using spread
//  const obj3 = {...obj1,...obj2} // here we dont have to mention any {}
//  console.log(obj3);
 
// console.log(Object.entries(user));

const car = {
    brand: "BMW",
    model: "X5",
    price: 90000
};

// for (const key in car) {
//     console.log(key, car[key]);
// }

// const property = "color";

// car[property] = "Black";

// console.log(car);

// Object.keys(car).forEach((key)=> {
//     console.log(key,car[key]);
// });


// console.log(car.hasOwnProperty('name'));


// const user = {
//     name: "Mit",
//     age: 22
// };

// user.age = 23;// Mutable update

// console.log(user);

// const user2 = {
//     ...user,  // here we are performing immutable update so main value will not chnage
//     age: 25
// };

// console.log(user);
// console.log(user2);

// const user3 = Object.assign({}, user, {   // with using of assign method
//     age: 30
// });

// console.log(user3);

// Object.freeze(user3);  // in freeze( ) method entire object cant be update or change any property

// user3.age = 35;
// user3.city = "Ahmedabad";
// delete user3.name;

// console.log(user3);

// const user4 = {
//     name: "Rahul",
//     age: 25
// };

// Object.seal(user4); // if we use seal ( ) so we can not add or remove new property but we can make change in old one

// user4.age = 30;
// user4.city = "Surat";
// delete user4.name;

// console.log(user4);

// For understanding shallow copy deep copy and copy by ref and value
 
// PRIMITIVE
//    ↓
// Copied by value
//    ↓
// Independent values


// OBJECT / ARRAY
//    ↓
// Assignment shares reference
//    ↓
// const b = a


// SHALLOW COPY
//    ↓
// { ...a }
//    ↓
// New outer object
//    ↓
// Nested references may still be shared


// DEEP COPY
//    ↓
// structuredClone(a)
//    ↓
// Nested data also copied
//    ↓
// Fully independent clone

// let number1 = 10;
// let number2 = number1;

// number2 = 20;

// console.log(number1);
// console.log(number2);


// let string1 = "Mit";
// let string2 = string1;

// string2 = "Rahul";

// console.log(string1);
// console.log(string2);


// let boolean1 = true;
// let boolean2 = boolean1;

// boolean2 = false;

// console.log(boolean1);
// console.log(boolean2);


// const user1 = {
//     name: "Mit",
//     age: 22
// };

// const user2 = user1;

// user2.name = "Rahul";

// console.log(user1);
// console.log(user2);


// const arr1 = [10, 20, 30];
// const arr2 = arr1;

// arr2.push(40);

// console.log(arr1);
// console.log(arr2);


// const person1 = {
//     name: "Mit",
//     age: 22
// };

// const person2 = {
//     ...person1
// };

// person2.name = "Rahul";

// console.log(person1);
// console.log(person2);


// const employee1 = {
//     name: "Mit",
//     age: 22
// };

// const employee2 = Object.assign({}, employee1);

// employee2.name = "Rahul";

// console.log(employee1);
// console.log(employee2);


