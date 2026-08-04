// async function fetchResources() {
//     try {
//         // Fetch all APIs together
//         const [users, posts, comments] = await Promise.all([
//             fetch("https://jsonplaceholder.typicode.com/users"),
//             fetch("https://jsonplaceholder.typicode.com/posts"), this will execute as parallel task and save time 
//             fetch("https://jsonplaceholder.typicode.com/comments")
//         ]);

 // // const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
// // const users = await usersResponse.json();

//  // const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");   // this is how we can use it separate execution async operation
//  // const posts = await postsResponse.json();                               // this will execute in sequence

//  // const commentsResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
//  // const comments = await commentsResponse.json();

//         // Convert all responses into JSON
//         const [userData, postData, commentData] = await Promise.all([
//             users.json(),  //data convert into json
//             posts.json(),
//             comments.json()
//         ]);

//         console.log(userData);
//         console.log(postData.length);
//         console.log(commentData.length);

//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchResources();


// function fetchStudent(id) {
//     return new Promise((resolve, reject) => {
//         if (id === 1) {
//             resolve({
//                 id: 1,
//                 name: "Mit",
//                 course: "MERN"
//             });
//         } else {
//             reject("Student Not Found");
//         }
//     });
// }

// async function getStudent() {
//     try {
//         const user = await fetch("https://dummyjson.com/products"); //single api fetch
//         const data =await user.json(); // if we here not use await then it will print promise as an output
//         // const student = await fetchStudent(1); //local function promise execution   1st this promise resolve then fetch and then data 
//         // console.log(student);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getStudent();





// diff of three method

// | Feature                         | `Promise.all()`       | `Promise.race()`                   | `Promise.allSettled()`               |
// | ------------------------------- | --------------------- | ---------------------------------- | ------------------------------------ |
// | Waits for all Promises          | ✅ Yes                 | ❌ No                               | ✅ Yes                                |
// | Returns first completed Promise | ❌ No                  | ✅ Yes                              | ❌ No                                 |
// | Stops if one Promise rejects    | ✅ Yes                 | ❌ No                               | ❌ No                                 |
// | Returns successful results      | ✅ Only if all succeed | ✅ First settled Promise            | ✅ All results                        |
// | Returns rejected results        | ❌ No                  | ✅ If first settled Promise rejects | ✅ Yes                                |
// | Best Use Case                   | Need all data         | Need the fastest result            | Need every result, even if some fail |



function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Mit"
            });
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                orderId: 101,
                userId
            });
        }, 2000);
    });
}

function getPayment(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                paymentId: 5001,
                orderId
            });
        }, 3000);
    });
}

async function processOrder() {

    const user = await getUser();

    const order = await getOrders(user.id);

    const payment = await getPayment(order.orderId);

    console.log(user);
    console.log(order);
    console.log(payment);      // it will take time till last function executed like sum of execution time of all awaits

}

processOrder();


// method and property

// In JavaScript, the fundamental difference is that a property is a value associated with an object
//  (like a noun), whereas a method is an action an object can perform (like a verb)


// Syntax to 
// access       object.propertyName     object.methodName() (Uses parentheses)     // here property means what is in object
                                                                                //and  method means how we can manipulate object




