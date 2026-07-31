
// setInterval((num)=>{

//     num = 0;
//     num++;
//     console.log(num);
//     if(num>6){
//         clearInterval();
//     }


// })

// let num = 0;

// const timer = setInterval(()=>{
//     console.log(num);
//     num++;
//     if(num>5){
//         clearInterval(timer); //if we not pass ref code will never close it will take infinite loop
//     }
// })



// console.log(1);
// console.log(2);

// setTimeout(()=>{
//     console.log("after 2 sec");
// });
// console.log("executed before")


// call back hell is like so much nested fuction calling which makes code messy thats why we use promises

//promise in JS

// call back hell become messy then we will use promises but at some of point it will become also
// harder to under stand so the we use async await program

// just for understanding 


// getData(1, () => {
// console.log("getting data 2....");
// getData(2, () => {
// console.log("getting data 3....");     // this how code look like while callback hell 
// getData(3, () => {
// console.log("getting data 4....");
// getData(4);
// });
// });
// });




// getData(1)
// .then((res) => {
// return getData(2);
// })
// .then((res) => {             //we can manage asyncronous function call by this key word and promises look like this
// return getData(3);
// })
// .then((res) => {
// console.log("Final success");
// });



// async function getAllData() {
// await getData(1);
// await getData(2);     // and then async await solve the entire problem to manage messy code 
// await getData(3);
// }


//  ASYNCHRONOUS JAVASCRIPT
//                           │
//                           ▼
//                      CALLBACKS
//                           │
//                           │ problem:
//                           ▼
//                    CALLBACK HELL
//                           │
//                           ▼
//                      PROMISES
//                           │
//                     ┌─────┴─────┐
//                     │           │
//                   then()      catch()
//                     │
//                     ▼
//                  async/await
//                     │
//              ┌──────┴──────┐
//              │             │
//           sequential    Promise.all()