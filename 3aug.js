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







