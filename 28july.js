// const student = {
//     id: 1,
//     name: "Mit",
//     age: 22,
//     course: "MERN"
// };

// // Spread Operator - Copy Object
// const studentCopy = {
//     ...student
// };

// console.log(studentCopy);

// // Spread Operator - Update Object
// const updatedStudent = {
//     ...student,
//     age: 23,
//     city: "Ahmedabad"
// };

// console.log(updatedStudent);

// // Spread Operator - Merge Arrays
// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node", "Express", "MongoDB"];

// const fullStack = [...frontend, ...backend];

// console.log(fullStack);

// // Spread Operator - Add New Items
// const allCourses = [...fullStack, "React", "Next.js"];

// console.log(allCourses);

// // Spread Operator - Copy Array
// const copiedCourses = [...allCourses];

// console.log(copiedCourses);

// // Rest Operator - Function Parameters
// function totalMarks(...marks) {
//     console.log(marks);

//     const total = marks.reduce((sum, mark) => sum + mark, 0);

//     return total;
// }

// console.log(totalMarks(80, 75, 90, 85));

// // Rest Operator - Array Destructuring
// const cars = [
//     "BMW",
//     "Audi",
//     "Tesla",
//     "Toyota",
//     "Honda"
// ];

// const [firstCar, secondCar, ...remainingCars] = cars;

// console.log(firstCar);
// console.log(secondCar);
// console.log(remainingCars);

// // Rest Operator - Object Destructuring
// const employee = {
//     id: 101,
//     name: "John",
//     city: "Ahmedabad",
//     salary: 50000,
//     department: "IT"
// };

// const { name, ...otherDetails } = employee;

// console.log(name);
// console.log(otherDetails);

// // Spread Operator - Function Arguments
// const numbers = [10, 20, 30, 40];

// function add(a, b, c, d) {
//     return a + b + c + d;
// }

// console.log(add(...numbers));

// // Rest + Spread Operator
// function registerStudents(batchName, ...students) {
//     const finalList = [...students, "New Student"];

//     console.log(batchName);
//     console.log(finalList);
// }

// registerStudents(
//     "Rahul",
//     "Mit",
//     "John",
//     "stark",
//     "ketul"
// );

// const cars = [
//     "BMW",
//     "Audi",
//     "Tesla",
//     "Toyota",
//     "Honda"
// ];

// for Each never return the values it will just go through the array

// cars.forEach((x)=>{
//     console.log(x);
// })

//filter returns the value 


// const num = [1,2,3,4,5,6,7,8]
// // let newnum = num.filter((num)=>num>4)
// // console.log(newnum);
// let newnum=[];
// num.forEach((num)=>{
//     if(num>4){
//         newnum.push(num);

//     }
// })
// console.log(newnum);

const employees = [
  { id: 1, name: "Nelson", department: "Engineering", salary: 85000, active: true },
  { id: 2, name: "Mit", department: "QA", salary: 55000, active: true },
  { id: 3, name: "Rahul", department: "Engineering", salary: 92000, active: false },
  { id: 4, name: "Priya", department: "HR", salary: 60000, active: true },
  { id: 5, name: "Amit", department: "Engineering", salary: 78000, active: true },
  { id: 5, name: "Nisarg", department: "Engineering", salary: 78000, active: true }
];


// let empnew = employees.map((x)=>({
//     id: x.id,
//     name: x.name,
//     department: x.department
// }));
// console.log(empnew);


// let empnew = employees.filter((x)=>x.active)  // we can also use x.active===true
// console.log(empnew);

// let newemp = employees.filter((x)=>x.salary>80000)
// console.log(newemp);


// let newemp = employees.find((employee) => employee.id === 3);
// console.log(newemp);

// let newemp = employees.filter((x)=>x.department=== "HR")
// console.log(newemp);

// const employeesStartingWithN = employees.filter((employee) =>
//     employee.name.startsWith("N")
// );

// console.log(employeesStartingWithN);

// const totalSalary = employees.reduce((total, employee) => {
//     return total + employee.salary;
// }, 0);

// console.log(totalSalary);

// const averageSalary =
//     employees.reduce((total, employee) => total + employee.salary, 0) / employees.length;

// console.log(averageSalary);


//template literals 

// const firstName = "Mit";
// const lastName = "Patel";
// const age = 22;
// const city = "Ahmedabad";

// console.log(`Name: ${firstName} ${lastName}`); //we can concate two string as well
// console.log(`Age: ${age}`);
// console.log(`City: ${city}`);
// console.log(`Next Year Age: ${age + 1}`); // we can perform basic math operation here

// const marks = [85, 90, 88];

// console.log(`First Mark: ${marks[0]}`);

// const student = {
//     course: "MERN",
//     duration: "6 Months"
// };

// console.log(`Course: ${student.course}`);
// console.log(`Duration: ${student.duration}`);

// console.log(`Eligible: ${age >= 18 ? "Yes" : "No"}`);  // we can use ternary operators as well 

// function greet(name) {
//     return `Hello ${name}`;
// }

// console.log(`${greet("Mit")}`);

// const message = `
// Welcome ${firstName}
// keep it up!
// `;

// console.log(message);

let num = [1,2,3,4,5,6];

let newnum = num.map((num)=>num+10)
                .map((num) => num + 1);  //we can use methods in chain like this like we can implement multiple methods
console.log(newnum);





