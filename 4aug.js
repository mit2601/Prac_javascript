// const p1 = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p1 resolved");
//     },10000);
// });

// const p2 = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p2 resolved");
//     },5000);
// });

// async function handlep() {
//     const val1= await p2;  // here first p2 will executed then it will go to the p1 but p1 promise will get while p2 is responding
//     console.log(val1);

//     const val2 = await p1;
//     console.log(val2);
// }
// handlep();


// fetch API


const API_URL = "https://jsonplaceholder.typicode.com";

// async function getUsers() {
//   const response = await fetch("");     
//   const data = await response.json();
//   console.log(data);
// }


// async function getAllUserNames() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) throw new Error(`Error: ${response.status}`);
//     const users = await response.json();
//     return users.map(user => user.name);
//   } catch (error) {
//     console.error("Failed to fetch users:", error.message);
//   }
// }


// async function getUser(userid) {
//     try {
//         const [users, posts, comments] = await Promise.all([
//             // fetch("https://jsonplaceholder.typicode.com/users/5"),
//             fetch("https://jsonplaceholder.typicode.com/users"),
//             // fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`),
//             fetch(`https://jsonplaceholder.typicode.com/posts`),
//             fetch("https://jsonplaceholder.typicode.com/comments")

//         ]);

//         if (!users.ok || !posts.ok || !comments.ok) {
//             throw new Error("Failed to fetch data");
//         }

//         const [userData, postData, commentsData] = await Promise.all([
//             users.json(),
//             posts.json(),
//             comments.json()
//         ]);

//         // const name = userData.map(user => user.name);
//         // console.log(name);
//         // // console.log(userData.name);
//         // console.log(typeof userData[0].id);
//         // let id = 5;
//         // const name = userData.find(user => user.id == id)?.name ?? "User not found";
//         // console.log(name);
//         console.log(postData);
//         // const postbyuser = postData.filter( user => user.userID === 1);
//         // console.log(postbyuser);


//     } catch (error) {
//         console.log(error.message);
//     }
// }

// getUser(2);




// async function newPost() {
//     try {

//         const response = await fetch(`${API_URL}/posts`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 title: "Learning Fetch API",
//                 body: "Today I learned POST requests.",
//                 userId: 1
//             })
//         });

//         if (!response.ok) {
//             throw new Error("Failed to create post");
//         }

//         const post = await response.json();

//         console.log(post);

//     } catch (error) {

//         console.log(error.message);

//     }
// }

// newPost();


// exixting post chnage


// async function updatepost(postId) {
//     try {

//         const response = await fetch(`${API_URL}/posts/${postId}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 title: "Learning Fetch API",
//                 body: "Update using put",
//                 userId: 1
//             })
//         });

//         if (!response.ok) {
//             throw new Error("Failed to create post");
//         }

//         const post = await response.json();

//         console.log(post);

//     } catch (error) {

//         console.log(error.message);

//     }
// }

// updatepost(2);

// async function patchPost(postId) {
//     try {

//         const response = await fetch(`${API_URL}/posts/${postId}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 title: "Only Title Updated"
//             })
//         });

//         if (!response.ok) {
//             throw new Error("Failed to update post");
//         }

//         const updatedPost = await response.json();

//         console.log(updatedPost);

//     } catch (error) {

//         console.log(error.message);

//     }
// }

// patchPost(2);



// async function deletePost(postId) {
//     try {

//         const response = await fetch(`${API_URL}/posts/${postId}`, {
//             method: "DELETE"
//         });

//         if (!response.ok) {
//             throw new Error("Failed to delete post");
//         }

//         console.log(`Post ${postId} deleted successfully`);

//     } catch (error) {

//         console.log(error.message);

//     }
// }

// deletePost(5);



