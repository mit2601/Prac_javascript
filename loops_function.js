// // student = {
// //     name: "rahul",
// //     age: 22,
// //     result: "pass",
// //     rollno: 1234
// // }


// // for (let key in student) {
// //     console.log(key + " : " + student[key]);
// // }   


// // for (i=0; i<=50; i++){
// //     if (i%2==0){
// //         console.log(i);
// //     }
// // }

// let i = 0;
// while(i<=50){
//     if (i%2==0){
//         console.log(i);
//     }
//     i++;
// }
num1 = 10;
num2 = 20;

function math(operation) {
    operation(num1, num2);
}

sum = (a, b) => {
    console.log(a + b);
}
div=(a,b)=>{
    console.log(a/b);
}


const multiply= function(a,b){
    console.log(a*b);
}
math(multiply);

math(sum);
math(div);

(function(){
    console.log(num1-num2);
})();
 