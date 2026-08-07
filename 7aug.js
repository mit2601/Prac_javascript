// function User(name,id,company) {
//     this.name = name;
//     this.id=id;
//     this.company=company;

// }

// const user1 = new User("Mit",1,"Xenabler");
// const user2 = new User("Rahul",2,"technovate");

// console.log(user1);
// console.log(user2);


// function User(name, email, age, city) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.city = city;
// }

// const user1 = new User("Mit", "mit@gmail.com", 22, "Ahmedabad");
// const user2 = new User("Raj", "raj@gmail.com", 25, "Mumbai");

// console.log(user1);
// console.log(user2);







// function User(name, email, age, city) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.city = city;
//     this.greet = ()=>{
//         console.log(`hello ${this.name}`);
//         this.age++; // method can update the property 
//         console.log(`my age is ${this.age}`)

//     }

// }

// const user1 = new User("Mit", "mit@gmail.com", 22, "Ahmedabad");
// const user2 = new User("Raj", "raj@gmail.com", 25, "Mumbai");

// console.log(user1);
// console.log(user2);

// console.log(user1.age)// here while creating object in evry object greet method will be store so we can access it
//                        // but it is not efficient way because evry time we create new methods so thats why we use prototype

// user1.greet(); 
// user2.greet()


//Prototype

//  function User(name, email, age, city) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.city = city;
// }

// User.prototype.greet = function () {
//     console.log(`hello ${this.name}`)  // here if we use prototype so it will use same method will not create method in evry obj
// }

// const user1 = new User("Mit", "mit@gmail.com", 22, "Ahmedabad");
// const user2 = new User("Raj", "raj@gmail.com", 25, "Mumbai");

// console.log(user1);
// console.log(user2);

// user1.greet()



// code snippet for output prediction

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.introduce = function () {
//         console.log(this.name);
//     };
// }

// const user1 = new User("Mit", 22);
// const user2 = new User("Raj", 25);

// console.log(user1.age);
// user2.introduce();
// console.log(user1.name);

// 22 raj mit




// function Person(name) {
//     this.name = name;
// }

// const person1 = new Person("Mit");

// console.log(person1.name);
// console.log(person1 instanceof Person);
// console.log(person1 instanceof Object);

// Mit true true


// function Employee(name, salary) {
//     this.name = name;
//     this.salary = salary;

//     this.getSalary = function () {
//         return this.salary;
//     };
// }

// const emp = new Employee("Mit", 50000);

// emp.salary = 60000;

// console.log(emp.getSalary());
// console.log(emp.name);


// 60000 Mit


// function Counter(value) {
//     this.value = value;

//     this.increment = function () {
//         this.value++;
//     };
// }

// const a = new Counter(5);
// const b = new Counter(10);

// a.increment();
// a.increment();
// b.increment();

// console.log(a.value);
// console.log(b.value);

// 7 11


// function User(name) {
//     this.name = name;

//     this.sayHello = function () {
//         console.log("Hello " + this.name);
//     };
// }

// const user = new User("Mit");

// const hello = user.sayHello; // here the function is assign to the hello but it can not access the obj property which is name
//                                // it will refer the global space for the find variable which is undefined

// hello();
// user.sayHello();


// hello undefined 
// hello Mit